import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styling = theme =>
  StyleSheet.create({
    card: {
      height: verticalScale(125),
      flexDirection: 'row',
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(20),
      marginVertical: verticalScale(10),
    },
    container: {
      flex: 1,
    },
    top: {
      flex: 0.7,
      flexDirection: 'row',
      overflow: 'hidden',
    },
    bottom: {
      flex: 0.3,
      flexDirection: 'row',
      paddingLeft: horizontalScale(10),
    },
    leftParent: {
      flex: 0.2,
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: verticalScale(20),
    },
    icon: {
      height: moderateScale(35),
      width: moderateScale(35),
    },
    detailParent: {
      height: '100%',
      flex: 0.8,
      paddingTop: verticalScale(15),
    },
    title: {
      color: Colors[theme].black,
      fontSize: moderateScale(18),
      fontFamily: Fonts.bold,
    },
    subTitle: {
      color: Colors[theme].grey500,
      fontFamily: Fonts.regular,
    },
    tagParent: {
      height: verticalScale(20),
      backgroundColor: Colors[theme].black50,
      paddingHorizontal: horizontalScale(8),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: moderateScale(4),
      marginHorizontal: horizontalScale(4),
    },
    tagOne: {
      fontFamily: Fonts.regular,
    },
    tagTwo: {
      fontFamily: Fonts.regular,
    },
    rightParent: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '10%',
      right: 0,
      zIndex: 1,
    },
  });

export default styling;
