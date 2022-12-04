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
      backgroundColor: Colors[theme]?.screenBackground,
    },
    container: {
      flex: 1,
      paddingHorizontal: horizontalScale(20),
      paddingTop: verticalScale(25),
    },
    cardTitle: {
      fontFamily: Fonts.regular,
      color: Colors[theme].grey500,
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(10),
      overflow: 'hidden',
      paddingHorizontal: horizontalScale(10),
      marginTop: verticalScale(8),
      marginBottom: verticalScale(25),
    },
    navigateButtons: {
      flexDirection: 'row',
      height: verticalScale(50),
      marginVertical: 2,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    navigateButtonText: {
      fontFamily: Fonts.regular,
      color: Colors[theme].black,
      fontSize: moderateScale(15),
    },
    divider: {
      width: '100%',
      backgroundColor: Colors[theme].grey300,
      height: verticalScale(2),
    },
    logout: {
      color: Colors[theme].blue,
      fontFamily: Fonts.regular,
    },
    logoutButton: {
      width: '100%',
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(10),
      height: verticalScale(40),
      marginTop: verticalScale(40),
    },
    version: {
      fontFamily: Fonts.regular,
      alignSelf: 'center',
      marginTop: verticalScale(30),
    },
  });

export default styling;
