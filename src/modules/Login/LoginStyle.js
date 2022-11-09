import {StyleSheet} from 'react-native';
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
    fontWeight: '600',
  },
  resetPassword: {
    color: Colors.blue,
    fontSize: moderateScale(16),
    alignSelf: 'center',
    marginTop: verticalScale(18),
    fontWeight: '500',
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
  },
  applyNow: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(4),
  },
});

export default styles;
