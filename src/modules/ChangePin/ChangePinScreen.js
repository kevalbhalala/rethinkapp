import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styles from './ChangePinStyle';

const ChangePinScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader onPressBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <FontAwesome
          name={'credit-card'}
          color={Colors.black}
          size={moderateScale(72)}
        />
        <Text style={styles.changeCardPin}>{Strings?.changeCardPin}</Text>
        <Text style={styles.changeCardPinNote}>
          {Strings?.changeCardPinNote}
        </Text>
        <View style={styles.buttonParent}>
          <CustomButton
            buttonTitle={Strings.makeCall}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default ChangePinScreen;
