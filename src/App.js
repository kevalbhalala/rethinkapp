import React from 'react';
import {SafeAreaView} from 'react-native';
import {Intro} from './modules';
import {styles} from './theme';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Intro />
    </SafeAreaView>
  );
};

export default App;
