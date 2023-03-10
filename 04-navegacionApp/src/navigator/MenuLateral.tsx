import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';
//import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screen/SettingsScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      drawerContent={ (props) => <MenuInterno {...props}/> }
    >
      <Drawer.Screen name="Tabs"  component={Tabs}/>
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ( { navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style= {styles.avatarContainer}>
        <Image
          source= {{
            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
          }}
          style={ styles.avatar}
        />
      </View>
      <View style= {styles.menuContainer}>

        <TouchableOpacity
          style={styles.menuBoton}
          onPress={ () => navigation.navigate('Tabs')}
        >
          <Icon name="earth-outline" size={30}/>
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBoton}
          onPress={ () => navigation.navigate('SettingsScreen')}
        >
          <Icon name="hammer-outline" size={30}/>
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  );
};
