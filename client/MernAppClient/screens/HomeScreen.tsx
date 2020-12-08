import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import config from '../config';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.homeButtons}>
          <Button
            title="See CRUD"
            onPress={() => navigation.navigate('CRUD')}
          />
        </View>
        <View style={styles.homeButtons}>
          <Button
            title="Go to Jane's profile"
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
          />
        </View>
        <View style={styles.homeButtons}>
          <Button
            title="Just a Map"
            onPress={() => navigation.navigate('Map')}
          />
        </View>
        <View style={styles.homeButtons}>
          <Button
            title="Styled Map"
            onPress={() => navigation.navigate('Map2')}
          />
        </View>
        <View style={styles.homeButtons}>
          <Button
            title="Place Markers"
            onPress={() => navigation.navigate('Map3')}
          />
        </View>
        <View style={styles.homeButtons}>
          <Text>{config.REACT_APP_API_KEY}</Text>
        </View>
        <View style={styles.homeButtons}>
          <Text>{config.MAP_KEY}</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    homeButtons: {
        padding: 15,
    },
})

export default HomeScreen;