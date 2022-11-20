import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
import {Colors, horizontalScale, verticalScale} from '../../theme';

const styles = StyleSheet.create({
  defaultButtonStyle: {
    height: verticalScale(30),
    width: horizontalScale(150),
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTextStyle: {
    color: Colors.white,
    fontFamily: Fonts.regular,
  },
});

export default styles;
