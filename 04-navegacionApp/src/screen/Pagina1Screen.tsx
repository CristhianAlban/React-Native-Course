/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props extends StackScreenProps<any, any>{}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina 1 Screen</Text>
        <Button
          title= "Ir página 2"
          onPress={ () => navigation.navigate('Pagina2Screen')}
        />

        <Text>Navegar con argumentos</Text>

        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity
            style= {{
              ...styles.botonGrande,
              backgroundColor: '#5856D6',
            }}
            onPress={ () => navigation.navigate('PersonaSreen', {
              id: 1,
              name: 'Pedro',
            })}
          >
            <Icon name="face" size={40} color={'white'}/>
            <Text style={styles.botonGrandeTexto}>Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style= {{
              ...styles.botonGrande,
              backgroundColor: '#FF9427',
            }}
            onPress={ () => navigation.navigate('PersonaSreen', {
              id: 2,
              name: 'Maria',
            })}
          >
            <Icon name="sick" size={40} color={'white'}/>
            <Text style={styles.botonGrandeTexto}> Maria</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};
