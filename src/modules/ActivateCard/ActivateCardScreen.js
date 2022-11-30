import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomButton, CustomHeader} from '../../components';
import {activateCardPoints, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styles from './ActivateCardStyle';

const ActivateCardScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader onPressBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <FontAwesome
          name={'credit-card'}
          color={Colors.black}
          size={moderateScale(72)}
        />
        <Text style={styles.activateCard}>{Strings?.activateCard}</Text>
        <Text style={styles.activateCardNote}>{Strings?.activateCardNote}</Text>
        <View style={styles.pointsParent}>
          {activateCardPoints?.map((value, index) => (
            <Text style={styles.point} key={index}>{`\u25CF   ${value}`}</Text>
          ))}
        </View>
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

export default ActivateCardScreen;
