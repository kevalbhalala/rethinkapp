import React from 'react';
import {Text, View} from 'react-native';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader, MoveMoneyCard} from '../../components';
import {navigationStrings} from '../../constants';
import {Strings} from '../../constants/Strings';
import {Colors} from '../../theme';
import styles from './MakeDepositStyle';

const MakeDeposit = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.makeDeposit}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.card}>
        <MoveMoneyCard
          title={Strings.depositCheck}
          subTitle={Strings.depositBusinessDayOneFour}
          icon={Icons.money}
          tagOne={Strings.forLargeDeposits}
          tagOneTextStyle={styles.greyText}
          tagOneBackground={Colors.grey200}
          rightIcon={false}
        />
        <View style={styles.divider} />
        <Text style={styles.descriptionTitle}>
          {Strings.easyWayLargeDeposits}
        </Text>
        <Text style={styles.descriptionSubtitle}>
          {Strings.depositCheckLimit}
        </Text>
      </View>
      <View style={styles.verifyParent}>
        <CustomButton
          buttonTitle={Strings.depositCheck}
          buttonTitleStyle={styles.verifyIdentity}
          buttonStyle={styles.verifyButtonStyle}
          onBtnPress={() => navigation.navigate(navigationStrings.SIGNENDORSE)}
        />
      </View>
    </View>
  );
};

export default MakeDeposit;
