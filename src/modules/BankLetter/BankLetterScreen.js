import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './BankLetterStyle';

const BankLetterScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader theme={theme} onPressBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <Ionicons
          name={'newspaper'}
          size={moderateScale(100)}
          color={Colors[theme]?.black}
        />
        <Text style={styles.bankLetter}>{Strings.bankLetter}</Text>
        <Text style={styles.bankLetterNote}>{Strings.bankLetterNote}</Text>
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

export default BankLetterScreen;
