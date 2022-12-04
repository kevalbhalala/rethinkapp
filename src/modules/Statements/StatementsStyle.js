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
      paddingHorizontal: horizontalScale(15),
      paddingTop: verticalScale(15),
    },
    statementPeriod: {
      fontFamily: Fonts.medium,
      color: Colors[theme].grey500,
      fontSize: moderateScale(14),
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(10),
      paddingHorizontal: horizontalScale(16),
      marginTop: verticalScale(10),
    },
    divider: {
      height: verticalScale(1),
      backgroundColor: Colors[theme].grey300,
    },
    cardItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: verticalScale(10),
    },
    cardItemTitle: {
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
      fontSize: moderateScale(16),
    },
  });

export default styling;
