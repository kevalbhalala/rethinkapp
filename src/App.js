import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {ResetPassword} from './modules';
import {styles} from './theme';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <PaperProvider>
        <ResetPassword />
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
