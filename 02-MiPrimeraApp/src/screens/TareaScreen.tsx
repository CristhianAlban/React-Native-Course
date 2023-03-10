import React from 'react';
import { View, StyleSheet } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaAzul}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cajaMorada: {
        //flex: 2,
        //alignSelf: 'flex-end',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        //top: 100,
    },
    cajaNaranja: {
        width: 100,
        //flex: 2,
        //alignSelf: 'center',
        height: 100,
        //left: 100,
        top: 50,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
    },
    cajaAzul: {
        //flex: 4,
       // alignSelf: 'flex-start',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    },
});
