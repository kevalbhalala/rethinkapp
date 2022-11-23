import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import styles from './DepositCheckNameStyle';

const DepositCheckNameScreen = ({navigation}) => {
  const [isDisable, setIsDisable] = useState(true);

  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.depositCheck}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>{Strings.enterNamePayeeNote}</Text>
          <View style={styles.imageParent}>
            <Image />
          </View>
          <Text>{Strings.nameCheck?.toUpperCase()}</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={val => {
              if (val?.length > 0) {
                setIsDisable(false);
              } else {
                setIsDisable(true);
              }
            }}
          />
          <Text style={styles.checkAcceptNote}>{Strings.checkAcceptNote}</Text>
          <Text style={styles.accountName}>{'\u25CF Name'}</Text>
          <View style={styles.addupadateDbaParent}>
            <Text style={styles.addupadateDba}>{Strings.addUpdateDba}</Text>
          </View>
        </View>
      </View>
      <CustomButton
        buttonDisable={isDisable}
        buttonTitle={Strings.continue}
        buttonTitleStyle={styles.continue}
        buttonStyle={[
          styles.continueButtonStyle,
          isDisable && styles.disableButtonStyle,
        ]}
        onBtnPress={() => {
          navigation.navigate(navigationStrings.DEPOSITCHECKAMT);
        }}
      />
    </View>
  );
};

export default DepositCheckNameScreen;
