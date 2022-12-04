import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, moderateScale, verticalScale} from '../../theme';
import styling from './ChangePasswordStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import {useRoute} from '@react-navigation/native';

const ChangePasswordScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.addUserReq}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
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

          <TextInput
            secureTextEntry={!newPasswordVisible}
            mode={'outlined'}
            label={Strings.newPassword?.toUpperCase()}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.black}
            right={
              newPasswordVisible ? (
                <TextInput.Icon
                  name={'eye-off'}
                  onPress={() => setNewPasswordVisible(!newPasswordVisible)}
                />
              ) : (
                <TextInput.Icon
                  name={'eye'}
                  onPress={() => setNewPasswordVisible(!newPasswordVisible)}
                />
              )
            }
          />

          <View style={styles.passwordInstructionParent}>
            <Entypo
              name={'check'}
              size={moderateScale(22)}
              color={Colors[theme]?.grey500}
            />
            <Text style={styles.passwordInstruction}>{Strings.mustLetter}</Text>
          </View>
          <View style={styles.passwordInstructionParent}>
            <Entypo
              name={'check'}
              size={moderateScale(22)}
              color={Colors[theme]?.grey500}
            />
            <Text style={styles.passwordInstruction}>{Strings.mustNumber}</Text>
          </View>
          <View style={styles.passwordInstructionParent}>
            <Entypo
              name={'check'}
              size={moderateScale(22)}
              color={Colors[theme]?.grey500}
            />
            <Text style={styles.passwordInstruction}>
              {Strings.mustSpecial}
            </Text>
          </View>

          <View style={styles.passwordInstructionParent}>
            <Entypo
              name={'check'}
              size={moderateScale(22)}
              color={Colors[theme]?.grey500}
            />
            <Text style={styles.passwordInstruction}>
              {Strings.mustBeCharaters}
            </Text>
          </View>
          <TextInput
            secureTextEntry={!confirmPasswordVisible}
            mode={'outlined'}
            label={Strings.confirmNewPass?.toUpperCase()}
            style={[styles.textInput, {marginTop: verticalScale(12)}]}
            activeOutlineColor={Colors[theme]?.black}
            right={
              confirmPasswordVisible ? (
                <TextInput.Icon
                  name={'eye-off'}
                  onPress={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                />
              ) : (
                <TextInput.Icon
                  name={'eye'}
                  onPress={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                />
              )
            }
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.continue}
          buttonStyle={styles.continueButton}
        />
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
