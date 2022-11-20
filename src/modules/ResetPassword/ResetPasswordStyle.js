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
  header: {
    backgroundColor: Colors.grey200,
  },
  headerTitle: {
    fontWeight: '600',
  },
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(15),
    backgroundColor: Colors.grey200,
  },
  card: {
    backgroundColor: Colors.white,
    height: verticalScale(150),
    borderRadius: moderateScale(15),
    paddingHorizontal: horizontalScale(14),
    justifyContent: 'space-evenly',
    marginTop: verticalScale(10),
  },
  emailQuestion: {
    color: Colors.black,
    fontFamily: Fonts.regular,

    fontSize: moderateScale(16),
  },
  textInput: {
    backgroundColor: Colors.white,
  },
  ConfirmParent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmBtn: {
    backgroundColor: Colors.blue,
    width: '100%',
    height: verticalScale(50),
    borderRadius: moderateScale(30),
  },
  confirmText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.regular,
  },
});

export default styles;
