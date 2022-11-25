import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {navigationStrings} from '../constants';
import {
  AddPayee,
  BankTransfer,
  BusinessInformation,
  CaptureCheckNote,
  ConnectPayPlatforms,
  DepositCheck,
  DepositCheckAmount,
  DepositCheckName,
  EditBusinessAddress,
  EditEmail,
  EditHomeAddress,
  EditMailingAddress,
  EditMobilePhone,
  FundAccount,
  MakeDeposit,
  MakePayment,
  PaperCheck,
  PersonalInformation,
  PushFund,
  ScanId,
  SelectIdAdd,
  SignEndorse,
  TransferVirtualCard,
  UsDriverLicense,
  VerifyIdentity,
} from '../modules';
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
        <Stack.Screen
          name={navigationStrings.FUNDACCOUNT}
          component={FundAccount}
        />
        <Stack.Screen
          name={navigationStrings.CONNECTEDPAYPLATFORMS}
          component={ConnectPayPlatforms}
        />
        <Stack.Screen
          name={navigationStrings.TRANSFERVIRTUALCARD}
          component={TransferVirtualCard}
        />
        <Stack.Screen name={navigationStrings.PUSHFUND} component={PushFund} />
        <Stack.Screen
          name={navigationStrings.DEPOSITCHECK}
          component={DepositCheck}
        />
        <Stack.Screen
          name={navigationStrings.VERIFYIDENTITY}
          component={VerifyIdentity}
        />
        <Stack.Screen
          name={navigationStrings.SELECTIDADD}
          component={SelectIdAdd}
        />
        <Stack.Screen
          name={navigationStrings.USDRIVERLICENSE}
          component={UsDriverLicense}
        />
        <Stack.Screen name={navigationStrings.SCANID} component={ScanId} />
        <Stack.Screen
          name={navigationStrings.DEPOSITCHECKAMT}
          component={DepositCheckAmount}
        />
        <Stack.Screen
          name={navigationStrings.SIGNENDORSE}
          component={SignEndorse}
        />
        <Stack.Screen
          name={navigationStrings.MAKEDEPOSIT}
          component={MakeDeposit}
        />
        <Stack.Screen
          name={navigationStrings.DEPOSITCHECKNAME}
          component={DepositCheckName}
        />
        <Stack.Screen
          name={navigationStrings.CAPTURECHECKNOTE}
          component={CaptureCheckNote}
        />
        <Stack.Screen
          name={navigationStrings.PERSONALINFORMATION}
          component={PersonalInformation}
        />
        <Stack.Screen
          name={navigationStrings.EDITEMAIL}
          component={EditEmail}
        />
        <Stack.Screen
          name={navigationStrings.EDITMOBILEPHONE}
          component={EditMobilePhone}
        />
        <Stack.Screen
          name={navigationStrings.EDITHOMEADDRESS}
          component={EditHomeAddress}
        />
        <Stack.Screen
          name={navigationStrings.BUSINESSINFORMATION}
          component={BusinessInformation}
        />
        <Stack.Screen
          name={navigationStrings.EDITMAILINGADDRESS}
          component={EditMailingAddress}
        />
        <Stack.Screen
          name={navigationStrings.EDITBUSINESSADDRESS}
          component={EditBusinessAddress}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
