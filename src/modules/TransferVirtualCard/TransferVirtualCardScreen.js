import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Icons} from '../../assets';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants/Strings';
import {Colors, moderateScale} from '../../theme';
import styles from './TransferVirtualCardStyle';

const TransferVirtualCardScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.fundAccount}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.card}>
        <Text style={styles.descriptionTitle}>{Strings.addFundsCard}</Text>
        <Text style={styles.descriptionSubtitle}>{Strings.copyPasteCard}</Text>
        <TouchableOpacity style={styles.socialCard}>
          <View style={styles.socialIconParent}>
            <Image source={Icons.venmo} style={styles.socialIcon} />
          </View>
          <View style={styles.socialNameParent}>
            <Text style={styles.appTitle}>{Strings.venmo}</Text>
            <Text style={styles.goToApp}>{Strings.goToApp}</Text>
          </View>
          <View style={styles.rightIcon}>
            <Icon
              name={'chevron-right'}
              size={moderateScale(24)}
              color={Colors.grey400}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.socialCard}>
          <View style={styles.socialIconParent}>
            <Image source={Icons.paypal} style={styles.socialIcon} />
          </View>
          <View style={styles.socialNameParent}>
            <Text style={styles.appTitle}>{Strings.paypal}</Text>
            <Text style={styles.goToApp}>{Strings.goToApp}</Text>
          </View>
          <View style={styles.rightIcon}>
            <Icon
              name={'chevron-right'}
              size={moderateScale(24)}
              color={Colors.grey400}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransferVirtualCardScreen;
