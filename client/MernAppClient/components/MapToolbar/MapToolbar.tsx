import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapDeleteButton from './MapDeleteButton';
import MapSaveButton from './MapSaveButton';

function MapToolbar(props) {
    return (
        <View style={styles.mapButtonContainer}>
            <MapSaveButton />
            <MapDeleteButton />
        </View>
    );
}

const styles = StyleSheet.create({
    mapButtonContainer: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        bottom: "25%",
        padding: 5,
        right: 0,
        height: 150,
        width: 50,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: "green",
        justifyContent: 'space-around',
    },
})

export default MapToolbar;