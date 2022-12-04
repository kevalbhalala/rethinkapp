import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Switch} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {CustomButton, CustomHeader} from '../../components';
import {
  navigationStrings,
  settings,
  settingsAccountInformation,
  Strings,
} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './SettingsStyle';

const SettingsScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  const [bioSwitch, setBioSwitch] = useState(false);
  const [notificationSwitch, setNotificationSwitch] = useState(false);
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.settings}
        backButton={false}
      />
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.cardTitle}>
            {Strings.accountInformation?.toUpperCase()}
          </Text>
          <View style={styles.card}>
            {settingsAccountInformation?.map((values, index) => {
              const onPress = () => {
                if (values === Strings.personalInformation) {
                  navigation.navigate(navigationStrings.PERSONALINFORMATION);
                } else if (values === Strings.businessInformation) {
                  navigation.navigate(navigationStrings.BUSINESSINFORMATION);
                } else if (values === Strings.users) {
                  navigation.navigate(navigationStrings.USERS);
                } else if (values === Strings.bankLetter) {
                  navigation.navigate(navigationStrings.BANKLETTER);
                } else if (values === Strings.transferLimits) {
                  navigation.navigate(navigationStrings.TRANSFERLIMITS);
                }
              };
              const isLastValue =
                index === settingsAccountInformation?.length - 1;
              return (
                <View key={index}>
                  <TouchableOpacity
                    style={styles.navigateButtons}
                    onPress={onPress}
                    key={index}>
                    <Text style={styles.navigateButtonText}>{values}</Text>
                    <FeatherIcon
                      name={'chevron-right'}
                      size={moderateScale(18)}
                    />
                  </TouchableOpacity>
                  {!isLastValue ? <View style={styles.divider} /> : <></>}
                </View>
              );
            })}
          </View>
          <Text style={styles.cardTitle}>
            {Strings.settings?.toUpperCase()}
          </Text>
          <View style={styles.card}>
            {settings?.map((values, index) => {
              const isLastValue = index === settings?.length - 1;
              return (
                <View key={index}>
                  <TouchableOpacity
                    style={styles.navigateButtons}
                    key={index}
                    onPress={() => {
                      if (index === 0) {
                        navigation.navigate(navigationStrings.CHANGEPASSWORD);
                      }
                    }}>
                    <Text style={styles.navigateButtonText}>{values}</Text>
                    {index === 0 ? (
                      <FeatherIcon
                        name={'chevron-right'}
                        size={moderateScale(18)}
                      />
                    ) : (
                      <Switch
                        value={
                          values === Strings.biometricAuthentication
                            ? bioSwitch
                            : notificationSwitch
                        }
                        onValueChange={() =>
                          values === Strings.biometricAuthentication
                            ? setBioSwitch(!bioSwitch)
                            : setNotificationSwitch(!notificationSwitch)
                        }
                        color={Colors[theme]?.blue}
                      />
                    )}
                  </TouchableOpacity>
                  {!isLastValue ? <View style={styles.divider} /> : <></>}
                </View>
              );
            })}
          </View>
          <Text style={styles.cardTitle}>
            {Strings.linkedAccounts?.toUpperCase()}
          </Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.navigateButtons}>
              <Text style={styles.navigateButtonText}>
                {Strings.linkedAccounts}
              </Text>
              <FeatherIcon name={'chevron-right'} size={moderateScale(18)} />
            </TouchableOpacity>
          </View>
          <CustomButton
            theme={theme}
            buttonTitle={Strings.logout}
            buttonTitleStyle={styles.logout}
            buttonStyle={styles.logoutButton}
          />
          <Text style={styles.version}>{`${Strings.version} - 1.0`}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default SettingsScreen;
