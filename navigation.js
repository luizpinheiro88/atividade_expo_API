// navigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Filme from './components/Filme';
import Mapa from './components/Mapa';
import Localizacao from './components/Localizacao';
import ChuckNorris from './components/ChuckNorris';

const Tab = createBottomTabNavigator();

const Navigation = ({ movieTitle, setMovieTitle, handleSearch, movieData, location }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home">
          {props => <Home {...props} movieTitle={movieTitle} setMovieTitle={setMovieTitle} handleSearch={handleSearch} />}
        </Tab.Screen>
        <Tab.Screen name="Filme">
          {props => <Filme {...props} movieData={movieData} />}
        </Tab.Screen>
        <Tab.Screen name="Mapa">
          {props => <Mapa {...props} location={location} />}
        </Tab.Screen>
        <Tab.Screen name="Localizacao">
          {props => <Localizacao {...props} location={location} />}
        </Tab.Screen>
        <Tab.Screen name="ChuckNorris" component={ChuckNorris} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
