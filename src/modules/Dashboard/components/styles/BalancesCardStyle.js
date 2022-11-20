import {StyleSheet} from 'react-native';
import {Fonts} from '../../../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: Colors.white,
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
    color: Colors.black,
    fontSize: moderateScale(20),
    fontFamily: Fonts.bold,
  },
  divider: {
    backgroundColor: Colors.grey300,
    width: '100%',
    height: verticalScale(3),
  },
  balanceDetailParent: {
    height: verticalScale(150),
    width: '100%',
    flexDirection: 'row',
  },
  balanceDetail: {
    flex: 0.6,
    justifyContent: 'space-evenly',
  },
  balanceDetailNumbers: {
    flex: 0.4,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  availableParent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  availableBalance: {
    color: Colors.black,
    fontSize: moderateScale(16),
    fontFamily: Fonts.bold,
    marginRight: horizontalScale(4),
  },
  availableBalanceNumber: {
    color: Colors.emerald,
    fontSize: moderateScale(18),
    fontFamily: Fonts.bold,
  },
  balanceDetailText: {
    color: Colors.grey700,
    fontSize: moderateScale(14),
    fontFamily: Fonts.bold,
  },
  overallBalanceParent: {
    height: verticalScale(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  overallBalanceText: {
    fontSize: moderateScale(16),
    color: Colors.black,
    fontFamily: Fonts.bold,
  },
  overallBalanceNumber: {
    fontSize: moderateScale(16),
    color: Colors.emerald,
    fontFamily: Fonts.bold,
  },
  monthDetailParent: {
    height: verticalScale(120),
    marginBottom: verticalScale(15),
    backgroundColor: Colors.grey300,
    borderRadius: moderateScale(10),
  },
  monthTextParent: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthName: {
    color: Colors.black,
    fontSize: moderateScale(14),
    fontFamily: Fonts.regular,
  },
  monthDetailDivider: {
    backgroundColor: Colors.grey400,
    width: '100%',
    height: verticalScale(2),
  },
  moneyInOutParent: {
    flex: 0.65,
    flexDirection: 'row',
  },
  moneyInParent: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moneyOutParent: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moneyDetailText: {
    color: Colors.black,
    fontFamily: Fonts.regular,
  },
  moneyInNumber: {
    fontSize: moderateScale(16),
    color: Colors.emerald,
    fontFamily: Fonts.bold,
  },
  moneyOutNumber: {
    fontSize: moderateScale(16),
    color: Colors.black,
    fontFamily: Fonts.bold,
  },
});

export default styles;
