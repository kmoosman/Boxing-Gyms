import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Callout } from 'react-native-maps';

const usersMap = props => {
    let userLocationMarker = null;

    if (props.userLocation) {
        userLocationMarker = <MapView.Marker coordinate={props.userLocation}
        
        />
    }


    const gymMarkers = props.gyms.map(gymLocation => <MapView.Marker pinColor='red' title={gymLocation.gymName} coordinate={gymLocation} key={gymLocation.id}
    />);

    


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