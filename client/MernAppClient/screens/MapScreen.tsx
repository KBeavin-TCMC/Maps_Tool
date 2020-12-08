import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{alignSelf: "center"}}>Hello, I am your Map!</Text>
            </View>

            <View style={styles.mapContainer}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: 39.959049,
                        longitude: -86.146629,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                />
                
            </View>
            <View style={styles.mapButton}>
                <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
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

export default MapScreen;