import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/Screens/Home';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';

const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://graphql-weather-api.herokuapp.com/',
  });
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
