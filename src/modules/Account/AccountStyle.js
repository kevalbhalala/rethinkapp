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
    header: {
      height: verticalScale(50),
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingHorizontal: horizontalScale(20),
    },
    usernameParent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    usernameT: {
      color: Colors[theme].black,
      fontFamily: Fonts.bold,
      fontSize: moderateScale(28),
    },
    usernameS: {
      color: Colors[theme].grey400,
      fontFamily: Fonts.medium,
      fontSize: moderateScale(24),
    },
    routingAccountNumberParent: {
      flexDirection: 'row',
      marginVertical: verticalScale(20),
      marginBottom: verticalScale(20),
      marginHorizontal: horizontalScale(25),
    },
    routingNumberParent: {
      flex: 0.5,
    },
    accountNumberParent: {
      flex: 0.5,
      alignItems: 'flex-end',
    },
    subTitleParent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: verticalScale(4),
    },
    subTitle: {
      marginRight: horizontalScale(4),
      fontFamily: Fonts.regular,
      color: Colors[theme]?.grey700,
    },
    routingNumber: {
      color: Colors[theme]?.grey700,
      fontFamily: Fonts.regular,
    },
    accountNumber: {
      color: Colors[theme]?.grey700,
      fontFamily: Fonts.regular,
    },
    cardParent: {
      flexDirection: 'row',
      height: verticalScale(200),
    },
    card: {
      flex: 0.5,
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(10),
      margin: moderateScale(8),
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardTitle: {
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
      fontSize: moderateScale(16),
      marginVertical: verticalScale(10),
    },
    referParent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Colors[theme].white,
      padding: moderateScale(15),
      marginHorizontal: horizontalScale(10),
      borderRadius: moderateScale(10),
      marginVertical: verticalScale(10),
    },
    referBusiness: {
      fontFamily: Fonts.bold,
      color: Colors[theme].blue,
      fontSize: moderateScale(16),
    },
  });

export default styling;
