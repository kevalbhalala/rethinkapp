import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {navigationStrings} from '../constants';
import {
  ActivateCard,
  AddPayee,
  AddUserRequest,
  BankLetter,
  BankTransfer,
  BusinessInformation,
  CaptureCheckNote,
  ChangePassword,
  ChangePin,
  ConnectPayPlatforms,
  DepositCheck,
  DepositCheckAmount,
  DepositCheckName,
  EditBusinessAddress,
  EditBusinessPhone,
  EditDba,
  EditEmail,
  EditHomeAddress,
  EditMailingAddress,
  EditMobilePhone,
  FundAccount,
  MakeDeposit,
  MakePayment,
  MakeTravelNotice,
  PaperCheck,
  PersonalInformation,
  PushFund,
  Referrals,
  ReportMissingCard,
  RequestLimitChange,
  RethinkCard,
  RethinkPhysical,
  ScanId,
  SelectIdAdd,
  SignEndorse,
  Statements,
  TransferLimits,
  TransferVirtualCard,
  TravelNotice,
  UsDriverLicense,
  Users,
  VerifyIdentity,
} from '../modules';
import AuthStack from './AuthStack';
import BottomTabsNav from './BottomTabsNav';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const apptheme = useColorScheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={navigationStrings.AUTHSTACK}
          component={AuthStack}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.BOTTOMTABSNAV}
          component={BottomTabsNav}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.ADDPAYEE}
          component={AddPayee}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.MAKEPAYMENT}
          component={MakePayment}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.BANKTRANSFER}
          component={BankTransfer}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.PAPERCHECK}
          component={PaperCheck}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.FUNDACCOUNT}
          component={FundAccount}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.CONNECTEDPAYPLATFORMS}
          component={ConnectPayPlatforms}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.TRANSFERVIRTUALCARD}
          component={TransferVirtualCard}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.PUSHFUND}
          component={PushFund}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.DEPOSITCHECK}
          component={DepositCheck}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.VERIFYIDENTITY}
          component={VerifyIdentity}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.SELECTIDADD}
          component={SelectIdAdd}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.USDRIVERLICENSE}
          component={UsDriverLicense}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.SCANID}
          component={ScanId}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.DEPOSITCHECKAMT}
          component={DepositCheckAmount}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.SIGNENDORSE}
          component={SignEndorse}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.MAKEDEPOSIT}
          component={MakeDeposit}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.DEPOSITCHECKNAME}
          component={DepositCheckName}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.CAPTURECHECKNOTE}
          component={CaptureCheckNote}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.PERSONALINFORMATION}
          component={PersonalInformation}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.EDITEMAIL}
          component={EditEmail}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.EDITMOBILEPHONE}
          component={EditMobilePhone}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.EDITHOMEADDRESS}
          component={EditHomeAddress}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.BUSINESSINFORMATION}
          component={BusinessInformation}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.EDITMAILINGADDRESS}
          component={EditMailingAddress}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.EDITBUSINESSADDRESS}
          component={EditBusinessAddress}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.EDITBUSINESSPHONE}
          component={EditBusinessPhone}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.DBA}
          component={EditDba}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.USERS}
          component={Users}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.ADDUSERREQ}
          component={AddUserRequest}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.BANKLETTER}
          component={BankLetter}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.TRANSFERLIMITS}
          component={TransferLimits}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.CHANGEPASSWORD}
          component={ChangePassword}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.REQLIMITCHANGE}
          component={RequestLimitChange}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.RETHINKCARD}
          component={RethinkCard}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.RETHINKPHYSICAL}
          component={RethinkPhysical}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.ACTIVATECARD}
          component={ActivateCard}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.CHANGEPIN}
          component={ChangePin}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.TRAVELNOTICE}
          component={TravelNotice}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.MAKETRAVELNOTICE}
          component={MakeTravelNotice}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.REPORTMISSINGCARD}
          component={ReportMissingCard}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.STATEMENTS}
          component={Statements}
          initialParams={{theme: apptheme}}
        />
        <Stack.Screen
          name={navigationStrings.REFERRALS}
          component={Referrals}
          initialParams={{theme: apptheme}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
