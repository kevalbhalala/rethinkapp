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
    backgroundColor: Colors.grey300,
    paddingHorizontal: horizontalScale(14),
  },
  modalButttonParent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(20),
  },
  dateParent: {
    marginHorizontal: horizontalScale(6),
    marginVertical: verticalScale(20),
  },
  date: {
    color: Colors.black,
    fontFamily: Fonts.bold,
  },
  chartParent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(20),
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    marginHorizontal: horizontalScale(10),
  },
  cardHeader: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(10),
    marginVertical: verticalScale(15),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    color: Colors.black,
    fontFamily: Fonts.regular,
  },
  cardDetail: {
    marginHorizontal: horizontalScale(10),
  },
  cardDetailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
  },
  incomeNumber: {
    color: Colors.emerald,
    fontFamily: Fonts.regular,
  },
  blackText: {
    color: Colors.black,
    fontFamily: Fonts.regular,
  },
  netCashNumber: {
    color: Colors.blue,
    fontFamily: Fonts.regular,
  },
  modalParent: {
    flex: 1,
    backgroundColor: Colors.black50,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderTopRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(10),
  },
  modalHeader: {
    marginVertical: verticalScale(20),
    marginHorizontal: horizontalScale(20),
  },
  modalTitle: {
    color: Colors.black,
    fontSize: moderateScale(24),
    fontFamily: Fonts.bold,
  },
  divider: {
    backgroundColor: Colors.grey400,
    height: verticalScale(2),
  },
  modalList: {
    marginHorizontal: horizontalScale(14),
  },
  itemParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(15),
    alignItems: 'center',
  },
  modalItem: {
    color: Colors.black,
    fontSize: moderateScale(14),
  },
  selectedModalItem: {
    color: Colors.blue,
    fontFamily: Fonts.bold,
  },
});

export default styles;
