import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, moderateScale, verticalScale} from '../../theme';
import styles from './ChangePasswordStyle';
import Entypo from 'react-native-vector-icons/Entypo';

const ChangePasswordScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <View style={styles.screen}>
      <CustomHeader
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

          <TextInput
            secureTextEntry={!newPasswordVisible}
            mode={'outlined'}
            label={Strings.newPassword?.toUpperCase()}
            style={styles.textInput}
            activeOutlineColor={Colors.black}
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
              color={Colors.grey500}
            />
            <Text style={styles.passwordInstruction}>{Strings.mustLetter}</Text>
          </View>
          <View style={styles.passwordInstructionParent}>
            <Entypo
              name={'check'}
              size={moderateScale(22)}
              color={Colors.grey500}
            />
            <Text style={styles.passwordInstruction}>{Strings.mustNumber}</Text>
          </View>
          <View style={styles.passwordInstructionParent}>
            <Entypo
              name={'check'}
              size={moderateScale(22)}
              color={Colors.grey500}
            />
            <Text style={styles.passwordInstruction}>
              {Strings.mustSpecial}
            </Text>
          </View>

          <View style={styles.passwordInstructionParent}>
            <Entypo
              name={'check'}
              size={moderateScale(22)}
              color={Colors.grey500}
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
            activeOutlineColor={Colors.black}
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
          buttonTitle={Strings.continue}
          buttonStyle={styles.continueButton}
        />
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
