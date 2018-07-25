import React from 'react';
import { StyleSheet, Button, View, Text, Modal, TouchableHighlight, FlatList } from 'react-native';
import { sectionListData } from '../data/sectionListData';





const roster = props => {
  
    console.log('props' + props.gymBoxers)
  
  // const gymMarkers = props.gymBoxers.map(gymLocation => <Text>{gymLocation.gender} </Text>) 

    return(
      
       <View>
       
          <View style={styles.container}>
        <FlatList
          data={props.data}
          renderItem={({item}) => 
          
          <View style={styles.columns}>
          <Text style={styles.roster}>{item.gender}</Text>
          {/* <Text style={styles.roster}>{item.lastName}</Text> */}
          <Text style={[styles.roster, styles.fighterStats]}>{item.dob}</Text>
          <Text style={[styles.roster, styles.fighterStats]}>{item.weight}</Text>
          </View>
        
        
        
        }
          ListHeaderComponent={({header}) => 
          <View>
            <View>
            <Text style={styles.club} > {props.title} </Text>
            </View>
            <View style={styles.columns}>
              <Text style={styles.columnHeader}>Gender</Text>
              {/* <Text style={styles.columnHeader}>Last Name </Text> */}
              <Text style={[styles.columnHeader, styles.fighterStats]}>Age </Text>
              <Text style={[styles.columnHeader, styles.fighterStats]}>Weight </Text>
            </View>
          </View>
          }
          stickyHeaderIndices={[0]}

         
         />
      </View>
          {/* <sectionListData/>
          <View style={styles.header}>
           <Text style={styles.title}> Buffalo Boxing Club </Text>
          </View>

          

          <View style={styles.columns}>
            <Text style={[styles.text, styles.columnHeader]}> First Name </Text>
            <Text style={[styles.text, styles.columnHeader]}> Last Name </Text>
            <Text style={[styles.center, styles.columnHeader]}> Age </Text>
            <Text style={[styles.center, styles.columnHeader]}> Weight </Text>
          </View>

          <View style={styles.roster}>
            <Text style={styles.text}> Robert</Text>
            <Text style={styles.text}> Clemete </Text>
            <Text style={styles.center }> 8 </Text>
            <Text style={styles.center}> 65 </Text>
              
          </View>

           */}

          

         
       </View> 
    );
};

const styles = StyleSheet.create({
  columns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
   
    
  },

  columnHeader: {
    fontWeight: 'bold',
    width: 100,
    backgroundColor: 'white',
    opacity: 100
    // borderWidth: 1
  },

  fighterStats: {
    textAlign: 'center',
    width: 50,
    // borderWidth: 1,

   
  },

  roster: {
    width: 100,
   
    // borderWidth: 1
    
    
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
    //width: 55,
    
  
  },

  club: {
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'white',
    opacity: 100,
    width: '100%',
    textAlign: 'center'
  }
   
});

export default roster;