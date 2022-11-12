import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.grey300,
  },
  scrollView: {
    flex: 1,
    marginBottom: verticalScale(70),
  },
  container: {
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(15),
  },
  card: {
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(12),
    borderRadius: moderateScale(8),
    marginVertical: verticalScale(10),
  },
  cardHeader: {
    height: verticalScale(40),
    justifyContent: 'center',
  },
  cardHeaderText: {
    color: Colors.black,
    fontSize: moderateScale(18),
    fontWeight: '700',
  },
  datePickerParent: {
    flexDirection: 'row',
    marginBottom: verticalScale(20),
  },
  trasactionTypeParent: {
    marginVertical: verticalScale(10),
  },
  trasactionTypeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trasactionTypeHeaderTitle: {
    color: Colors.black,
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
  selectAll: {
    color: Colors.blue,
    fontWeight: '600',
  },
  typesParent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  typeButtonText: {
    color: Colors.black,
  },
  typeButton: {
    backgroundColor: Colors.white,
    height: verticalScale(50),
    margin: moderateScale(4),
    borderColor: Colors.grey300,
    borderWidth: 2,
    borderRadius: moderateScale(6),
  },
  selectedTypeButton: {
    backgroundColor: Colors.black,
    borderWidth: 0,
  },
  applyFilterParent: {
    position: 'absolute',
    bottom: 0,
    height: verticalScale(70),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(14),
  },
  applyFilterButton: {
    width: '100%',
    height: verticalScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: Colors.blue,
  },
  applyFilter: {
    color: Colors.white,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  whiteText: {
    color: Colors.white,
  },
  dateRangePicker: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
    backgroundColor: Colors.black50,
  },
  dateRangePickerContainer: {
    backgroundColor: Colors.white,
    paddingVertical: verticalScale(10),
  },
  dateRangePickerHeader: {
    color: Colors.black,
    fontSize: moderateScale(22),
    fontWeight: '700',
    marginLeft: horizontalScale(18),
    marginBottom: verticalScale(10),
  },
  divider: {
    height: verticalScale(2),
    width: '100%',
    backgroundColor: Colors.grey300,
  },
  dateRangeDetailParent: {
    marginHorizontal: horizontalScale(14),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateRangeDetail: {
    color: Colors.black,
    fontSize: moderateScale(16),
    marginVertical: verticalScale(16),
  },
  selectedDateRange: {
    color: Colors.blue,
  },
  searchBarPanel: {
    margin: moderateScale(10),
  },
  searchBarParent: {
    width: '100%',
    flexDirection: 'row',
    height: verticalScale(45),
    marginRight: horizontalScale(50),
    backgroundColor: Colors.grey300,
  },
  searchRightIcon: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryDetail: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(15),
  },
  categoryDetailTitle: {
    color: Colors.black,
    fontSize: moderateScale(10),
    fontWeight: '600',
  },
});

export default styles;
