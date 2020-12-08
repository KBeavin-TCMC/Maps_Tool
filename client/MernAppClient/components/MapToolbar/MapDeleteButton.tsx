import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

function MapDeleteButton(props) {
    return (
        <View style={styles.deleteButton}>
            <Button title="D" onPress={() => console.log("Bar")} />
        </View>
    );
}

const styles = StyleSheet.create({
    deleteButton: {
        //flex: 1,
    },
})

export default MapDeleteButton;