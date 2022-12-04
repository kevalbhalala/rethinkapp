import {StyleSheet} from 'react-native';
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
      paddingHorizontal: horizontalScale(15),
    },
    searchPanel: {
      flexDirection: 'row',
      marginVertical: verticalScale(20),
    },
    searchBarParent: {
      flexDirection: 'row',
      height: verticalScale(45),
      width: horizontalScale(300),
      backgroundColor: Colors[theme].white,
      elevation: 5,
    },
    filterParent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchRightIcon: {
      flex: 0.15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchBar: {
      flex: 0.7,
      paddingLeft: horizontalScale(8),
    },
    searchLeftIcon: {
      flex: 0.15,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default styling;
