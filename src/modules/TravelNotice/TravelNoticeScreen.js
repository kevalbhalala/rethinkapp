import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styles from './TravelNoticeStyle';

const TravelNoticeScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader onPressBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <FontAwesome
          name={'map-o'}
          color={Colors.black}
          size={moderateScale(72)}
        />
        <Text style={styles.changeCardPin}>{Strings?.useRethinkCardWorld}</Text>
        <Text style={styles.notes}>{Strings?.travelNoticeNOne}</Text>
        <Text style={styles.notes}>{Strings?.travelNoticeNTwo}</Text>
        <View style={styles.buttonParent}>
          <CustomButton
            buttonTitle={Strings.createTravelNotice}
            buttonStyle={styles.buttonStyle}
            onBtnPress={() =>
              navigation.navigate(navigationStrings.MAKETRAVELNOTICE)
            }
          />
        </View>
      </View>
    </View>
  );
};

export default TravelNoticeScreen;
