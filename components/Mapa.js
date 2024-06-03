// components/Mapa.js
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

const Mapa = ({ location }) => {
  return (
    location && (
      <View>
        <MapView
          style={{ width: '100%', height: "100%"}}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Sua Localização"
          />
        </MapView>
      </View>
    )
  );
};

export default Mapa;
