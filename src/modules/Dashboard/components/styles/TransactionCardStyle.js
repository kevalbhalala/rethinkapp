import {StyleSheet} from 'react-native';
import {Fonts} from '../../../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const styling = theme =>
  StyleSheet.create({
    card: {
      width: '100%',
      backgroundColor: Colors[theme].white,
      marginVertical: verticalScale(10),
      borderRadius: moderateScale(10),
      paddingHorizontal: horizontalScale(8),
      overflow: 'hidden',
    },
    cardHeader: {
      width: '100%',
      height: verticalScale(60),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerTitle: {
      color: Colors[theme].black,
      fontSize: moderateScale(20),
      fontFamily: Fonts.bold,
    },
    divider: {
      backgroundColor: Colors[theme].grey300,
      width: '100%',
      height: verticalScale(3),
    },
  });

export default styling;
