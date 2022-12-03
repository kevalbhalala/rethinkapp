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
  headerParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: horizontalScale(10),
  },
  earnCard: {
    height: verticalScale(100),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  earnCardTitle: {
    color: Colors.money,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(32),
  },
  earnCardSubtitle: {
    color: Colors.black,
    fontFamily: Fonts.regular,
    fontSize: moderateScale(14),
  },
  card: {
    height: verticalScale(120),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  referBusinessParent: {
    height: moderateScale(100),
    width: moderateScale(100),
    padding: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  referNote: {
    color: Colors.black,
    fontFamily: Fonts.regular,
    marginBottom: verticalScale(10),
  },
  referBusiness: {
    height: '100%',
    width: '100%',
  },
  seeTermsParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeTerms: {
    fontFamily: Fonts.medium,
    color: Colors.blue,
    fontSize: moderateScale(14),
  },
  referNoteParent: {
    flex: 0.9,
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(10),
  },
  sendInviteCard: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    padding: moderateScale(14),
    marginVertical: verticalScale(10),
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: Colors.grey500,
    padding: 0,
    fontSize: moderateScale(16),
    marginTop: verticalScale(10),
  },
  commonText: {
    color: Colors.grey700,
    fontFamily: Fonts.regular,
  },
  sendInviteParent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sendInvite: {
    color: Colors.white,
    fontFamily: Fonts.medium,
    fontSize: moderateScale(18),
  },
  sendInviteButtonStyle: {
    backgroundColor: Colors.darkBlue,
    height: verticalScale(50),
    marginTop: verticalScale(15),
    width: horizontalScale(270),
    borderRadius: moderateScale(30),
  },
  searchParent: {
    backgroundColor: Colors.darkBlue,
    height: moderateScale(50),
    width: moderateScale(50),
    marginTop: verticalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(30),
  },
  logo: {
    height: moderateScale(75),
    width: moderateScale(75),
    alignSelf: 'center',
    tintColor: Colors.grey500,
    marginVertical: verticalScale(15),
  },
  noInvite: {
    textAlign: 'center',
    alignSelf: 'center',
    color: Colors.grey700,
  },
});

export default styles;
