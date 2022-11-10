import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors} from '../../theme';
import styles from './ResetPasswordStyle';

const ResetPasswordScreen = () => {
  const resetPassword = Strings.resetPassword?.replace('?', '');
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={resetPassword}
        headerTitleStyle={styles.headerTitle}
        headerStyle={styles.header}
        onPressBack={() => {}}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.emailQuestion}>{Strings.emailQuestion}</Text>
          <TextInput
            mode={'outlined'}
            label={Strings.email}
            style={styles.textInput}
            activeOutlineColor={Colors.black}
          />
        </View>
        <View style={styles.ConfirmParent}>
          <CustomButton
            onBtnPress={() => {}}
            buttonTitle={Strings.confirm}
            buttonStyle={styles.confirmBtn}
            buttonTitleStyle={styles.confirmText}
          />
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;
