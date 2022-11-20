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
  descriptionTitle: {
    color: Colors.black,
    marginVertical: verticalScale(10),
    fontSize: moderateScale(16),
    fontFamily: Fonts.regular,
  },
  descriptionSubtitle: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(18),
    fontFamily: Fonts.regular,
  },
  verifyParent: {
    height: verticalScale(70),
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    paddingHorizontal: horizontalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButtonStyle: {
    backgroundColor: Colors.transparent,
    width: '100%',
    height: verticalScale(50),
    borderRadius: moderateScale(30),
    borderWidth: 2,
  },
  verifyIdentity: {
    color: Colors.black,
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
});

export default styles;
