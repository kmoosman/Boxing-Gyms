import React from 'react';
import { StyleSheet, Button, View, Text, Modal, TouchableHighlight, FlatList, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { sectionListData } from '../data/sectionListData';





const GymMembers = props => {
    

  console.log(props)
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
     function calculateAge(birthday) { 
        var birthDate = new Date(birthday)// birthday is a date
        var ageDifMs = Date.now() - birthDate.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      }   


    return(
      
       <View>
       
          <View style={styles.container}>
      

             <FlatList
          data={props.data}
          renderItem={({item}) => 
          
          <View style={[styles.columns,styles.fighterStatsWrapper]}>
          
          <Text style={[styles.roster, styles.fighterStats]}>{item.gender[0].toUpperCase() + item.gender.substr(1)}</Text>
          {/* <Text style={styles.roster}>{item.lastName}</Text> */}
          
          <Text style={[styles.roster, styles.fighterStats]}>{calculateAge(item.dob)}</Text>
          <Text style={[styles.roster, styles.fighterStats]}>{item.weight}</Text>
          </View>
        
        
        
        }
        keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={({header}) => 
          <View>
            <View style={styles.header}>
            
            <Text style={styles.club} > {props.title} </Text>
            
          
           
            </View>
            <View>
           
            </View>
            <View style={[styles.columns, styles.columnHeader]}>
              <Text style={[styles.columnHeaderText, styles.fighterStats]}>Gender</Text>
              {/* <Text style={styles.columnHeader}>Last Name </Text> */}
              <Text style={[styles.columnHeaderText, styles.fighterStats]}>Age </Text>
              <Text style={[styles.columnHeaderText, styles.fighterStats]}>Weight </Text>
            </View>
          </View>
          }
          stickyHeaderIndices={[0]}

         
         />
      </View>


          
      </View>
         
       
    );
};

const styles = StyleSheet.create({
  columns: {
    padding: 3,
    
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
   
    
  },

  columnHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    // backgroundColor: 'white',
    opacity: 100,
    
  },

  columnHeader: {
    
    backgroundColor: '#8DF7ED',
    opacity: 90,
    paddingLeft: 10,
    paddingRight: 10,
    
  },

  fighterStatsWrapper:{
    paddingLeft: 10,
    paddingRight: 10
  },

  fighterStats: {
    textAlign: 'center',
    width: 100,
    paddingLeft: 20,
    paddingRight: 20,
    
   
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
    flex: 1,
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 30,
    opacity: 100,
    // width: '50%',
    textAlign: 'center',
    paddingTop: 20, 
    paddingBottom: 5
    
  
    
  },

  clubBorder: {
    borderBottomWidth: 1,
    
    
  }

   
});

export default GymMembers;