import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
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
  ReportMissingCard,
  RequestLimitChange,
  RethinkCard,
  RethinkPhysical,
  ScanId,
  SelectIdAdd,
  SignEndorse,
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
        <Stack.Screen
          name={navigationStrings.EDITBUSINESSPHONE}
          component={EditBusinessPhone}
        />
        <Stack.Screen name={navigationStrings.DBA} component={EditDba} />
        <Stack.Screen name={navigationStrings.USERS} component={Users} />
        <Stack.Screen
          name={navigationStrings.ADDUSERREQ}
          component={AddUserRequest}
        />
        <Stack.Screen
          name={navigationStrings.BANKLETTER}
          component={BankLetter}
        />
        <Stack.Screen
          name={navigationStrings.TRANSFERLIMITS}
          component={TransferLimits}
        />
        <Stack.Screen
          name={navigationStrings.CHANGEPASSWORD}
          component={ChangePassword}
        />
        <Stack.Screen
          name={navigationStrings.REQLIMITCHANGE}
          component={RequestLimitChange}
        />
        <Stack.Screen
          name={navigationStrings.RETHINKCARD}
          component={RethinkCard}
        />
        <Stack.Screen
          name={navigationStrings.RETHINKPHYSICAL}
          component={RethinkPhysical}
        />
        <Stack.Screen
          name={navigationStrings.ACTIVATECARD}
          component={ActivateCard}
        />
        <Stack.Screen
          name={navigationStrings.CHANGEPIN}
          component={ChangePin}
        />
        <Stack.Screen
          name={navigationStrings.TRAVELNOTICE}
          component={TravelNotice}
        />
        <Stack.Screen
          name={navigationStrings.MAKETRAVELNOTICE}
          component={MakeTravelNotice}
        />
        <Stack.Screen
          name={navigationStrings.REPORTMISSINGCARD}
          component={ReportMissingCard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
