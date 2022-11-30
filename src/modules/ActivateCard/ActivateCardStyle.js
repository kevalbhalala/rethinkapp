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
    marginTop: verticalScale(150),
  },
  activateCard: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(22),
    color: Colors.black,
    marginVertical: verticalScale(10),
  },
  activateCardNote: {
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
  point: {
    color: Colors.black,
    fontFamily: Fonts.medium,
    fontSize: moderateScale(16),
  },
  pointsParent: {
    marginVertical: verticalScale(10),
  },
  buttonParent: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'center',
  },
});

export default styles;
