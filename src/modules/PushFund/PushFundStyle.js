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
  card: {
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(18),
    borderRadius: moderateScale(18),
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(15),
  },
  divider: {
    backgroundColor: Colors.grey300,
    width: '100%',
    height: verticalScale(2),
  },
  darkGreenText: {
    color: Colors.green900,
  },
  darkBlueText: {
    color: Colors.blue900,
  },
  descriptionTitle: {
    color: Colors.black,
    marginVertical: verticalScale(10),
    fontSize: moderateScale(16),
  },
  descriptionSubtitle: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(18),
  },
  routingAccountNumberParent: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginVertical: verticalScale(10),
    marginBottom: verticalScale(20),
  },
  routingNumberParent: {
    flex: 0.5,
  },
  accountNumberParent: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  subTitleParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(4),
  },
  subTitle: {
    marginRight: horizontalScale(4),
  },
});

export default styles;
