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
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(150),
  },
  bankLetter: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(28),
    color: Colors.black,
    marginTop: verticalScale(15),
  },
  bankLetterNote: {
    fontFamily: Fonts.regular,
    fontSize: moderateScale(16),
    color: Colors.grey500,
    marginTop: verticalScale(15),
  },
  bottomView: {
    paddingHorizontal: horizontalScale(20),
  },
  continueButton: {
    backgroundColor: Colors.blue,
    width: '100%',
    marginVertical: verticalScale(10),
    height: verticalScale(45),
    borderRadius: moderateScale(20),
  },
  cityParent: {
    flexDirection: 'row',
  },
});

export default styles;
