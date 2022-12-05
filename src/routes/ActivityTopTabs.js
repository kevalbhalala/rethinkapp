import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {CustomHeader} from '../components';
import {navigationStrings} from '../constants';
import {FinancialInsights, Transactions} from '../modules';
import {Colors, styling} from '../theme';

const Tab = createMaterialTopTabNavigator();

const ActivityTopTabs = () => {
  const route = useRoute();
  const theme = route?.params?.theme;

  const styles = styling(theme);

  return (
    <>
      <CustomHeader
        theme={theme}
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
          tabBarStyle: {
            backgroundColor:
              theme === 'light' ? Colors[theme]?.grey300 : Colors[theme]?.white,
          },
        })}>
        <Tab.Screen
          name={navigationStrings.TRANSACTIONS}
          component={Transactions}
          initialParams={{theme: theme}}
        />
        <Tab.Screen
          name={navigationStrings.FINANCIALINSIGHTS}
          component={FinancialInsights}
          initialParams={{theme: theme}}
        />
      </Tab.Navigator>
    </>
  );
};

export default ActivityTopTabs;
