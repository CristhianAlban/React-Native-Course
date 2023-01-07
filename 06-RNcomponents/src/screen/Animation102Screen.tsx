
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';


export const Animation102Screen = () => {
  const {panResponder, pan} = useAnimation();
  return (
    <View style={styles.container}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[ pan.getLayout() ,styles.redBox]}

        />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redBox:{
      backgroundColor: 'red',
      width: 150,
      height: 150,
  },
});
