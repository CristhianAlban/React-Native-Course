/* eslint-disable react-native/no-inline-styles */

import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { HomeScreen } from '../screen/HomeScreen';
import { Animation101Screen } from '../screen/Animation101Screen';
import { Animation102Screen } from '../screen/Animation102Screen';
import { SwitchScreen } from '../screen/SwitchScreen';
import { AlertScreen } from '../screen/AlertScreen';
import { TextInputScreen } from '../screen/TextInputScreen';
import { PullToRefreshScreen } from '../screen/PullToRefreshScreen';
import { CustomSectionListScreen } from '../screen/CustomSectionListScreen';
import { ModalScreen } from '../screen/ModalScreen';
import { InfiniteScrollScreen } from '../screen/InfiniteScrollScreen';
import { SlidesScreen } from '../screen/SlidesScreen';
import { ChangeThemeScreen } from '../screen/ChangeThemeScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { theme } = useContext( ThemeContext );
  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <NavigationContainer
        theme={ theme }
      >
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
          <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={ AlertScreen } />
          <Stack.Screen name="TextInputScreen" component={ TextInputScreen } />
          <Stack.Screen name="PullToRefreshScreen" component={ PullToRefreshScreen } />
          <Stack.Screen name="CustomSectionListScreen" component={ CustomSectionListScreen } />
          <Stack.Screen name="ModalScreen" component={ ModalScreen } />
          <Stack.Screen name="InfiniteScrollScreen" component={ InfiniteScrollScreen } />
          <Stack.Screen name="SlidesScreen" component={ SlidesScreen } />
          <Stack.Screen name="ChangeThemeScreen" component={ ChangeThemeScreen } />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
