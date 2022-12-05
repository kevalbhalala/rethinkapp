import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {MainStack} from './routes';
import {styling} from './theme';

const App = () => {
  const apptheme = useColorScheme();
  const styles = styling(apptheme);
  return (
    <SafeAreaView style={styles.screen}>
      <PaperProvider theme={apptheme === 'dark' ? DarkTheme : DefaultTheme}>
        <MainStack />
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
