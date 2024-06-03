// components/Filme.js
import React from 'react';
import { View, Text } from 'react-native';

const Filme = ({ movieData }) => {
  return (
    movieData && (
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{movieData.Title}</Text>
        <Text>Ano: {movieData.Year}</Text>
        <Text>Gênero: {movieData.Genre}</Text>
        <Text>Diretor: {movieData.Director}</Text>
        <Text>Prêmios: {movieData.Awards}</Text>
      </View>
    )
  );
};

export default Filme;
