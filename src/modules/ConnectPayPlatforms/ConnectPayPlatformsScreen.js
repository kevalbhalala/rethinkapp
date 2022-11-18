import React from 'react';
import {Text, View} from 'react-native';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader, MoveMoneyCard} from '../../components';
import {Strings} from '../../constants/Strings';
import {Colors} from '../../theme';
import styles from './ConnectPayPlatformsStyle';

const ConnectPayPlatformsScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.fundAccount}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.card}>
        <MoveMoneyCard
          title={Strings.connectPlatforms}
          subTitle={Strings.depositMinutes}
          icon={Icons.money}
          tagOne={Strings.easy}
          tagTwo={Strings.recommended}
          tagOneTextStyle={styles.darkGreenText}
          tagOneBackground={Colors.green10050}
          tagTwoTextStyle={styles.darkBlueText}
          tagTwoBackground={Colors.blue10050}
          rightIcon={false}
        />
        <View style={styles.divider} />
        <Text style={styles.descriptionTitle}>
          {Strings.bestOptionEarnMoney}
        </Text>
        <Text style={styles.descriptionSubtitle}>{Strings.usePlatforms}</Text>
      </View>
      <View style={styles.goToButtonParent}>
        <CustomButton
          buttonTitle={Strings.goToRethinkApps}
          buttonTitleStyle={styles.goToRethinkApps}
          buttonStyle={styles.goToButtonStyle}
        />
      </View>
    </View>
  );
};

export default ConnectPayPlatformsScreen;
