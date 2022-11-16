import React from 'react';
import {Image, Text, View} from 'react-native';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import styles from './MakePaymentStyle';

const MakePaymentScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.makePayment}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <Text style={styles.makePayment}>{Strings.makePayment}</Text>
        <Image source={Icons.user} style={styles.userLogo} />
        <Text style={styles.title}>{Strings.addPayeesToSendPayments}</Text>
        <Text style={styles.subTitle}>{Strings.sendMoneyPayeesBank}</Text>
      </View>
      <View style={styles.addPayeeParent}>
        <CustomButton
          buttonTitle={Strings.addPayee}
          buttonStyle={styles.addPayeeButton}
          buttonTitleStyle={styles.addPayee}
        />
      </View>
    </View>
  );
};

export default MakePaymentScreen;
