import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/Screens/Home/Home';
import {Provider} from 'react-redux';
import store from './src/redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

const styles = StyleSheet.create({});
