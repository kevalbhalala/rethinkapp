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
    paddingTop: verticalScale(25),
  },
  cardTitle: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.regular,
    color: Colors.grey500,
    marginBottom: verticalScale(25),
  },
  card: {
    paddingTop: verticalScale(10),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    paddingHorizontal: horizontalScale(10),
    marginTop: verticalScale(8),
    marginBottom: verticalScale(25),
  },
  textInput: {
    borderColor: Colors.grey500,
    borderRadius: moderateScale(10),
    fontSize: moderateScale(18),
    marginBottom: verticalScale(20),
    backgroundColor: Colors.white,
  },

  bottomView: {
    paddingHorizontal: horizontalScale(20),
  },
  editEmailNote: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    color: Colors.grey500,
  },
  continueButton: {
    backgroundColor: Colors.blue,
    width: '100%',
    marginVertical: verticalScale(10),
    height: verticalScale(45),
    borderRadius: moderateScale(20),
  },
});

export default styles;
