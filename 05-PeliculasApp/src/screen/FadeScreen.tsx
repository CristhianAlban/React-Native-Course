/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View , Animated, Button} from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {
  const { opacity, fadeIn, fadeout } = useFade();


  return (
    <View
        style={{
            flex: 1,
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Animated.View
        style={{
            backgroundColor: '#084F6A',
            width: 150,
            height: 150,
            borderColor: 'white',
            borderWidth: 10,
            opacity,
        }}
        />
        <Button
          title="FadeIn"
          onPress={ () => fadeIn() }
        />
        <Button
          title="FadeOut"
          onPress={ () => fadeout() }
        />
    </View>
  );
};
