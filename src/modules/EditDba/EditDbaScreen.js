import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors} from '../../theme';
import styles from './EditDbaStyle';

const EditDbaScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.editDba}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{Strings.dbaQuestion}</Text>
          <TextInput
            label={Strings.dba?.toUpperCase()}
            mode={'outlined'}
            style={styles.textInput}
            activeOutlineColor={Colors.grey500}
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

export default EditDbaScreen;
