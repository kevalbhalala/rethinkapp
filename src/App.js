import React, {useCallback, useEffect} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {MainStack} from './routes';
import {styling} from './theme';
import {get, save} from './utils';

const App = () => {
  const apptheme = useColorScheme();
  const styles = styling(apptheme);
  return (
    <SafeAreaView style={styles.screen}>
      <PaperProvider>
        <MainStack />
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
