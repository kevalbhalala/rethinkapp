import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styling = theme => {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors[theme].white,
      paddingHorizontal: horizontalScale(14),
    },
    titleParent: {
      flex: 0.2,
      justifyContent: 'flex-end',
    },
    title: {
      fontSize: moderateScale(30),
      color: Colors[theme].black,
      fontFamily: Fonts.bold,
    },
    subTitleParent: {
      flex: 0.15,
      justifyContent: 'center',
    },
    subTitle: {
      fontSize: moderateScale(16),
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
    },
    applyButtonParent: {
      flex: 0.2,
      justifyContent: 'space-around',
    },
    applyBtn: {
      backgroundColor: Colors[theme].blue,
      width: '100%',
      height: verticalScale(50),
      borderRadius: moderateScale(30),
    },
    applyText: {
      fontSize: moderateScale(18),
      fontFamily: Fonts.medium,
    },
    completeApplicationBtn: {
      width: '100%',
      height: verticalScale(50),
      borderRadius: moderateScale(30),
    },
    completeApplicationText: {
      fontSize: moderateScale(18),
      fontFamily: Fonts.medium,
    },
    dividerParent: {
      flex: 0.1,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    line: {
      height: verticalScale(1),
      width: '40%',
      backgroundColor: Colors[theme].black,
    },
    orParent: {
      width: '20%',
      alignItems: 'center',
    },
    or: {
      fontFamily: Fonts.regular,
      color: Colors[theme].grey700,
      fontSize: moderateScale(18),
    },
    alreadyAccountBtn: {
      width: '100%',
      height: verticalScale(50),
      borderRadius: moderateScale(30),
      backgroundColor: Colors[theme].white,
      borderColor: Colors[theme].black,
      borderWidth: horizontalScale(1),
    },
    alreadyAccountText: {
      color: Colors[theme].black,
      fontSize: moderateScale(18),
      fontFamily: Fonts.medium,
    },
    introNoteParent: {
      flex: 0.32,
      justifyContent: 'flex-end',
    },
    introNote: {
      color: Colors[theme].black,
      fontSize: moderateScale(14),
      textAlign: 'center',
      fontFamily: Fonts.regular,
    },
  });
};

export default styling;
