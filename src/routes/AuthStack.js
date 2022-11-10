import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {navigationStrings} from '../constants';
import {Intro, Login, ResetPassword} from '../modules';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationStrings.INTRO} component={Intro} />
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen
        name={navigationStrings.RESETPASSWORD}
        component={ResetPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
