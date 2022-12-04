import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {CustomHeader} from '../../components';
import {navigationStrings, personalInformation, Strings} from '../../constants';
import {moderateScale} from '../../theme';
import styling from './PersonalInformationStyle';

const PersonalInformationScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

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

export default PersonalInformationScreen;
