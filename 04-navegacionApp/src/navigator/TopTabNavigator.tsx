import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screen/ChatScreen';
import { ContactScreen } from '../screen/ContactScreen';
import { AlbumsScreen } from '../screen/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();



export const TopTabNavigator = () => {
    const  { top:paddingTop } = useSafeAreaInsets();
  return (
    <Tab.Navigator
        style={{ paddingTop }}
        // eslint-disable-next-line react-native/no-inline-styles
        sceneContainerStyle= {{
            backgroundColor: 'white',
        }}
        screenOptions={{
            tabBarPressColor: colors.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle:{
                backgroundColor: colors.primary,
            },
            tabBarActiveTintColor: colors.primary,
            tabBarStyle:{
               shadowColor: 'transparent',
               elevation: 0,
            },
        }}
    >
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon:({ color, focused}) => (
            <Text>
              <Icon name="chatbox-ellipses-outline" size={25} color={color} />
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon:({ color, focused}) => (
            <Text>
              <Icon name="call-outline" size={25} color={color} />
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Albums"
        component={AlbumsScreen}
        options={{
          tabBarIcon:({ color, focused}) => (
            <Text>
              <Icon name="file-tray-stacked-outline" size={25} color={color} />
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}