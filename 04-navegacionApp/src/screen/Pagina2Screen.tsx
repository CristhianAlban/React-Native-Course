import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina 2 Screen</Text>
        <Button
          title= "Ir página 3"
          onPress={ () => navigator.navigate('Pagina3Screen')}
        />
    </View>
  );
};
