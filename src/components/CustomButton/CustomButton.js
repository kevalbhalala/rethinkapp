import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './CustomButtonStyle';

const CustomButton = ({
  buttonStyle,
  buttonTitleStyle,
  buttonTitle,
  onBtnPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.defaultButtonStyle, buttonStyle]}
      onPress={onBtnPress}>
      <Text style={[styles.defaultTextStyle, buttonTitleStyle]}>
        {buttonTitle ?? 'Press Here'}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
