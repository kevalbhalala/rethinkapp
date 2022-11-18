import React from 'react';
import {Image, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styles from './VerifyIdentityStyle';

const VerifyIdentityScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.verifyIdentity}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <Image source={Icons.takePhoto} style={styles.userLogo} />
        <Text style={styles.title}>{Strings.addYourId}</Text>
        <Text style={styles.subTitle}>{Strings.verifyIdentitySubtitle}</Text>
        <View style={styles.yourIdentity}>
          <Text style={styles.verifyYourIdentity}>
            {Strings.verifyYourIdentity?.toUpperCase()}
          </Text>
          <MaterialCommunityIcons
            name={'information-outline'}
            size={moderateScale(24)}
            color={Colors.blue}
          />
        </View>
        <Text>{`1. ${Strings.takePhotoId}`}</Text>
        <Text>{`2. ${Strings.takephotoYourself}`}</Text>
      </View>
      <View style={styles.verifyIdentityParent}>
        <CustomButton
          buttonTitle={Strings.verifyIdentity}
          buttonStyle={styles.verifyIdentityButton}
          buttonTitleStyle={styles.verifyIdentity}
          onBtnPress={() => navigation.navigate(navigationStrings.ADDPAYEE)}
        />
      </View>
    </View>
  );
};

export default VerifyIdentityScreen;
