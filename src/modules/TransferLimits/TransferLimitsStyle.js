import {version} from 'react';
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
    paddingTop: verticalScale(20),
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(15),
    paddingHorizontal: horizontalScale(8),
    marginVertical: verticalScale(8),
    paddingVertical: verticalScale(10),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardHeaderIconParent: {
    height: moderateScale(40),
    width: moderateScale(40),
    margin: moderateScale(10),
  },
  cardHeaderIcon: {
    height: '100%',
    width: '100%',
  },
  customIconSize: {
    height: moderateScale(20),
    width: horizontalScale(20),
  },
  cardItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(12),
  },
  cardItemTitle: {
    fontFamily: Fonts.regular,
    color: Colors.grey500,
  },
  divider: {
    width: '100%',
    height: verticalScale(2),
    backgroundColor: Colors.grey500,
  },
  cardTitle: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Colors.black,
  },
  cardSubtitle: {
    fontFamily: Fonts.regular,
    color: Colors.grey500,
  },
  amountText: {
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  buttonStyle: {
    height: verticalScale(45),
    backgroundColor: Colors.blue,
    width: '100%',
    marginVertical: verticalScale(12),
    borderRadius: moderateScale(40),
  },
  buttonTitle: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(18),
  },
});

export default styles;
