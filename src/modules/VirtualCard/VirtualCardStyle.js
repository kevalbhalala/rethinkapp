import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styling = theme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors[theme]?.screenBackground,
    },
    headerParent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: horizontalScale(15),
      alignItems: 'center',
    },
    container: {
      flex: 1,
      paddingHorizontal: horizontalScale(10),
    },
    virtualCard: {
      flexDirection: 'row',
      marginTop: verticalScale(20),
      height: verticalScale(250),
      borderRadius: moderateScale(10),
      padding: moderateScale(10),
      justifyContent: 'space-between',
    },
    appLogo: {
      width: moderateScale(150),
      height: moderateScale(40),
    },
    cardName: {
      fontFamily: Fonts.regular,
      color: 'white',
      marginTop: verticalScale(30),
    },
    cardNumber: {
      marginTop: verticalScale(80),
      fontFamily: Fonts.regular,
      color: 'white',
    },
    cardStateParent: {
      backgroundColor: Colors[theme]?.emerald,
      padding: moderateScale(4),
    },
    cardState: {
      color: 'white',
      fontFamily: Fonts.regular,
      fontSize: moderateScale(10),
    },
    rightSide: {
      alignItems: 'flex-end',
    },
    cardType: {
      color: 'white',
      marginTop: verticalScale(80),
    },
    masterCard: {
      height: verticalScale(60),
      width: horizontalScale(80),
      marginTop: verticalScale(30),
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: verticalScale(15),
    },
    card: {
      flexDirection: 'row',
      backgroundColor: Colors[theme]?.white,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: moderateScale(8),
      padding: moderateScale(10),
    },
    freezCard: {
      color: Colors[theme]?.black,
      fontFamily: Fonts.regular,
    },
    cardDetails: {
      color: Colors[theme]?.black,
      fontFamily: Fonts.regular,
    },
    addFundsCard: {
      fontFamily: Fonts.regular,
      color: Colors[theme]?.black,
      fontSize: moderateScale(16),
    },
    noTransaction: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticalScale(80),
    },
    noVirtualCardTransaction: {
      color: Colors[theme]?.black,
      fontFamily: Fonts.regular,
      textAlign: 'center',
      lineHeight: verticalScale(25),
    },
  });

export default styling;
