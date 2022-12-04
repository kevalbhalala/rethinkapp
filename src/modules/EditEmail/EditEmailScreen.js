import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import styling from './EditEmailStyle';

const EditEmailScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
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
          theme={theme}
          buttonTitle={Strings.sendEmail}
          buttonStyle={styles.sendEmailButton}
        />
      </View>
    </View>
  );
};

export default EditEmailScreen;
