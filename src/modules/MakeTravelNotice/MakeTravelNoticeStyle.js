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
    paddingHorizontal: horizontalScale(10),
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    padding: moderateScale(15),
  },
  cardTitle: {
    color: Colors.black,
    fontFamily: Fonts.medium,
    marginBottom: verticalScale(25),
    fontSize: moderateScale(16),
  },
  fromToParent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: Colors.grey500,
  },
  buttonStyle: {
    width: '90%',
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: Colors.blue,
    height: verticalScale(40),
    bottom: verticalScale(10),
    borderRadius: moderateScale(20),
  },
  modalParent: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  modalTitle: {
    fontFamily: Fonts.bold,
    color: Colors.black,
    fontSize: moderateScale(22),
    marginBottom: verticalScale(40),
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(20),
  },
  paperTextInput: {
    backgroundColor: Colors.grey200,
  },
  searchBarParent: {
    flexDirection: 'row',
    height: verticalScale(45),
    backgroundColor: Colors.grey200,
    borderRadius: moderateScale(10),
    marginHorizontal: horizontalScale(10),
  },
  searchRightIcon: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 0.85,
    paddingLeft: horizontalScale(8),
  },
  countryList: {
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(15),
  },
  countryParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryFlag: {
    marginRight: horizontalScale(10),
    height: moderateScale(40),
    width: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryName: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(18),
    color: Colors.black,
  },
});

export default styles;
