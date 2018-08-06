import React, { Component }  from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, Modal } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
// import { Actions } from 'react-native-router-flux';
import {createStackNavigator} from 'react-navigation';
import FetchLocation from './FetchLocation';
import UsersMap from './UsersMap';
import Roster from './Roster.js';
import Login from './Login';








export default class Home extends React.Component {
 

constructor (props) {
  super(props)
 
}
  
  state = {
    userLocation: null,
    gyms: [],
    boxers: [],
    gymBoxers: [],
    modalVisible: false,
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

  static navigationOptions = {
    header: null
  }
  

  render() {
    return (
     


      
        <View style={styles.container}>
          
        <Button title="Go to Login" onPress={() => this.props.navigation.navigate('login')} /> 
           
            <Image 
            style={styles.image}
            source={{uri: 'https://media.istockphoto.com/vectors/austin-skyline-vector-id544585144?k=6&m=544585144&s=612x612&w=0&h=uSiV5ois-A72eOdSRS6vZDZPb7SkGFWcpMfGDABhvZ4='}}
            />
      
          
        <View >
              <Text style={styles.text}>
                 Boxing Gyms 
              </Text>
            
            <View style={{alignItems: 'center'}}>
              
              <TouchableHighlight  onPress={this.getGymsHandler}>
              <Image
            
                source={require('../images/button_locate3.png')}
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
     
        
       
        // {/* <FetchLocation style={styles.button} getUserLocation={this.getUserLocation}/>  */}
        <UsersMap 
        userLocation={this.state.userLocation} 
        gyms={this.state.gyms}
        gymBoxers={this.state.gymBoxers}
        />
       
      </View>
     

    );
  }
}



const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#8936F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    
    
   
  },

  text: {
    marginTop: 10,
    color: '#1D1923',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },


  image: {
    width: 100, 
    height: 100, 
    borderRadius: 50,
    paddingLeft: 20,
    borderColor: 'black',
    borderWidth: 4,
    

  },
 
});


    
      
      //  <View>
      
          
      //     <Text style={[styles.roster, styles.fighterStats]}>This is a new page</Text>
      //     <Button title="Go to Login" onPress={() => history.push("/login")} /> 
          
      // </View>

       
   


// const styles = StyleSheet.create({
//   columns: {
//     padding: 3,
    
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
   
    
//   },

//   columnHeaderText: {
//     fontWeight: 'bold',
//     width: 100,
//     // backgroundColor: 'white',
//     opacity: 100
//     // borderWidth: 1
//   },

//   columnHeader: {
    
//     backgroundColor: '#8DF7ED',
//     opacity: 90
//     // borderWidth: 1
//   },

//   fighterStats: {
//     textAlign: 'center',
//     width: 50,
   
//   },

//   roster: {
//     width: 100,
    
//   },

//   header: {
//     flexDirection: 'column',
//     alignItems: 'center',
   
//   },

//   text: {
//     //width: 115,
    
  
//   },

//   center:{
//     textAlign: 'center',
//     // borderBottomWidth: 1
//     //width: 55,
    
  
//   },

//   club: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     backgroundColor: 'white',
//     opacity: 100,
//     width: '100%',
//     textAlign: 'center',
  
    
//   },

//   clubBorder: {
//     borderBottomWidth: 1,
    
    
//   }

   
// });



