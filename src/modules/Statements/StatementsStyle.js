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
  },
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(15),
    paddingTop: verticalScale(15),
  },
  statementPeriod: {
    fontFamily: Fonts.medium,
    color: Colors.grey500,
    fontSize: moderateScale(14),
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(16),
    marginTop: verticalScale(10),
  },
  divider: {
    height: verticalScale(1),
    backgroundColor: Colors.grey300,
  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  cardItemTitle: {
    fontFamily: Fonts.medium,
    color: Colors.black,
    fontSize: moderateScale(16),
  },
});

export default styles;
