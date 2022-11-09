import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  defaultHeaderStyle: {
    flexDirection: 'row',
    height: verticalScale(46),
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
  },
  defaultBackBtnStyle: {
    height: moderateScale(24),
    width: moderateScale(24),
  },
  defaultHeaderTitleStyle: {
    fontSize: moderateScale(20),
    color: Colors.black,
    marginLeft: horizontalScale(12),
  },
});

export default styles;
