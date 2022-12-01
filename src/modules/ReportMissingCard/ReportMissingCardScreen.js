import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styles from './ReportMissingCardStyle';

const ReportMissingCardScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader onPressBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <FontAwesome
          name={'credit-card'}
          color={Colors.black}
          size={moderateScale(72)}
        />
        <Text style={styles.reportMissingCard}>
          {Strings?.reportMissingCard}
        </Text>
        <Text style={styles.notes}>{Strings?.reportMissingCardNote}</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{Strings.callUS?.toUpperCase()}</Text>
          <View style={styles.cardItem}>
            <Text style={styles.cardItemTitle}>{Strings.inUnitedStates}</Text>
            <TouchableOpacity style={styles.cardItemLeftIcon}>
              <FontAwesome
                name={'phone'}
                color={Colors.blue}
                size={moderateScale(24)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItem}>
            <Text style={styles.cardItemTitle}>{Strings.international}</Text>
            <TouchableOpacity style={styles.cardItemLeftIcon}>
              <FontAwesome
                name={'phone'}
                color={Colors.blue}
                size={moderateScale(24)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonParent}>
          <CustomButton
            buttonTitle={Strings.orderReplacementCard}
            buttonStyle={styles.buttonStyle}
            onBtnPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default ReportMissingCardScreen;
