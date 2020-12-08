import {report} from 'process';
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapToolbar from '../components/MapToolbar/MapToolbar';

interface Coords {
  latitude: number;
  longitude: number;
}

interface MyState {
  markers: Coords[];
}

const markers: Coords[] = [];

class MapScreenThree extends Component<{}, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      markers: markers,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onMapPress = (e) => {
    let lat = e.nativeEvent.coordinate.latitude;
    let lng = e.nativeEvent.coordinate.longitude;

    this.setState({
      markers: [...this.state.markers, {latitude: lat, longitude: lng}],
    });
  };

  render() {
    return (
      <View style={styles.container}>
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
            onPress={(e) => this.onMapPress(e)}>
            {this.mapMarkers()}
          </MapView>
          <MapToolbar />
        </View>
      </View>
    );
  }
  mapMarkers(): React.ReactNode {
    return this.state.markers.map((m, i) => (
      <Marker
        key={i}
        coordinate={{latitude: m.latitude, longitude: m.longitude}}></Marker>
    ));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreenThree;
