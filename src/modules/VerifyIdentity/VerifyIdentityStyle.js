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
    paddingHorizontal: horizontalScale(25),
  },
  makePayment: {
    color: Colors.black,
    fontSize: moderateScale(32),
    fontWeight: '600',
    marginTop: verticalScale(20),
  },
  userLogo: {
    height: moderateScale(125),
    width: moderateScale(100),
    marginTop: verticalScale(60),
  },
  title: {
    color: Colors.black,
    fontSize: moderateScale(28),
    fontWeight: '700',
    lineHeight: verticalScale(40),
    marginTop: verticalScale(20),
  },
  subTitle: {
    color: Colors.black,
    fontSize: moderateScale(16),
    marginTop: verticalScale(10),
    fontWeight: '300',
    lineHeight: verticalScale(24),
  },
  yourIdentity: {
    flexDirection: 'row',
    marginVertical: verticalScale(18),
  },
  verifyYourIdentity: {
    marginRight: horizontalScale(10),
  },
  verifyIdentityParent: {
    position: 'absolute',
    width: '100%',
    bottom: verticalScale(20),
    paddingHorizontal: verticalScale(10),
  },
  verifyIdentity: {
    color: Colors.white,
    fontSize: moderateScale(18),
  },
  verifyIdentityButton: {
    backgroundColor: Colors.blue,
    width: '100%',
    height: verticalScale(50),
    borderRadius: moderateScale(50),
    alignSelf: 'center',
  },
});

export default styles;
