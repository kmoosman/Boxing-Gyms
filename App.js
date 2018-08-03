import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, Modal } from 'react-native';
import { NativeRouter, Switch, Route, Link } from 'react-router-native';
// import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';
import Roster from './components/Roster.js';
import Home from './components/Home.js';
import Login from './components/Login.js';





export default class App extends React.Component {


  
  render() {
    return (
      <NativeRouter>
      <View >
        <Switch> 
          <Route exact path='/' component={Home}  test="hello"/>
          <Route  path='/login' component={Login} test="hello" />
        </Switch>
          {/* <Home />  */}
          {/* <Switch>
            <Route path="/components/Home" component={Home}/>
          </Switch> */}
          
          
      </View>
    
      
     
      </NativeRouter>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#8936F3',
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   }
 
 
// });
