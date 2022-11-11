import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icons, Images} from '../../assets';
import {DashboardCard} from '../../components';
import {Strings} from '../../constants';
import {Colors} from '../../theme';
import {ActivationCard, BalancesCard, TransactionCard} from './components';
import styles from './DashboardStyle';

/**
 * NOTES :
 * For activation progress bar pass the progress value in 0 to 1 range (eg. 10% = 0.1)
 * Balance Card Params: 
   [
    currencySymbol = '$', 
    availableBalance, 
    reserves, 
    reservesHoldings,
    pending,
    overallBalance,
    monthName,
    moneyIn,
    moneyOut,
    ,
   ]
 * Dashboard Card Params:
   [
    title,
    titleStyle,
    subTitle,
    subTitleStyle,
    navigationText,
    navigateTextStyle,
    navigationLogoColor,
    logo,
    backgroundImage,
    cardStyle,
    logoStyle,
    onPressNavigationButton,
   ]
 * Transaction Card Params:
   [
    title,
    noTrasaction = true,
    transactionData
   ] 
 */

const DashboardScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.backgroundImageParent}>
          <ImageBackground
            source={Images.dashboradBackground}
            style={styles.backgroundImage}>
            <LinearGradient
              start={{x: 0, y: 0.2}}
              end={{x: 0, y: 1}}
              colors={[Colors.transparent, Colors.grey200]}
              style={styles.gradient}
            />
          </ImageBackground>
          <View style={styles.quoteParent}>
            <Text style={styles.quote}>{Strings.quote}</Text>
            <Text style={styles.quoteAuthor}>{Strings.quoteAuthor}</Text>
          </View>
          <View style={styles.balanceCardParent}>
            <BalancesCard />
          </View>
        </View>
        <View style={styles.cardParent}>
          <ActivationCard />
          <DashboardCard
            title={Strings.fundAccount}
            subTitle={Strings.addMoneyRethink}
            navigationText={Strings.wayFund}
            logo={Icons.bank}
          />
          <TransactionCard noTrasaction={true} />
          <DashboardCard
            cardStyle={styles.exploreCard}
            subTitle={Strings.exploreRethink}
            subTitleStyle={styles.whiteText}
            navigationText={Strings.seeMore}
            navigateTextStyle={styles.whiteText}
            navigationLogoColor={Colors.white}
          />
          <DashboardCard
            title={Strings.invoices}
            subTitle={Strings.sendTrackInvoice}
            navigationText={Strings.createInvoice}
            logo={Icons.invoices}
          />
          <DashboardCard
            title={Strings.reserves}
            subTitle={Strings.setAsideMoney}
            navigationText={Strings.createReserve}
            logo={Icons.reserves}
          />
          <DashboardCard
            title={Strings.referBusiness}
            subTitle={Strings.referNote}
            navigationText={Strings.getStarted}
            logo={Icons.referBusiness}
            navigationLogoColor={Colors.blue}
            navigateTextStyle={styles.getStartedText}
          />
          <DashboardCard
            cardStyle={styles.rethinkBoostCard}
            title={Strings.rethinkBoost}
            titleStyle={styles.whiteText}
            subTitle={Strings.connectToStripe}
            subTitleStyle={styles.whiteText}
            navigationText={Strings.seeMore}
            navigateTextStyle={styles.whiteText}
            navigationLogoColor={Colors.white}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
