import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';





export default class App extends React.Component {

  state = {
    userLocation: null,
    gyms: []
  }


  getUserLocation= () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          
        }
       
        
      });
      fetch('https://spar-1531890022056.firebaseio.com/gyms.json', {
        method: 'POST',
        body: JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
      console.log(position.coords.latitude)
      
    }, err => console.log(err));

  }


getGymsHandler = () => {
  fetch('https://spar-1531890022056.firebaseio.com/gyms.json')
      .then(res => res.json())
      .then(parsedRes => {
        const placesArray = [];
        for (const key in parsedRes) {
          placesArray.push({
            latitude: parsedRes[key].latitude,
            longitude: parsedRes[key].longitude,
            gymName: parsedRes[key].gymName,
            id: key
          })
        }
        this.setState({
          gyms: placesArray
        });

      })
      .catch(err => console.log(err));
      //console.log(position.coords.latitude)

}



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftAlign}>
            
            <Image 
            style={ styles.image }
            source={{uri: 'https://media.istockphoto.com/vectors/austin-skyline-vector-id544585144?k=6&m=544585144&s=612x612&w=0&h=uSiV5ois-A72eOdSRS6vZDZPb7SkGFWcpMfGDABhvZ4='}}
            />
          </View>
        
        <View style={styles.header}> 
          



          <View styles={styles.right}>
              <Text style={styles.text}>
                Austin Boxing Gyms 
              </Text>
            
              <View style={{alignItems: 'center'}}>
              <TouchableHighlight  onPress={this.getGymsHandler}>
              <Image
            
                source={require('./images/button_locate3.png')}
                />
              
              </TouchableHighlight>
        
         {/* <Button title="Locate Boxing Gyms" color="white" onPress={this.getGymsHandler}/> */}
          </View>
          
           
        </View>
       
          
       
       
        
        </View>
        
       
        {/* <FetchLocation style={styles.button} getUserLocation={this.getUserLocation}/>  */}
        <UsersMap 
        userLocation={this.state.userLocation} 
        gyms={this.state.gyms}
        />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8936F3',
    alignItems: 'center',
    justifyContent: 'center',
    
   
  },

  text: {
    marginTop: 10,
    color: '#1D1923',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center'
  },

  image: {
    width: 150, 
    height: 150, 
    borderRadius: 75,
    paddingLeft: 20,
    borderColor: 'black',
    borderWidth: 4
    // shadowColor: 'black',
    // shadowOffset: {width: 4, height: 2},
    // shadowRadius: 75,
    

  },

  // right: {
  //   justifyContent: 'flex-end',
  // },

  // leftAlign: {
  //   justifyContent: 'flex-start'
  // }



 
});
