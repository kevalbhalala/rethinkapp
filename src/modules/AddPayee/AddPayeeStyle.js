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
    paddingHorizontal: horizontalScale(14),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  choosePayMethod: {
    fontFamily: Fonts.regular,
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    height: verticalScale(100),
    backgroundColor: Colors.white,
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(15),
  },
  leftParent: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailParent: {
    flex: 0.7,
    justifyContent: 'center',
  },
  detailText: {
    color: Colors.black,
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
  },
  rightParent: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
