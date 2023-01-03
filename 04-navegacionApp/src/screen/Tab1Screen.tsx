import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

import { TouchableIcon } from '../components/TouchableIcon';



export const Tab1Screen = () => {
  return (
    <View style={ styles.globalMargin}>
        <Text style={styles.title}> Iconos </Text>
        <Text>
        <TouchableIcon name="airplane-outline"  />
        <TouchableIcon name="car-sport-outline" />
        <TouchableIcon name="bus-outline"  />
        <TouchableIcon name="bicycle-outline"  />
        <TouchableIcon name="boat-outline"  />
        <TouchableIcon name="train-outline"/>
        <TouchableIcon name="rocket-outline" />
        <TouchableIcon name="walk-outline"  />
        </Text>
    </View>
  );
};
