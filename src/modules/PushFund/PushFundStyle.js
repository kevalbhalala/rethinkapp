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
    screen: {
      flex: 1,
      backgroundColor: Colors[theme]?.screenBackground,
    },
    card: {
      backgroundColor: Colors[theme].white,
      paddingHorizontal: horizontalScale(18),
      borderRadius: moderateScale(18),
      marginTop: verticalScale(20),
      marginHorizontal: horizontalScale(15),
    },
    divider: {
      backgroundColor: Colors[theme].grey300,
      width: '100%',
      height: verticalScale(2),
    },
    darkGreenText: {
      color: Colors[theme].green900,
    },
    darkBlueText: {
      color: Colors[theme].blue900,
    },
    descriptionTitle: {
      color: Colors[theme].black,
      marginVertical: verticalScale(10),
      fontSize: moderateScale(16),
      fontFamily: Fonts.regular,
    },
    descriptionSubtitle: {
      fontSize: moderateScale(16),
      marginBottom: verticalScale(18),
      fontFamily: Fonts.regular,
    },
    routingAccountNumberParent: {
      flexDirection: 'row',
      backgroundColor: Colors[theme].white,
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
      fontFamily: Fonts.regular,
    },
    routingNumber: {
      fontFamily: Fonts.regular,
    },
    accountNumber: {
      fontFamily: Fonts.regular,
    },
  });

export default styling;
