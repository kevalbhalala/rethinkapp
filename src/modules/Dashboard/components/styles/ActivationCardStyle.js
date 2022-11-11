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
    height: verticalScale(150),
    backgroundColor: Colors.white,
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    paddingHorizontal: horizontalScale(8),
  },
  titleParent: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    color: Colors.black,
    fontSize: moderateScale(18),
    fontWeight: '700',
  },
  progressBarParent: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    height: verticalScale(25),
    width: '100%',
    backgroundColor: Colors.grey400,
    borderRadius: moderateScale(6),
    flexDirection: 'row',
    overflow: 'hidden',
  },
  innerProgressBar: {
    backgroundColor: Colors.blue,
  },
  detailParent: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detail: {
    color: Colors.black,
    textAlign: 'center',
  },
});

export default styles;
