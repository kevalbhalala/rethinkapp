import { StyleSheet } from 'react-native';
import { Fonts } from '../../assets';
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
      justifyContent: 'center',
      paddingHorizontal: 20
    },
    appLogo: {
      height: verticalScale(130),
      width: horizontalScale(320),
    },
    headText: {
      fontSize: 34,
      fontWeight: 'bold',
      marginTop: 30
    },
    secondText: {
      marginTop: 10,
      fontSize: 20
    }
  });

export default styling;
