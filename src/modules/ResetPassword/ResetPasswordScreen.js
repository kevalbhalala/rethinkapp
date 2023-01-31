import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { CustomButton, CustomHeader } from '../../components';
import { Strings } from '../../constants';
import { Colors } from '../../theme';
import styling from './ResetPasswordStyle';

const ResetPasswordScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const resetPassword = Strings.resetPassword?.replace('?', '');
  const onPressHeaderBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={resetPassword}
        headerTitleStyle={styles.headerTitle}
        headerStyle={styles.header}
        onPressBack={onPressHeaderBack}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.emailQuestion}>{Strings.emailQuestion}</Text>
          <TextInput
            mode={'outlined'}
            label={Strings.email}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.black}
            value={email}
            onChangeText={(text) => {
              setEmailError('')
              setEmail(text)
            }}
          />
        </View>
        <View style={styles.ConfirmParent}>
          <CustomButton
            theme={theme}
            onBtnPress={() => { }}
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
