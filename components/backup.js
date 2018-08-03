import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, Modal } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';
import Roster from './components/Roster.js';
import Home from './components/Home.js';





export default class App extends React.Component {

  state = {
    userLocation: null,
    gyms: [],
    boxers: [],
    gymBoxers: [],
    modalVisible: false,
  }

  

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
    //Add a new gym based on users location
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
        const boxersArray = [];
        for (const key in parsedRes) {
          var boxersTest = Object.values(parsedRes[key].boxers)
          
          console.log(parsedRes[key].boxers)
          placesArray.push({
          latitude: parsedRes[key].latitude,
          longitude: parsedRes[key].longitude,
          gymName: parsedRes[key].gymName,
          boxers: boxersTest,
          logo: parsedRes[key].logo,
          id: key,
        })

       

        console.log(placesArray)
          
        
        }
        this.setState({
          gyms: placesArray,
          // boxers: boxersArray
        });
        
        

      })}   



addBoxer = () => {
  fetch('https://spar-1531890022056.firebaseio.com/gyms/-LHp3K3xblBM62hpIQQW/boxers.json', {
        method: 'POST',
        body: JSON.stringify({
          gender: 'male',
          dob: '12/12/2008',
          weight: '75'
        })
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));

  }




  render() {
    return (
      <NativeRouter>
      <View style={styles.container}>
      <Switch>
        <Route path="/components/Home" component={Home}/>
      </Switch>
      
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          
          <View style={{marginTop: 22}}>
            <View>
              
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>

              </TouchableHighlight>
              <View> 
            
          </View>
              <Roster
                // gymBoxers={this.state.boxers}
              />
            </View>
          </View>
        </Modal>

        {/* <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight> */}
      </View>
    );
  }
}




        {/* <Roster/> */}
        <View >
        <Button title="Login" onPress={() => history.push('/components/Home')}> </Button>
            
            <Image 
            style={ styles.image }
            source={{uri: 'https://media.istockphoto.com/vectors/austin-skyline-vector-id544585144?k=6&m=544585144&s=612x612&w=0&h=uSiV5ois-A72eOdSRS6vZDZPb7SkGFWcpMfGDABhvZ4='}}
            />
        </View>
          
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
        
         
          </View>
          {/* Add boxer button */}
          {/* <View style={{alignItems: 'center'}}>
              
              <TouchableHighlight  onPress={this.addBoxer}>
              <Image
            
                source={require('./images/button.png')}
                />
              
              </TouchableHighlight>
        
         
          </View> */}
          
           
        </View>
     
        
       
        {/* <FetchLocation style={styles.button} getUserLocation={this.getUserLocation}/>  */}
        <UsersMap 
        userLocation={this.state.userLocation} 
        gyms={this.state.gyms}
        gymBoxers={this.state.gymBoxers}
        />
       
      </View>
      </NativeRouter>
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


  image: {
    width: 150, 
    height: 150, 
    borderRadius: 75,
    paddingLeft: 20,
    borderColor: 'black',
    borderWidth: 4

  },
 
});