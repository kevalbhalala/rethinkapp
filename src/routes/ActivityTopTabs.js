import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Text} from 'react-native';
import {CustomHeader} from '../components';
import {navigationStrings} from '../constants';
import {FinancialInsights, Transactions} from '../modules';
import {Colors, styles} from '../theme';

const Tab = createMaterialTopTabNavigator();

const ActivityTopTabs = () => {
  return (
    <>
      <CustomHeader
        backButton={false}
        headerTitle={navigationStrings.ACTIVITY}
        headerStyle={styles.activityHeaderStyle}
      />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarLabel: () => {
            if (route.name === navigationStrings.TRANSACTIONS) {
              return (
                <Text style={styles.activityTabLable}>
                  {navigationStrings.TRANSACTIONS}
                </Text>
              );
            } else if (route.name === navigationStrings.FINANCIALINSIGHTS) {
              return (
                <Text style={styles.activityTabLable}>
                  {navigationStrings.FINANCIALINSIGHTS}
                </Text>
              );
            }
          },
          tabBarStyle: {backgroundColor: Colors.grey300},
        })}>
        <Tab.Screen
          name={navigationStrings.TRANSACTIONS}
          component={Transactions}
        />
        <Tab.Screen
          name={navigationStrings.FINANCIALINSIGHTS}
          component={FinancialInsights}
        />
      </Tab.Navigator>
    </>
  );
};

export default ActivityTopTabs;
