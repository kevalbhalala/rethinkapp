import {StyleSheet} from 'react-native';
import Colors from './Colors';

const styling = theme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors[theme].white,
    },
    activityHeaderStyle: {
      backgroundColor:
        theme === 'light' ? Colors[theme].grey300 : Colors[theme].white,
    },
    activityTabLable: {
      color: Colors[theme].black,
    },
  });

export default styling;
