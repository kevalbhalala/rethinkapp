import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: verticalScale(150),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    paddingLeft: horizontalScale(15),
    overflow: 'hidden',
    marginVertical: verticalScale(10),
  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'row',
  },
  cardDetailParent: {
    flex: 0.7,
  },
  cardLogoParent: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLogo: {
    height: moderateScale(72),
    width: moderateScale(72),
  },
  cardTitleParent: {
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  cardTitle: {
    fontSize: moderateScale(18),
    color: Colors.black,
    fontWeight: '700',
  },
  cardSubTitleParent: {
    flex: 0.45,
  },
  cardSubTitle: {
    fontSize: moderateScale(14),
    color: Colors.black,
  },
  navigateTextParent: {
    flex: 0.25,
  },
  navigateButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  navigateText: {
    fontSize: moderateScale(14),
    color: Colors.black,
    fontWeight: '600',
  },
});

export default styles;
