import {StyleSheet} from 'react-native';
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
    fontWeight: '800',
  },
  availableNow: {
    color: Colors.black,
    fontSize: moderateScale(16),
  },
  scrollView: {
    flex: 0.7,
    paddingHorizontal: horizontalScale(12),
  },
  darkBlueText: {
    color: Colors.blue900,
  },
  darkGreenText: {
    color: Colors.green900,
  },
  greyText: {
    color: Colors.grey500,
  },
});

export default styles;
