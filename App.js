import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
        <View style={styles.title}> 
          <Text style={styles.text}>
            Austin Boxing Gyms
          </Text>
        </View>
        <View style={{marginBottom: 20}}>
         <Button title="Locate Boxing Gyms" color="white" onPress={this.getGymsHandler}/>
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
    backgroundColor: '#181514',
    alignItems: 'center',
    justifyContent: 'center',
    
   
  },

  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10
  },



 
});
