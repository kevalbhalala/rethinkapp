import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styles from './UsDriverLicenseStyle';

const UsDriverLicenseScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.takePhotoId}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={[styles.blackText, styles.bottomSpace]}>
          {Strings.usDriverLicense}
        </Text>
        <Text style={[styles.blackText, styles.bottomSpace]}>
          {Strings.whenTakingPhoto?.toUpperCase()}
        </Text>
        <Text style={styles.blackText}>{`1. ${Strings.goodLighting}`}</Text>
        <Text
          style={[
            styles.blackText,
            styles.bottomSpace,
          ]}>{`2. ${Strings.cornersVisible}`}</Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate(navigationStrings.SCANID);
          }}>
          <FontAwesome
            name="drivers-license-o"
            size={moderateScale(28)}
            color={Colors.black}
          />
          <Text style={styles.cardTitle}>{Strings.frontLicense}</Text>
          <AntDesign
            name={'pluscircleo'}
            size={moderateScale(26)}
            color={Colors.blue}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate(navigationStrings.SCANID);
          }}>
          <FontAwesome
            name="drivers-license-o"
            size={moderateScale(28)}
            color={Colors.black}
          />
          <Text style={styles.cardTitle}>{Strings.backLicense}</Text>
          <AntDesign
            name={'pluscircleo'}
            size={moderateScale(26)}
            color={Colors.blue}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.continueParent}>
        <CustomButton
          buttonTitle={Strings.continue}
          buttonTitleStyle={styles.continue}
          buttonStyle={styles.continueButton}
        />
      </View>
    </View>
  );
};

export default UsDriverLicenseScreen;
