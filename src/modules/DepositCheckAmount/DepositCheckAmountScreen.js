import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings} from '../../constants';
import {Strings} from '../../constants/Strings';
import {Colors, horizontalScale, moderateScale} from '../../theme';
import styles from './DepositCheckAmountStyle';

const DepositCheckAmountScreen = ({navigation}) => {
  const [buttonDisable, setButtonDisable] = useState(true);

  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.depositCheck}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.card}>
        <Text style={styles.amount}>{Strings.amount?.toUpperCase()}</Text>
        <View style={styles.textInputParent}>
          <Text style={styles.textInput}>$</Text>
          <TextInput
            style={[styles.textInput, {width: horizontalScale(290)}]}
            keyboardType={'decimal-pad'}
            onChangeText={val => {
              if (val?.length > 0) {
                setButtonDisable(false);
              } else {
                setButtonDisable(true);
              }
            }}
          />
        </View>
        <View style={styles.expectedAvailabilityParent}>
          <Text style={styles.expectedAvailability}>
            {Strings.expectedAvailability}
          </Text>
          <MaterialCommunityIcons
            name={'information-outline'}
            size={moderateScale(26)}
            color={Colors.blue}
          />
        </View>
        <Text style={styles.date}>{'4:00 PM Nov 25, 2022'}</Text>
      </View>
      <View style={styles.continueParent}>
        <Text style={styles.depositCheckAmtNote}>
          {Strings.depositCheckAmtNote}
        </Text>
        <CustomButton
          buttonDisable={buttonDisable}
          buttonTitle={Strings.continue}
          buttonTitleStyle={styles.continue}
          buttonStyle={[
            styles.continueButtonStyle,
            buttonDisable && {backgroundColor: Colors.blue50},
          ]}
          onBtnPress={() => {
            navigation.navigate(navigationStrings.CAPTURECHECKNOTE);
          }}
        />
      </View>
    </View>
  );
};

export default DepositCheckAmountScreen;
