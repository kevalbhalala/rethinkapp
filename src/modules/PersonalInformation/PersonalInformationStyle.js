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
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(25),
  },
  cardTitle: {
    fontFamily: Fonts.regular,
    color: Colors.grey500,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    paddingHorizontal: horizontalScale(10),
    marginTop: verticalScale(8),
    marginBottom: verticalScale(25),
  },
  navigateButtons: {
    flexDirection: 'row',
    height: verticalScale(50),
    marginVertical: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navigateButtonTitle: {
    fontFamily: Fonts.regular,
    color: Colors.grey500,
    fontSize: moderateScale(15),
  },
  navigateButtonSubtitle: {
    fontFamily: Fonts.regular,
    color: Colors.black,
    fontSize: moderateScale(15),
  },

  divider: {
    width: '100%',
    backgroundColor: Colors.grey300,
    height: verticalScale(2),
  },
});

export default styles;
