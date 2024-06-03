// components/Localizacao.js
import React from 'react';
import { View, Text } from 'react-native';

const Localizacao = ({ location }) => {
  return (
    location && (
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sua Localização</Text>
        <Text>Latitude: {location.coords.latitude}</Text>
        <Text>Longitude: {location.coords.longitude}</Text>
      </View>
    )
  );
};

export default Localizacao;
