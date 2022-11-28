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
  cardT: {
    fontFamily: Fonts.medium,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(10),
  },
  innerView: {
    flexDirection: 'row',
  },
  cardTitle: {
    fontFamily: Fonts.bold,
    color: Colors.blue,
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(15),
  },
});

export default styles;
