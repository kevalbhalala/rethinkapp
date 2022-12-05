import {StyleSheet} from 'react-native';
import {Colors, horizontalScale, verticalScale} from '../../theme';

const styling = theme =>
  StyleSheet.create({
    buttonBackground: {
      backgroundColor: Colors[theme]?.white,
    },
    dropdownParent: {
      position: 'absolute',
      right: horizontalScale(10),
      top: verticalScale(24),
    },
  });

export default styling;
