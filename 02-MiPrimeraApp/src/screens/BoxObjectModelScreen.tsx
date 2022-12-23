import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box object model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginHorizontal: 20,
    fontSize: 20,
    //width: 150,
    borderWidth: 10,
    //backgroundColor: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
