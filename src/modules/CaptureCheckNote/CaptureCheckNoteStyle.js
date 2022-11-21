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
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(24),
  },
  captureNoteParent: {
    flexDirection: 'row',
    marginVertical: verticalScale(10),
    alignItems: 'center',
  },
  captureNote: {
    fontSize: moderateScale(32),
    color: Colors.black,
    fontFamily: Fonts.regular,
    marginRight: horizontalScale(4),
  },
  buttonPanel: {
    flexDirection: 'row',
    height: verticalScale(50),
    backgroundColor: Colors.black,
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(30),
    alignItems: 'center',
  },
  whiteText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
  },
});

export default styles;
