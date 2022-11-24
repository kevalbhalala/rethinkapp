import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import styles from './EditEmailStyle';

const EditEmailScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.editEmail}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{Strings.emailQuestion}</Text>
          <TextInput style={styles.textInput} />
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.editEmailNote}>{Strings.editEmailNote}</Text>
        <CustomButton
          buttonTitle={Strings.sendEmail}
          buttonStyle={styles.sendEmailButton}
        />
      </View>
    </View>
  );
};

export default EditEmailScreen;
