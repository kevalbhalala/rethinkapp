import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Login} from './modules';
import {styles} from './theme';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <PaperProvider>
        <Login />
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
