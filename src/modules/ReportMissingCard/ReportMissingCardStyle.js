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
    marginTop: verticalScale(30),
  },
  reportMissingCard: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(22),
    color: Colors.black,
    marginVertical: verticalScale(10),
  },
  notes: {
    fontFamily: Fonts.medium,
    color: Colors.black,
    fontSize: moderateScale(16),
    marginVertical: verticalScale(10),
  },
  buttonStyle: {
    width: '100%',
    height: verticalScale(40),
    backgroundColor: Colors.blue,
    borderRadius: moderateScale(20),
  },
  buttonParent: {
    position: 'absolute',
    bottom: verticalScale(15),
    width: '100%',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    marginTop: verticalScale(15),
  },
  cardTitle: {
    color: Colors.grey400,
    fontFamily: Fonts.regular,
    marginBottom: verticalScale(10),
  },
  divider: {
    backgroundColor: Colors.grey400,
    height: verticalScale(1),
    marginVertical: verticalScale(10),
  },
  cardItem: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  cardItemTitle: {
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  cardItemLeftIcon: {
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
