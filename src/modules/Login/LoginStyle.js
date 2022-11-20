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
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(15),
  },
  applogoParent: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appLogo: {
    height: verticalScale(70),
    width: horizontalScale(220),
  },
  textInput: {
    backgroundColor: Colors.white,
    marginTop: verticalScale(10),
  },
  loginBtn: {
    width: '100%',
    height: verticalScale(50),
    backgroundColor: Colors.blue,
    borderRadius: moderateScale(30),
    marginTop: verticalScale(30),
  },
  loginText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
  },
  resetPassword: {
    color: Colors.blue,
    fontSize: moderateScale(16),
    alignSelf: 'center',
    marginTop: verticalScale(18),
    fontFamily: Fonts.bold,
  },
  applyNowParent: {
    flex: 0.45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  newToRethink: {
    color: Colors.black,
    fontSize: moderateScale(14),
    fontFamily: Fonts.regular,
  },
  applyNow: {
    color: Colors.black,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(4),
  },
});

export default styles;
