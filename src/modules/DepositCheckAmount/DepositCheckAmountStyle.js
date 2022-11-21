import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(18),
    borderRadius: moderateScale(18),
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(15),
  },
  divider: {
    backgroundColor: Colors.grey300,
    width: '100%',
    height: verticalScale(2),
  },
  darkGreenText: {
    color: Colors.green900,
  },
  darkBlueText: {
    color: Colors.blue900,
  },
  expectedAvailability: {
    color: Colors.grey500,
    marginVertical: verticalScale(10),
    fontSize: moderateScale(16),
    fontFamily: Fonts.regular,
    marginRight: verticalScale(6),
  },
  expectedAvailabilityParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(18),
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  continueParent: {
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    paddingHorizontal: horizontalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonStyle: {
    backgroundColor: Colors.blue,
    width: '100%',
    height: verticalScale(50),
    borderRadius: moderateScale(30),
    marginVertical: verticalScale(10),
  },
  continue: {
    color: Colors.white,
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
  },
  amount: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.medium,
    marginVertical: verticalScale(14),
  },
  textInput: {
    padding: 0,
    borderBottomWidth: 2,
    paddingBottom: verticalScale(8),
    fontSize: moderateScale(24),
    marginVertical: verticalScale(10),
    borderColor: Colors.grey300,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  textInputParent: {
    flexDirection: 'row',
    width: '100%',
  },
  depositCheckAmtNote: {
    fontSize: moderateScale(12),
    textAlign: 'center',
    fontFamily: Fonts.medium,
  },
});

export default styles;
