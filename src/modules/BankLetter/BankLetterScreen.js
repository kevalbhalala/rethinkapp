import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styles from './BankLetterStyle';

const BankLetterScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader onPressBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <Ionicons
          name={'newspaper'}
          size={moderateScale(100)}
          color={Colors.black}
        />
        <Text style={styles.bankLetter}>{Strings.bankLetter}</Text>
        <Text style={styles.bankLetterNote}>{Strings.bankLetterNote}</Text>
      </View>
      <View style={styles.bottomView}>
        <CustomButton
          buttonTitle={Strings.continue}
          buttonStyle={styles.continueButton}
        />
      </View>
    </View>
  );
};

export default BankLetterScreen;
