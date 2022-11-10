import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {MainStack} from './routes';
import {styles} from './theme';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <PaperProvider>
        <MainStack />
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
