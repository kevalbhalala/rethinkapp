import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {CustomHeader} from '../../components';
import {navigationStrings, businessInformation, Strings} from '../../constants';
import {moderateScale} from '../../theme';
import styling from './BusinessInformationStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BusinessInformationScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.businessInformation}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          {businessInformation?.map((values, index) => {
            const isLastValue = index === businessInformation?.length - 1;
            const isFirstValue = index === 0;
            const getIcon = () => {
              if (values === 'LEGAL BUSINESS NAME') {
                return 'user';
              } else if (values === 'DBA') {
                return 'briefcase';
              } else if (values === 'PHONE') {
                return 'smartphone';
              } else if (values === 'BUSINESS ADDRESS') {
                return 'office-building-marker-outline';
              } else if (values === 'MAILING ADDRESS') {
                return 'mailbox';
              }
            };
            const onPress = () => {
              if (values === 'DBA') {
                navigation.navigate(navigationStrings.DBA);
              } else if (values === 'PHONE') {
                navigation.navigate(navigationStrings.EDITBUSINESSPHONE);
              } else if (values === 'BUSINESS ADDRESS') {
                navigation.navigate(navigationStrings.EDITBUSINESSADDRESS);
              } else if (values === 'MAILING ADDRESS') {
                navigation.navigate(navigationStrings.EDITMAILINGADDRESS);
              }
            };
            return (
              <View key={index}>
                <TouchableOpacity
                  disabled={isFirstValue}
                  style={styles.navigateButtons}
                  onPress={onPress}>
                  <View style={styles.imageParent}>
                    {values === 'BUSINESS ADDRESS' ||
                    values === 'MAILING ADDRESS' ? (
                      <MaterialCommunityIcons
                        name={getIcon()}
                        size={moderateScale(30)}
                      />
                    ) : (
                      <FeatherIcon name={getIcon()} size={moderateScale(30)} />
                    )}
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.navigateButtonTitle}>{values}</Text>
                    <Text style={styles.navigateButtonSubtitle}>
                      {'details'}
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

export default BusinessInformationScreen;
