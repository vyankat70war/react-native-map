import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { SearchBar } from 'react-native-elements';

Mapbox.setAccessToken('pk.eyJ1IjoiYWJoaWd1bHZlMDYiLCJhIjoiY2pjcWM1cWlmMjhkNzJ4bnhwMzNqdGlwYiJ9.38JQIgD7LyfKas_DcvFK4w');

export default class App extends Component<{}> {
  apikey='pk.eyJ1IjoiYWJoaWd1bHZlMDYiLCJhIjoiY2pjcWNibmh4MWgwczMybnZiMDVmYmU0OSJ9.r_OaIHjIcHfnhZFUnkGikg';

  state ='';
  center= [11.256, 43.770];

  constructor(props) {
      super(props);
      this.state = {};
      this.map = {};
    }

    setState(text)
    {
      state = text;
    }

    setMap(map1)
    {
      map = map1;
    }

  componentWillMount(text1) {
      if(text1==null){
        return
      }
           fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/'+this.state+'.json?access_token=pk.eyJ1IjoiYWJoaWd1bHZlMDYiLCJhIjoiY2pjcWNibmh4MWgwczMybnZiMDVmYmU0OSJ9.r_OaIHjIcHfnhZFUnkGikg')
             .then((response) => response.json())
             .then((responseJson) => {
               this.center=responseJson.features[1].center;
                // alert('ADDRESS GEOCODE is BACK!! => ' + center);
                // alert(center);
              //  this.map.zoomTo(10);
                // this.map.flyTo(this.center,2000);
                // this.map.zoomTo(15);
                this.map.setCamera({
                  centerCoordinate: this.center,
                  zoom: 8,
                  duration: 2000,
                });

               });
   };
    render() {

      return (
        <View style={styles.container}>

            <SearchBar
                      containerStyle = {styles.search}
                      inputStyle = {styles.searchInput}
                      placeholder = "Search location"
                      placeholderTextColor = "lightgray"
                      icon = {{ color: '#86939e', style: styles.searchIcon}}
                      text='pune'
                      onChangeText={(text) => this.setState(text)}
                      value={this.state.text}
                      onSubmitEditing={this.componentWillMount}
                    />
          <Mapbox.MapView
             ref={map =>  this.setMap(map) }
              styleURL={Mapbox.StyleURL.Street}
              zoomLevel={15}
              centerCoordinate={this.center}
               showUserLocation={true}
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
