/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable curly */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../pages/LoadingScreen';
import { Fab } from './Fab';



export const Map = () => {

    const [ showPolyline, setShowPolyline ] = useState(true);

    const { hasLocation,
            initialPosition,
            getCurrentLocation,
            followUserLocation,
            userLocation,
            stopFollowUserLocation,
            routeLines } = useLocation();

    const mapViewRef = useRef<MapView>();
    const following  = useRef<boolean>(true);



    useEffect(() => {
        followUserLocation();
        return () => {
            stopFollowUserLocation();
        };
    }, []);

    useEffect(() => {

        if ( !following.current ) return;

        const { latitude, longitude } = userLocation;
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude },
        });
    }, [ userLocation ]);


    const centerPosition = async() => {

        const { latitude, longitude } = await getCurrentLocation();

        following.current = true;

        mapViewRef.current?.animateCamera({
            center: { latitude, longitude },
        });
    };



    if ( !hasLocation ) {
        return <LoadingScreen />;
    }


    return (
        <>
            <MapView
                ref={ (el) => mapViewRef.current = el! }
                style={{ flex: 1 }}
                // provider={ PROVIDER_GOOGLE }
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onTouchStart={ () => following.current = false }
            >
                {
                    showPolyline && (
                        <Polyline
                            coordinates={ routeLines }
                            strokeColor="black"
                            strokeWidth={ 3 }
                        />
                    )
                }

            </MapView>

            <Fab
                iconName="compass-outline"
                onPress={ centerPosition }
                style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                }}
            />

            <Fab
                iconName="brush-outline"
                onPress={ () => setShowPolyline( !showPolyline ) }
                style={{
                    position: 'absolute',
                    bottom: 80,
                    right: 20,
                }}
            />


        </>
    );
};
