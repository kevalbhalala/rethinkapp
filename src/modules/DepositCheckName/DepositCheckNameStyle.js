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
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(14),
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(15),
    padding: moderateScale(10),
  },
  imageParent: {
    height: verticalScale(150),
  },
  textInput: {
    borderColor: Colors.grey300,
    borderBottomWidth: 2,
    padding: 0,
    height: verticalScale(40),
  },
  addupadateDbaParent: {
    borderColor: Colors.black,
    borderRadius: moderateScale(30),
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(45),
    width: horizontalScale(150),
    marginVertical: verticalScale(20),
  },
  accountName: {
    fontFamily: Fonts.regular,
    color: Colors.black,
    marginVertical: verticalScale(10),
  },
  addupadateDba: {
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  checkAcceptNote: {
    fontFamily: Fonts.regular,
    color: Colors.black,
    marginTop: verticalScale(10),
  },
  continueButtonStyle: {
    backgroundColor: Colors.blue,
    height: verticalScale(45),
    width: '95%',
    borderRadius: moderateScale(20),
    position: 'absolute',
    bottom: verticalScale(15),
    alignSelf: 'center',
  },
  continue: {
    fontFamily: Fonts.medium,
    color: Colors.white,
    fontSize: moderateScale(16),
  },
  disableButtonStyle: {
    backgroundColor: Colors.grey400,
  },
});

export default styles;
