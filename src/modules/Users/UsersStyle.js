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
  headerParent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: horizontalScale(15),
  },
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(15),
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(15),
    padding: moderateScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  username: {
    fontFamily: Fonts.medium,
    color: Colors.black,
  },
  usermail: {
    fontFamily: Fonts.regular,
    color: Colors.grey500,
  },
  userType: {
    fontFamily: Fonts.regular,
    color: Colors.blue,
  },
});

export default styles;
