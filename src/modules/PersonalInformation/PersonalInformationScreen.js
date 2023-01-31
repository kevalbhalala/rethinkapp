import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { CustomHeader } from '../../components';
import { navigationStrings, personalInformation, Strings } from '../../constants';
import { moderateScale } from '../../theme';
import styling from './PersonalInformationStyle';

const PersonalInformationScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.personalInformation}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          {personalInformation?.map((values, index) => {
            const isLastValue = index === personalInformation?.length - 1;
            const isFirstValue = index === 0;
            const getIcon = () => {
              if (values === 'NAME') {
                return 'user';
              } else if (values === 'EMAIL') {
                return 'mail';
              } else if (values === 'MOBILE PHONE') {
                return 'smartphone';
              } else if (values === 'HOME ADDRESS') {
                return 'home';
              }
            };
            const getInfo = () => {
              if (values === 'NAME') {
                return userDetails?.entity_name;
              } else if (values === 'EMAIL') {
                return userDetails?.email;
              } else if (values === 'MOBILE PHONE') {
                return userDetails?.phone_number;
              } else if (values === 'HOME ADDRESS') {
                return userDetails?.legal_address?.address_line_1 + ',' + userDetails?.legal_address?.city + ',' + userDetails?.legal_address?.country_code + ',' + userDetails?.legal_address?.postal_code;
              }
            };
            const onPress = () => {
              if (values === 'EMAIL') {
                navigation.navigate(navigationStrings.EDITEMAIL);
              } else if (values === 'MOBILE PHONE') {
                navigation.navigate(navigationStrings.EDITMOBILEPHONE);
              } else if (values === 'HOME ADDRESS') {
                navigation.navigate(navigationStrings.EDITHOMEADDRESS);
              }
            };
            return (
              <View key={index}>
                <TouchableOpacity
                  disabled={isFirstValue}
                  style={styles.navigateButtons}
                  onPress={onPress}
                  key={index}>
                  <View style={styles.imageParent}>
                    <FeatherIcon name={getIcon()} size={moderateScale(40)} />
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.navigateButtonTitle}>{values}</Text>
                    <Text style={styles.navigateButtonSubtitle}>
                      {getInfo()}
                    </Text>
                  </View>
                  {!isFirstValue ? (
                    <FeatherIcon
                      name={'chevron-right'}
                      size={moderateScale(18)}
                    />
                  ) : (
                    <></>
                  )}
                </TouchableOpacity>
                {!isLastValue ? <View style={styles.divider} /> : <></>}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default PersonalInformationScreen;
