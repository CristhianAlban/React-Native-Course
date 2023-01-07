/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../interfaces/interfaces';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ( {menuItem}:Props) => {
    const navigation = useNavigation<any>();
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress= { () => navigation.navigate(menuItem.components) }
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color="gray"
                    size={23}
                />
                <Text style={styles.itemText}>
                    {menuItem.name}
                </Text>
                <View style={{ flex:1 }}/>
                <Icon
                    name="chevron-forward-outline"
                    color="gray"
                    size={23}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    itemText:{
        marginLeft: 10,
        fontSize: 19,
    },
});
