import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
let Map = () => {
  let MapRef = null;
  let [longtitude, setLongtitude] = useState(null);
  let [latitude, setLatitude] = useState(null);
  let [error, setError] = useState(null);

  useEffect(() => {
    geoLocation();
  }, []);

  let geoLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLongtitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      },
      (error) => setError({error: error.message}),
      {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
    );
  };
  const initialRegion = {
    latitude: latitude,
    longitude: longtitude,
    latitudeDelta: 0.25,
    longitudeDelta: 0.15,
  };
  return (
    <View>
      <ImageBackground
        source={require('../img/imgHeader10.png')}
        style={{width: '100%', height: 70}}>
        <View style={{marginLeft: 30, marginRight: 30}}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              color: 'white',
            }}>
            Setya Messanger
          </Text>
        </View>
      </ImageBackground>

      <View style={{height: 580}}>
        <MapView
          ref={(ref) => {
            MapRef = ref;
          }}
          onLayout={() => {
            MapRef.fitToElements(true);
          }}
          style={styles.map}
          initialRegion={initialRegion}>
          <Marker
            coordinate={{latitude: latitude, longitude: longtitude}}></Marker>
        </MapView>
      </View>
    </View>
  );
};
export default Map;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
