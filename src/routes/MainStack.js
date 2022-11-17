import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {navigationStrings} from '../constants';
import {AddPayee, BankTransfer, MakePayment, PaperCheck} from '../modules';
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
          name={navigationStrings.AUTHSTACK}
          component={AuthStack}
        />
        <Stack.Screen
          name={navigationStrings.BOTTOMTABSNAV}
          component={BottomTabsNav}
        />
        <Stack.Screen name={navigationStrings.ADDPAYEE} component={AddPayee} />
        <Stack.Screen
          name={navigationStrings.MAKEPAYMENT}
          component={MakePayment}
        />
        <Stack.Screen
          name={navigationStrings.BANKTRANSFER}
          component={BankTransfer}
        />
        <Stack.Screen
          name={navigationStrings.PAPERCHECK}
          component={PaperCheck}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
