import React from 'react';
import { StyleSheet, Button, View, Text, Modal, TouchableHighlight, FlatList, Image } from 'react-native';
import { sectionListData } from '../data/sectionListData';





const roster = props => {

  console.log(props.uri)
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

    return(
      
       <View>
       
          <View style={styles.container}>
          <Image 
            // style={ styles.image }
            source={{uri: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/11024786_1007674182594713_5349274398504884772_n.png?_nc_cat=0&oh=c98e7eb8d48b2ca1427ff38f2695ab36&oe=5C070B61'}}
            />

             <FlatList
          data={props.data}
          renderItem={({item}) => 
          
          <View style={styles.columns}>
          
          <Text style={[styles.roster, styles.fighterStats]}>{item.gender[0].toUpperCase() + item.gender.substr(1)}</Text>
          {/* <Text style={styles.roster}>{item.lastName}</Text> */}
          <Text style={[styles.roster, styles.fighterStats]}>{item.age}</Text>
          <Text style={[styles.roster, styles.fighterStats]}>{item.weight}</Text>
          </View>
        
        
        
        }
          ListHeaderComponent={({header}) => 
          <View>
            <View style={styles.clubBorder}>
            <Text style={styles.club} > {props.title} </Text>
            {/* <Image 
            // style={ styles.image }
            source={{uri: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/11024786_1007674182594713_5349274398504884772_n.png?_nc_cat=0&oh=c98e7eb8d48b2ca1427ff38f2695ab36&oe=5C070B61'}}
            /> */}
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
    
    backgroundColor: '#EAE9E9',
    opacity: 100
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

export default roster;