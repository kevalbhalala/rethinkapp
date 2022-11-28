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
  header: {
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: horizontalScale(20),
  },
  usernameParent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameT: {
    color: Colors.black,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(28),
  },
  usernameS: {
    color: Colors.grey400,
    fontFamily: Fonts.medium,
    fontSize: moderateScale(24),
  },
  routingAccountNumberParent: {
    flexDirection: 'row',
    marginVertical: verticalScale(20),
    marginBottom: verticalScale(20),
    marginHorizontal: horizontalScale(25),
  },
  routingNumberParent: {
    flex: 0.5,
  },
  accountNumberParent: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  subTitleParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(4),
  },
  subTitle: {
    marginRight: horizontalScale(4),
    fontFamily: Fonts.regular,
  },
  routingNumber: {
    fontFamily: Fonts.regular,
  },
  accountNumber: {
    fontFamily: Fonts.regular,
  },
  cardParent: {
    flexDirection: 'row',
    height: verticalScale(200),
  },
  card: {
    flex: 0.5,
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    margin: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: Colors.black,
    fontFamily: Fonts.regular,
    fontSize: moderateScale(16),
    marginVertical: verticalScale(10),
  },
  referParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: moderateScale(15),
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(10),
  },
  referBusiness: {
    fontFamily: Fonts.bold,
    color: Colors.blue,
    fontSize: moderateScale(16),
  },
});

export default styles;
