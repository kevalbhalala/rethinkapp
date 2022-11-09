import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Icons} from '../../assets';
import styles from './CustomHeaderStyle';

const CustomHeader = ({
  backButton = true,
  headerTitle,
  headerTitleStyle,
  backBtnStyle,
  headerStyle,
  onPressBack,
}) => {
  return (
    <View style={[styles.defaultHeaderStyle, headerStyle]}>
      {backButton ? (
        <TouchableOpacity onPress={onPressBack}>
          <Image
            source={Icons.back}
            style={[styles.defaultBackBtnStyle, backBtnStyle]}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
      {headerTitle ? (
        <Text style={[styles.defaultHeaderTitleStyle, headerTitleStyle]}>
          {headerTitle}
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
};

export default CustomHeader;
