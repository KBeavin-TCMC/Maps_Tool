import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import CustomMarker from '../components/CustomMarker';

const MapScreenTwo = ({ navigation }) => {
    const [region, setRegion] = useState({
        latitude: 39.959049,
        longitude: -86.146629,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });
    
    const mapStyle = [
        {
            elementType: "geometry",
            stylers: [
                {
                    color: "#1d2c4d"
                }
            ]
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#8ec3b9"
                }
            ]
        },
        {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#3e73fd"
                }
            ]
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#4e6d70"
                }
            ]
        },
        {
            featureType: "Road",
            elementType: "Geometry",
            stylers: [
                {
                    color: "#c92c2c"
                }
            ]
        },
        {
            featureType: "Road.Highway",
            elementType: "Geometry",
            stylers: [
                {
                    color: "#d37a36"
                }
            ]
        }
    ];
    
    const Speedway = {
        latitude: 39.7927,
        longitude: -86.2508
    };
    
    const Fishers = {
        latitude: 39.9568,
        longitude: -86.0134
    };

    const _map = useRef(null);

    useEffect(() => {
        if (_map.current) {
            _map.current.animateCamera(
                {
                    center: {
                        latitude: 39.760101,
                        longitude: -86.163887
                    },
                    zoom: 15
                },
                5000
            );
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <MapView ref={_map}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={region}
                    onRegionChangeComplete={region => setRegion(region)}
                    customMapStyle={mapStyle}
                    onPress={onMapPress}
                >

                    <Marker coordinate={{ latitude: 39.959049, longitude: -86.146629 }} pinColor="green" />
                    <Marker coordinate={{ latitude: 39.96, longitude: -86.146629 }} image={require("./car2.png")} />
                    <Marker coordinate={{ latitude: 39.760101, longitude: -86.163887 }}>
                        <CustomMarker />
                    </Marker>
                    <Polyline strokeColor="#FF00FF" strokeWidth={5} coordinates={[Speedway, Fishers]} />
                </MapView>
            </View>
            <View style={styles.mapButton}>
                <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    );
};

const onMapPress = ((coords) => {
    let lat = coords.nativeEvent.coordinate.latitude;
    let lng = coords.nativeEvent.coordinate.longitude;
    console.log(lat);
    console.log(lng);

    return (
        <Marker coordinate={{latitude: lat, longitude: lng}} pinColor="red"/> 
    )
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center'
    },
    mapContainer: {
        flex: 1,
        // alignSelf: 'stretch',
        // height: 900,
        // backgroundColor: 'blue',
    },
    map: {
        flex: 1,
        // alignSelf: 'stretch',
    },
    mapButton: {
        // flex: 1,
        // alignSelf: 'stretch',
        // justifyContent: 'flex-end',
        // marginBottom: 36
    },
});

export default MapScreenTwo;