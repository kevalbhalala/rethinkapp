import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: Colors.white,
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(8),
    overflow: 'hidden',
  },
  cardHeader: {
    width: '100%',
    height: verticalScale(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: Colors.black,
    fontSize: moderateScale(20),
    fontWeight: '700',
  },
  divider: {
    backgroundColor: Colors.grey300,
    width: '100%',
    height: verticalScale(3),
  },
});

export default styles;
