import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {navigationStrings} from '../constants';
import AuthStack from './AuthStack';
import BottomTabsNav from './BottomTabsNav';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={navigationStrings.BOTTOMTABSNAV}
          component={BottomTabsNav}
        />
        <Stack.Screen
          name={navigationStrings.AUTHSTACK}
          component={AuthStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
