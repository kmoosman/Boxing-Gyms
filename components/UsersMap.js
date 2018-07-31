import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Callout, Button } from 'react-native-maps';
import Roster from './Roster.js';


const usersMap = props => {
    let userLocationMarker = null;
    
    // console.log(props.gyms.boxers)
    
    if (props.userLocation) {
        userLocationMarker = <MapView.Marker coordinate={props.userLocation}
        
        />
    }
 

    const boxerStats = props.gymBoxers
    // console.log(boxerStats)                                        

    const gymMarkers = props.gyms.map(gymLocation => <MapView.Marker 
                                                                     pinColor='red' 
                                                                     title={gymLocation.gymName} 
                                                                      
                                                                     coordinate={gymLocation} 
                                                                     key={gymLocation.id}
                                                                     >

                                                        <MapView.Callout
                                                            style={{width: 300}}
                                                           >
                                                         <Roster 
                                                           data={gymLocation.boxers}
                                                           title={gymLocation.gymName}
                                                           uri={gymLocation.url}
                                                           style={{marginRight: 5}}
                                                         />
                                                         )
                                                    </MapView.Callout>              
                                                                    
                                                                     </MapView.Marker>

                                                                     
                                                                
                                                    

    );
    

    // const boxerMarker = props.boxers.map(boxerInfo => console.log(boxerInfo.gender)
                                                    


    //                                                 );



    // const boxerZ = props.gyms.boxers


    


    return(
       <View style={styles.mapContainer}>
          <MapView 
           
           initialRegion={{
             latitude: 30.2672,
             longitude: -97.750519,
             latitudeDelta: 0.17022,
             longitudeDelta: 0.07021,
           }}

           region={props.userLocation}
       
          style={styles.map}>
            {userLocationMarker}
            {gymMarkers}
           
            
            
           
          </MapView>
          {/* <Text>
              {boxerStats}
        </Text> */}
       </View> 
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        width: '90%',
        height: 400,
        
    },
    map: {
        marginTop: 10,
        width: '100%',
        height: '100%',
        borderRadius: 20,
    }
});

export default usersMap;