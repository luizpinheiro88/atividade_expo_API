// components/Home.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Home = ({ movieTitle, setMovieTitle, handleSearch }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>
        Busca de Filmes
      </Text>
      <TextInput
        style={{ borderWidth: 1, margin: 10, padding: 8 }}
        placeholder="Digite o nome do filme"
        value={movieTitle}
        onChangeText={(text) => setMovieTitle(text)}
      />
      <Button title="Buscar Filme" onPress={handleSearch} />
    </View>
  );
};

export default Home;
