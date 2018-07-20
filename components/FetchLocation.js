import React from 'react';
import { StyleSheet, Button } from 'react-native';

const fetchLocation = props => { 
    return (
        <Button style={styles.button} title="Create new location" color="white" onPress={props.getUserLocation} /> 
    );
};

export default fetchLocation;
const styles = StyleSheet.create({
   
})