import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors} from '../../theme';
import styling from './ConfirmPasswordStyle';

const ConfirmPasswordScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.screen}>
      <CustomHeader theme={theme} onPressBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.emailQuestion}>
            {Strings.confirmPasswordNote}
          </Text>
          <TextInput
            secureTextEntry={!passwordVisible}
            mode={'outlined'}
            label={Strings.password}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.black}
            right={
              passwordVisible ? (
                <TextInput.Icon
                  name={'eye-off'}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              ) : (
                <TextInput.Icon
                  name={'eye'}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              )
            }
          />
        </View>
        <View style={styles.ConfirmParent}>
          <CustomButton
            theme={theme}
            onBtnPress={() => {
              navigation.navigate(navigationStrings.VIRTAULCARDDETAIL);
            }}
            buttonTitle={Strings.confirm}
            buttonStyle={styles.confirmBtn}
            buttonTitleStyle={styles.confirmText}
          />
          <Text
            style={styles.resetPassword}
            onPress={() =>
              navigation.navigate(navigationStrings.RESETPASSWORD)
            }>
            {Strings.resetPassword}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ConfirmPasswordScreen;
