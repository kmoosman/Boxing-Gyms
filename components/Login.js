import React from 'react';
import { StyleSheet, Button, View, Text, Modal, TouchableHighlight, FlatList, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';





export default ({history}) => (

 


    
      
       <View style={styles.container}>
      
          
          <Text >This is the Login page</Text>
          <Button title="Go to Home" onPress={() => Actions.home()} /> 
          
      </View>

       
   
);

const styles = StyleSheet.create({
    columns: {
      padding: 3,
      
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
     
      
    },
  
    columnHeaderText: {
      fontWeight: 'bold',
      width: 100,
      // backgroundColor: 'white',
      opacity: 100
      // borderWidth: 1
    },
  
    columnHeader: {
      
      backgroundColor: '#8DF7ED',
      opacity: 90
      // borderWidth: 1
    },
  
    fighterStats: {
      textAlign: 'center',
      width: 50,
     
    },
  
    roster: {
      width: 100,
      
    },
  
    header: {
      flexDirection: 'column',
      alignItems: 'center',
     
    },
  
    text: {
      //width: 115,
      
    
    },
  
    center:{
      textAlign: 'center',
      // borderBottomWidth: 1
      //width: 55,
      
    
    },
  
    club: {
      fontWeight: 'bold',
      fontSize: 20,
      backgroundColor: 'white',
      opacity: 100,
      width: '100%',
      textAlign: 'center',
    
      
    },
  
    clubBorder: {
      borderBottomWidth: 1,
      
      
    }
  
     
  });
  

