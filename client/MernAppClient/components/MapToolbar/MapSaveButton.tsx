import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function MapSaveButton(props) {
    return (
        <View style={styles.saveButton}>
            <Button title="S" onPress={() => console.log("Foo")} />
            {/* <Button title="R" onPress={() => retrieveData()} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    saveButton: {
        //flex: 1,
    },
});

export default MapSaveButton;