import React from 'react';
import { /*Dimensions,*/ StyleSheet, useWindowDimensions, View } from 'react-native';

//const {width,height}=Dimensions.get('window');

export const DimensionesScreen = () => {
    const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
        <View style={{
            ...styles.cajaMorada,
            width: width * 0.6,
            height: height * 0.5,
        }}/>
        <View style={styles.cajaNaranja}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 600,
        backgroundColor: 'red',
    },
    cajaMorada: {
        //width: '50%',
        //height: '50%',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
    },
});
