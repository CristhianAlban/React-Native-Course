/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../menu/menuItems';
import { ItemSeparator } from '../components/ItemSeparator';
import { HeaderTitle } from '../components/HeaderTitle';


export const HomeScreen = () => {

  return (
    <View style={{flex:1, ...styles.globalMargin }}>
        <FlatList
            data={menuItems}
            ListHeaderComponent={ () => <HeaderTitle title="Opciones de menú" />  }
            ItemSeparatorComponent={ () => <ItemSeparator /> }
            renderItem={({item }) => <FlatListMenuItem menuItem={item}/>}
            keyExtractor={ (item) => item.name }
        />
    </View>
  );
};
