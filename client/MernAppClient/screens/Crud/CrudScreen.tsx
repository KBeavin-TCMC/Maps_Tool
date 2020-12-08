import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CreateScreen from './CreateScreen';
import ReadScreen from './ReadScreen';
import UpdateScreen from './UpdateScreen';
import DeleteScreen from './DeleteScreen';

const Tabs = createBottomTabNavigator();

function CrudScreen(props) {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Create" component={CreateScreen} />
      <Tabs.Screen name="Read" component={ReadScreen} />
      <Tabs.Screen name="Update" component={UpdateScreen} />
      <Tabs.Screen name="Delete" component={DeleteScreen} />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({});

export default CrudScreen;
