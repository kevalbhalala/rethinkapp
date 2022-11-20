import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
import {Colors, horizontalScale, moderateScale} from '../../theme';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  balanceParent: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.grey300,
  },
  balance: {
    color: Colors.black,
    fontSize: moderateScale(40),
    fontFamily: Fonts.bold,
  },
  availableNow: {
    color: Colors.black,
    fontSize: moderateScale(16),
    fontFamily: Fonts.regular,
  },
  scrollView: {
    flex: 0.7,
    paddingHorizontal: horizontalScale(12),
  },
  darkBlueText: {
    color: Colors.blue900,
    fontFamily: Fonts.regular,
  },
  darkGreenText: {
    color: Colors.green900,
    fontFamily: Fonts.regular,
  },
  greyText: {
    color: Colors.grey500,
    fontFamily: Fonts.regular,
  },
});

export default styles;
