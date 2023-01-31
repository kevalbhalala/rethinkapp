import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { store, persistor } from './redux/store';
import { MainStack } from './routes';
import { styling } from './theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import { Loader } from './components';


const App = () => {
  const apptheme = useColorScheme();
  const styles = styling(apptheme);
  return (
    // <SafeAreaView style={styles.screen}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* apptheme === 'dark' ? DarkTheme :  */}
        <PaperProvider theme={DefaultTheme}>
          <MainStack />
          <Loader theme={apptheme} />
          <FlashMessage position={'top'} />
        </PaperProvider>
      </PersistGate>
    </Provider>
    // </SafeAreaView>
  );
};

export default App;
