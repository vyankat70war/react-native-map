import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { SearchBar } from 'react-native-elements';

Mapbox.setAccessToken('pk.eyJ1IjoiYWJoaWd1bHZlMDYiLCJhIjoiY2pjcWM1cWlmMjhkNzJ4bnhwMzNqdGlwYiJ9.38JQIgD7LyfKas_DcvFK4w');

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            style={styles.container}>
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
