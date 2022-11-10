import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {navigationStrings} from '../constants';
import {Account, Activity, Apps, Dashboard, MoveMoney} from '../modules';
import {Colors} from '../theme';

const Tab = createBottomTabNavigator();

const BottomTabsNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === navigationStrings.DASHBOARD) {
            iconName = 'dashboard';
            return <AntIcon name={iconName} size={30} color={color} />;
          } else if (route.name === navigationStrings.ACTIVITY) {
            iconName = 'barschart';
            return <AntIcon name={iconName} size={30} color={color} />;
          } else if (route.name === navigationStrings.MOVEMONEY) {
            iconName = 'money';
            return <FontAwesomeIcon name={iconName} size={30} color={color} />;
          } else if (route.name === navigationStrings.ACCOUNT) {
            iconName = 'bank';
            return <AntIcon name={iconName} size={30} color={color} />;
          } else if (route.name === navigationStrings.APPS) {
            iconName = 'appstore-o';
            return <AntIcon name={iconName} size={30} color={color} />;
          }
          // You can return any component that you like here!
        },
        tabBarActiveTintColor: Colors.blue,
      })}>
      <Tab.Screen name={navigationStrings.DASHBOARD} component={Dashboard} />
      <Tab.Screen name={navigationStrings.ACTIVITY} component={Activity} />
      <Tab.Screen name={navigationStrings.MOVEMONEY} component={MoveMoney} />
      <Tab.Screen name={navigationStrings.ACCOUNT} component={Account} />
      <Tab.Screen name={navigationStrings.APPS} component={Apps} />
    </Tab.Navigator>
  );
};

export default BottomTabsNav;
