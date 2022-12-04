import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Icons} from '../../assets';
import {MoveMoneyCard} from '../../components';
import {navigationStrings} from '../../constants';
import {Strings} from '../../constants/Strings';
import {Colors} from '../../theme';
import styling from './MoveMoneyStyle';

const MoveMoneyScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <View style={styles.balanceParent}>
        <Text style={styles.balance}>{'$0.00'}</Text>
        <Text style={styles.availableNow}>{Strings.availableNow}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <MoveMoneyCard
          theme={theme}
          title={Strings.makePayment}
          subTitle={Strings.sendMoneyToPayees}
          icon={Icons.money}
          onPressCard={() => navigation.navigate(navigationStrings.MAKEPAYMENT)}
        />
        <MoveMoneyCard
          theme={theme}
          title={Strings.fundConnectedBank}
          subTitle={Strings.depositBusinessDayOneTwo}
          icon={Icons.money}
          tagOne={Strings.free}
          tagTwo={Strings.forSmallDeposits}
          tagOneTextStyle={styles.darkGreenText}
          tagOneBackground={Colors[theme]?.green10050}
          tagTwoTextStyle={styles.greyText}
          tagTwoBackground={Colors[theme]?.grey200}
          onPressCard={() => navigation.navigate(navigationStrings.FUNDACCOUNT)}
        />
        <MoveMoneyCard
          theme={theme}
          title={Strings.connectPlatforms}
          subTitle={Strings.depositMinutes}
          icon={Icons.money}
          tagOne={Strings.easy}
          tagTwo={Strings.recommended}
          tagOneTextStyle={styles.darkGreenText}
          tagOneBackground={Colors[theme]?.green10050}
          tagTwoTextStyle={styles.darkBlueText}
          tagTwoBackground={Colors[theme]?.blue10050}
          onPressCard={() =>
            navigation.navigate(navigationStrings.CONNECTEDPAYPLATFORMS)
          }
        />
        <MoveMoneyCard
          theme={theme}
          title={Strings.transferVirtualCard}
          subTitle={Strings.depositInstant}
          icon={Icons.money}
          tagOne={Strings.fast}
          tagTwo={Strings.HighlyRecommended}
          tagOneTextStyle={styles.darkBlueText}
          tagOneBackground={Colors[theme]?.blue10050}
          tagTwoTextStyle={styles.darkBlueText}
          tagTwoBackground={Colors[theme]?.blue10050}
          onPressCard={() =>
            navigation.navigate(navigationStrings.TRANSFERVIRTUALCARD)
          }
        />
        <MoveMoneyCard
          theme={theme}
          title={Strings.pushFundAnotherBank}
          subTitle={Strings.depositBusinessDayOneTwo}
          icon={Icons.money}
          tagOne={Strings.forLargeDeposits}
          tagTwo={Strings.fast}
          tagOneTextStyle={styles.greyText}
          tagOneBackground={Colors[theme]?.grey200}
          tagTwoTextStyle={styles.darkBlueText}
          tagTwoBackground={Colors[theme]?.blue10050}
          onPressCard={() => navigation.navigate(navigationStrings.PUSHFUND)}
        />
        <MoveMoneyCard
          theme={theme}
          title={Strings.depositeCheckFromPhone}
          subTitle={Strings.depositBusinessDayOneFour}
          icon={Icons.money}
          tagOne={Strings.forLargeDeposits}
          tagTwo={Strings.free}
          tagOneTextStyle={styles.greyText}
          tagOneBackground={Colors[theme]?.grey200}
          tagTwoTextStyle={styles.darkGreenText}
          tagTwoBackground={Colors[theme]?.green10050}
          onPressCard={() =>
            navigation.navigate(navigationStrings.DEPOSITCHECK)
          }
        />
        <MoveMoneyCard
          theme={theme}
          title={Strings.depositCheck}
          subTitle={Strings.depositBusinessDayOneFour}
          icon={Icons.money}
          tagOne={Strings.forLargeDeposits}
          tagOneTextStyle={styles.greyText}
          tagOneBackground={Colors[theme]?.grey200}
          onPressCard={() => navigation.navigate(navigationStrings.MAKEDEPOSIT)}
        />
      </ScrollView>
    </View>
  );
};

export default MoveMoneyScreen;
