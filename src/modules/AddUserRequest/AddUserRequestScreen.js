import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, verticalScale} from '../../theme';
import styles from './AddUserRequestStyle';

const AddUserRequestScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.addUserReq}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{Strings.userReqNote}</Text>
          <TextInput
            label={Strings.name?.toUpperCase()}
            mode={'outlined'}
            style={styles.textInput}
            activeOutlineColor={Colors.grey500}
          />
          <TextInput
            label={Strings.email?.toUpperCase()}
            mode={'outlined'}
            style={[styles.textInput, {marginBottom: verticalScale(10)}]}
            activeOutlineColor={Colors.grey500}
          />
          <Text style={styles.useToCommunicate}>
            {Strings.useToCommunicate}
          </Text>
          <TextInput
            label={Strings.relationBusiness?.toUpperCase()}
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

export default AddUserRequestScreen;
