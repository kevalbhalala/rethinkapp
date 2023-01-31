import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, ScrollView, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { Icons, Images } from '../../assets';
import { DashboardCard } from '../../components';
import { navigationStrings, Strings } from '../../constants';
import { Colors } from '../../theme';
import { ActivationCard, BalancesCard, TransactionCard } from './components';
import styling from './DashboardStyle';

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

const DashboardScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  const accountInfo = useSelector(state => state?.user?.accountInfo)
  return (
    <View style={styles.screen}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.backgroundImageParent}>
          <Image source={Icons.appLogo} style={{ width: '90%', height: 90, marginTop: 20 }} resizeMode='contain' />
          {/* <ImageBackground
            source={Icons.appLogo}
            style={styles.backgroundImage}>
            <LinearGradient
              start={{ x: 0, y: 0.2 }}
              end={{ x: 0, y: 1 }}
              colors={[
                Colors[theme].transparent,
                Colors[theme].screenBackground,
              ]}
              style={styles.gradient}
            />
          </ImageBackground> */}
          {/* <View style={styles.quoteParent}>
            <Text style={styles.quote}>{Strings.quote}</Text>
            <Text style={styles.quoteAuthor}>{Strings.quoteAuthor}</Text>
          </View> */}
          <View style={styles.balanceCardParent}>
            <BalancesCard theme={theme} availableBalance={accountInfo?.balances[1]?.balance} overallBalance={accountInfo?.balances[1]?.balance} />
          </View>
        </View>
        <View style={styles.cardParent}>
          <ActivationCard theme={theme} />
          <DashboardCard
            theme={theme}
            title={Strings.fundAccount}
            subTitle={Strings.addMoneyRethink}
            navigationText={Strings.wayFund}
            logo={Icons.bank}
            logoStyle={styles.logoStyle}
          />
          <TransactionCard theme={theme} noTrasaction={true} />
          {/* <DashboardCard
            theme={theme}
            cardStyle={styles.exploreCard}
            subTitle={Strings.exploreRethink}
            subTitleStyle={styles.whiteText}
            navigationText={Strings.seeMore}
            navigateTextStyle={styles.whiteText}
            navigationLogoColor={Colors[theme]?.white}
          /> */}
          {/* <DashboardCard
            theme={theme}
            title={Strings.invoices}
            subTitle={Strings.sendTrackInvoice}
            navigationText={Strings.createInvoice}
            logo={Icons.invoices}
            logoStyle={styles.logoStyle}
          /> */}
          <DashboardCard
            theme={theme}
            title={Strings.reserves}
            subTitle={Strings.setAsideMoney}
            navigationText={Strings.createReserve}
            logo={Icons.reserves}
            logoStyle={styles.logoStyle}
          />
          <DashboardCard
            theme={theme}
            title={Strings.referBusiness}
            subTitle={Strings.referNote}
            navigationText={Strings.getStarted}
            logo={Icons.referBusiness}
            logoStyle={styles.logoStyle}
            navigationLogoColor={Colors[theme]?.blue}
            navigateTextStyle={styles.getStartedText}
            onPressNavigationButton={() => navigation.navigate(navigationStrings.REFERRALS)}
          />
          {/* <DashboardCard
            theme={theme}
            cardStyle={styles.rethinkBoostCard}
            title={Strings.rethinkBoost}
            titleStyle={styles.whiteText}
            subTitle={Strings.connectToStripe}
            subTitleStyle={styles.whiteText}
            navigationText={Strings.seeMore}
            navigateTextStyle={styles.whiteText}
            navigationLogoColor={Colors[theme]?.white}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
