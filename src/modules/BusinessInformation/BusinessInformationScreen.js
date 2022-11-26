import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {CustomHeader} from '../../components';
import {navigationStrings, businessInformation, Strings} from '../../constants';
import {moderateScale} from '../../theme';
import styles from './BusinessInformationStyle';

const BusinessInformationScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.businessInformation}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          {businessInformation?.map((values, index) => {
            const isLastValue = index === businessInformation?.length - 1;
            const isFirstValue = index === 0;
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
              <>
                <TouchableOpacity
                  disabled={isFirstValue}
                  style={styles.navigateButtons}
                  onPress={onPress}
                  key={index}>
                  <View style={styles.imageParent}>
                    <FeatherIcon name={'mail'} size={moderateScale(30)} />
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
              </>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default BusinessInformationScreen;
