/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import currentFormatter from 'currency-formatter';


import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActorItem } from './ActorItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}

export const MovieDetails = ( {movieFull, cast}: Props) => {
  return (
    <>
        <View style={{marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
                <Icon
                    name="star-outline"
                    color="grey"
                    size= {16}
                />
                <Text>{movieFull.vote_average}</Text>
                <Text style={{ marginLeft: 5}}>
                    - {movieFull.genres.map(g =>g.name).join(', ')}
                </Text>
            </View>
            <Text style={{fontSize: 25, marginTop: 10, fontWeight: 'bold'}}>
                Historia
            </Text>
            <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
            <Text style={{fontSize: 25, marginTop: 10, fontWeight: 'bold'}}>
                Presupuesto
            </Text>
            <Text>{currentFormatter.format(movieFull.budget, {code:'USD'}) }</Text>

        </View>
        <View style={{ marginTop: 10, marginBottom: 100 }}>
            <Text style={{fontSize: 25, marginTop: 10, marginHorizontal:20, fontWeight: 'bold'}}>
                Actores
            </Text>
            <FlatList
                data= {cast}
                keyExtractor= {(item) => item.id.toString()}
                renderItem={({item})=> <ActorItem actor={item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator= {false}
                style={{marginTop: 10, height: 70}}
            />
        </View>
    </>
  );
};
