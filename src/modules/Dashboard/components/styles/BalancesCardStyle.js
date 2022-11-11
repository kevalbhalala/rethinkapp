import {StyleSheet} from 'react-native';
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
    fontWeight: '700',
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
    fontWeight: '600',
    marginRight: horizontalScale(4),
  },
  availableBalanceNumber: {
    color: Colors.emerald,
    fontSize: moderateScale(18),
    fontWeight: '700',
  },
  balanceDetailText: {
    color: Colors.grey700,
    fontSize: moderateScale(14),
    fontWeight: '600',
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
    fontWeight: '600',
  },
  overallBalanceNumber: {
    fontSize: moderateScale(16),
    color: Colors.emerald,
    fontWeight: '600',
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
  },
  moneyInNumber: {
    fontSize: moderateScale(16),
    color: Colors.emerald,
    fontWeight: '600',
  },
  moneyOutNumber: {
    fontSize: moderateScale(16),
    color: Colors.black,
    fontWeight: '600',
  },
});

export default styles;
