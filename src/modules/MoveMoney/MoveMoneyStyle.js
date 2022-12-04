import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
import {Colors, horizontalScale, moderateScale} from '../../theme';

const styling = theme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors[theme]?.screenBackground,
    },
    balanceParent: {
      flex: 0.3,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderBottomColor: Colors[theme].grey300,
    },
    balance: {
      color: Colors[theme].black,
      fontSize: moderateScale(40),
      fontFamily: Fonts.bold,
    },
    availableNow: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      fontFamily: Fonts.regular,
    },
    scrollView: {
      flex: 0.7,
      paddingHorizontal: horizontalScale(12),
    },
    darkBlueText: {
      color: Colors[theme].blue900,
      fontFamily: Fonts.regular,
    },
    darkGreenText: {
      color: Colors[theme].green900,
      fontFamily: Fonts.regular,
    },
    greyText: {
      color: Colors[theme].grey500,
      fontFamily: Fonts.regular,
    },
  });

export default styling;
