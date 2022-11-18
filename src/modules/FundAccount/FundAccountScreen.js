import React from 'react';
import {Text, View} from 'react-native';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader, MoveMoneyCard} from '../../components';
import {Strings} from '../../constants/Strings';
import {Colors} from '../../theme';
import styles from './FundAccountStyle';

const FundAccountScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.fundAccount}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.card}>
        <MoveMoneyCard
          title={Strings.fundConnectedBank}
          subTitle={Strings.depositBusinessDayOneTwo}
          icon={Icons.money}
          tagOne={Strings.free}
          tagTwo={Strings.forSmallDeposits}
          tagOneTextStyle={styles.darkGreenText}
          tagOneBackground={Colors.green10050}
          tagTwoTextStyle={styles.greyText}
          tagTwoBackground={Colors.grey200}
          rightIcon={false}
        />
        <View style={styles.divider} />
        <Text style={styles.descriptionTitle}>{Strings.seamlessDeposits}</Text>
        <Text style={styles.descriptionSubtitle}>
          {Strings.connectExternalBankAccount}
        </Text>
      </View>
      <View style={styles.addExternalAccountButtonParent}>
        <CustomButton
          buttonTitle={Strings.addExternalAccount}
          buttonTitleStyle={styles.addExternalAccount}
          buttonStyle={styles.addExternalAccountButtonStyle}
        />
      </View>
    </View>
  );
};

export default FundAccountScreen;
