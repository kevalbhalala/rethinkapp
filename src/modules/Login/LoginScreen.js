import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors, isIos} from '../../theme';
import styles from './LoginStyle';

const LoginScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onPressHeaderback = () => {
    navigation.goBack();
  };

  const onPressResetPassword = () => {
    navigation.navigate(navigationStrings.RESETPASSWORD);
  };

  return (
    <KeyboardAvoidingView
      behavior={isIos ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={styles.screen}>
        <CustomHeader onPressBack={onPressHeaderback} />
        <View style={styles.container}>
          <View style={styles.applogoParent}>
            <Image source={Icons.appLogo} style={styles.appLogo} />
          </View>
          <TextInput
            mode={'outlined'}
            label={Strings.email}
            style={styles.textInput}
            activeOutlineColor={Colors.black}
          />
          <TextInput
            secureTextEntry={!passwordVisible}
            mode={'outlined'}
            label={Strings.password}
            style={styles.textInput}
            activeOutlineColor={Colors.black}
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
          <CustomButton
            onBtnPress={() => {}}
            buttonTitle={Strings.login}
            buttonStyle={styles.loginBtn}
            buttonTitleStyle={styles.loginText}
          />
          <TouchableOpacity onPress={onPressResetPassword}>
            <Text style={styles.resetPassword}>{Strings.resetPassword}</Text>
          </TouchableOpacity>
          <View style={styles.applyNowParent}>
            <Text style={styles.newToRethink}>{Strings.newToRethink}</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.applyNow}>
                {Strings.applyNow?.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
