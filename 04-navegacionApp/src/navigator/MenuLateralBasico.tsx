import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screen/SettingsScreen';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" options={{ title:'home'}} component={StackNavigator}/>
      <Drawer.Screen name="SettingsScreen" options={{ title:'settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
