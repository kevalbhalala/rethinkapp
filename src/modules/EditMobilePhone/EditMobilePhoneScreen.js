import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors} from '../../theme';
import styles from './EditMobilePhoneStyle';

const EditMobilePhoneScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.editMobilePhone}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{Strings.editPhoneQuestion}</Text>
          <TextInput
            label={Strings.editMobilePhone?.toUpperCase()}
            mode={'outlined'}
            style={styles.textInput}
            activeOutlineColor={Colors.grey500}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.editEmailNote}>{Strings.editMobilePhoneNote}</Text>
        <CustomButton
          buttonTitle={Strings.submit}
          buttonStyle={styles.submitButton}
        />
      </View>
    </View>
  );
};

export default EditMobilePhoneScreen;
