
import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider } from 'react-redux';
import {store} from './redux'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store} >
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    
  </Provider>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
