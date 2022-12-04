import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styling = theme =>
  StyleSheet.create({
    screen: {
      flex: 1,
    },
    header: {
      backgroundColor: Colors[theme]?.screenBackground,
    },
    headerTitle: {
      fontFamily: Fonts.bold,
    },
    container: {
      flex: 1,
      paddingHorizontal: horizontalScale(15),
      backgroundColor: Colors[theme]?.screenBackground,
    },
    card: {
      backgroundColor: Colors[theme].white,
      height: verticalScale(150),
      borderRadius: moderateScale(15),
      paddingHorizontal: horizontalScale(14),
      justifyContent: 'space-evenly',
      marginTop: verticalScale(10),
    },
    emailQuestion: {
      color: Colors[theme].black,
      fontFamily: Fonts.regular,

      fontSize: moderateScale(16),
    },
    textInput: {
      backgroundColor: Colors[theme].white,
    },
    ConfirmParent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    confirmBtn: {
      backgroundColor: Colors[theme].blue,
      width: '100%',
      height: verticalScale(50),
      borderRadius: moderateScale(30),
    },
    confirmText: {
      fontSize: moderateScale(18),
      fontFamily: Fonts.regular,
    },
  });

export default styling;
