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
    paddingHorizontal: horizontalScale(12),
    marginTop: verticalScale(20),
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
  cardTitle: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    color: Colors.black,
  },
  cardSubtitle: {
    fontFamily: Fonts.regular,
    color: Colors.grey500,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(15),
    padding: moderateScale(15),
    marginVertical: verticalScale(10),
  },
  textInput: {
    borderColor: Colors.grey500,
    borderRadius: moderateScale(10),
    fontSize: moderateScale(18),
    marginVertical: verticalScale(20),
    backgroundColor: Colors.white,
  },
  whatLimit: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(18),
    color: Colors.black,
  },
  whichLimit: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(18),
    color: Colors.black,
  },
  divider: {
    height: verticalScale(1.5),
    width: '100%',
    backgroundColor: Colors.grey500,
  },
  cardItemParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: verticalScale(15),
  },
});

export default styles;
