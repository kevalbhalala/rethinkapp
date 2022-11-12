import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, moderateScale} from '../../theme';
import styles from './ModalButtonStyle';

const ModalButton = ({
  buttonLable,
  buttonValue,
  onPressButton,
  height,
  width,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      style={{height, width, marginTop, marginBottom, marginRight, marginLeft}}>
      <TextInput
        disabled
        mode={'outlined'}
        label={buttonLable}
        value={buttonValue}
        style={[styles.buttonBackground, {height, width}]}
      />
      <View style={styles.dropdownParent}>
        <Icon
          name={'chevron-down'}
          size={moderateScale(26)}
          color={Colors.grey400}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ModalButton;
