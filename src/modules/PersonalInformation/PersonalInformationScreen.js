import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {CustomHeader} from '../../components';
import {personalInformation, Strings} from '../../constants';
import {moderateScale} from '../../theme';
import styles from './PersonalInformationStyle';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.personalInformation}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          {personalInformation?.map((values, index) => {
            const isLastValue = index === personalInformation?.length - 1;
            const isFirstValue = index === 0;
            return (
              <>
                <TouchableOpacity
                  disabled={isFirstValue}
                  style={styles.navigateButtons}
                  key={index}>
                  <Text style={styles.navigateButtonText}>{values}</Text>
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

export default SettingsScreen;
