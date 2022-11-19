import {StyleSheet} from 'react-native';
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
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(40),
  },
  card: {
    height: verticalScale(90),
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: moderateScale(15),
    flexDirection: 'row',
    marginVertical: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cardTitle: {
    flex: 0.7,
    color: Colors.black,
    fontSize: moderateScale(18),
    fontWeight: '500',
  },
  blackText: {
    color: Colors.black,
  },
  bottomSpace: {
    marginBottom: verticalScale(20),
  },
});

export default styles;
