import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors} from '../../theme';
import styles from './EditHomeAddressStyle';

const EditHomeAddressScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.editHomeAddress}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{Strings.homeAddressQuestion}</Text>
          <TextInput
            label={Strings.homeAddress?.toUpperCase()}
            mode={'outlined'}
            style={styles.textInput}
            activeOutlineColor={Colors.grey500}
          />
          <TextInput
            label={Strings.unitSuite?.toUpperCase()}
            mode={'outlined'}
            style={styles.textInput}
            activeOutlineColor={Colors.grey500}
          />
          <View style={styles.cityParent}>
            <TextInput
              label={Strings.city?.toUpperCase()}
              mode={'outlined'}
              style={styles.textInputRows}
              activeOutlineColor={Colors.grey500}
            />
            <TextInput
              label={Strings.state?.toUpperCase()}
              mode={'outlined'}
              style={styles.textInputRows}
              activeOutlineColor={Colors.grey500}
            />
            <TextInput
              label={Strings.zip?.toUpperCase()}
              mode={'outlined'}
              style={styles.textInputRows}
              activeOutlineColor={Colors.grey500}
            />
          </View>
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

export default EditHomeAddressScreen;
