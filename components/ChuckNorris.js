// components/ChuckNorris.js
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button, Image } from 'react-native';

const ChuckNorris = () => {
  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  if (!joke) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Piada do Chuck Norris</Text>
      <Image source={{ uri: joke.icon_url }} style={{ width: 100, height: 100, marginBottom: 20 }} />
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20 }}>{joke.value}</Text>
      <Button title="Obter nova piada" onPress={fetchJoke} />
    </View>
  );
};

export default ChuckNorris;
