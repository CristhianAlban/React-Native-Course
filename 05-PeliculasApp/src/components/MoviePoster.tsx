import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
//import { useNavigation } from '@react-navigation/core';



interface Props {
    movie: Movie;
    height?: number;
    width?: number;

}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate('DetailScreen', movie) }
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                width,
                height,
                marginHorizontal: 8,
            }}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{uri}}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image:{
        flex: 1,
        borderRadius: 18,
    },
    imageContainer:{
        //backgroundColor: 'red',
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    },
});
