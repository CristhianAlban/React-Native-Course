import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screen/Tab1Screen';
//import { Tab2Screen } from '../screen/Tab2Screen';
//import { Tab3Screen } from '../screen/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS/> : <TabsAndroid/>;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      barStyle={{
        backgroundColor: colors.primary,
      }}
      activeColor="white"
      inactiveColor="white"
    >
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab1',
          tabBarIcon:({ color, focused}) => (
            <Text>
              <Icon name="menu-outline" size={25} color={color} />
            </Text>
          ),
        }}
      />
      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        options={{
          title: 'Tab2',
          tabBarIcon:({ color, focused}) => (
            <Text>
              <Icon name="log-in-outline" size={25} color={color} />
            </Text>
          ),
        }}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{
          title: 'Stack',
          tabBarIcon:({ color, focused}) => (
            <Text>
              <Icon name="mail-outline" size={25} color={color} />
            </Text>
          ),
        }}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        // eslint-disable-next-line react-native/no-inline-styles
        sceneContainerStyle={{ backgroundColor: 'white' }}
        screenOptions ={{
            tabBarActiveTintColor: colors.primary,
            tabBarStyle: {
                borderTopColor: colors.primary,
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarLabelStyle:{
                fontSize: 15,
            },
        }}
    >
      <BottomTabIOS.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab1',
          tabBarIcon:({ color, focused, size}) => (
             <Text style={{color}}>T1</Text>
          ),
        }}
      />
      <BottomTabIOS.Screen
        name="TopTabNavigator"
        options={{
          title: 'Tab2',
          tabBarIcon:({ color, focused, size}) => (
             <Text style={{color}}>T2</Text>
          ),
        }}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{
          title: 'Stack',
          tabBarIcon:({ color, focused, size}) => (
             <Text style={{color}}>stack</Text>
          ),
        }}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
