import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings} from '../../constants';
import {Strings} from '../../constants/Strings';
import {Colors, moderateScale} from '../../theme';
import styling from './SignEndorseStyle';

const SignEndorseScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  const [buttonDisable, setButtonDisable] = useState(true);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.depositCheck}
        onPressBack={() => navigation.goBack()}
      />
      <Text style={styles.signEndorseCheck}>{Strings.signEndorseCheck}</Text>
      <View style={styles.imageParent}>
        <Image style={styles.imageStyle} />
      </View>
      <Text style={[styles.commonText, styles.signEndorseNOne]}>
        {Strings.signEndorseNOne}
      </Text>
      <Text style={styles.commonText}>{Strings.signEndorseNTwo}</Text>
      <View style={styles.continueParent}>
        <View style={styles.signEndorseNThreeParent}>
          <TouchableOpacity onPress={() => setButtonDisable(!buttonDisable)}>
            <MaterialCommunityIcons
              name={
                buttonDisable
                  ? 'checkbox-blank-circle-outline'
                  : 'check-circle-outline'
              }
              size={moderateScale(24)}
              color={Colors[theme]?.blue}
            />
          </TouchableOpacity>
          <Text style={styles.signEndorseNThree}>
            {Strings.signEndorseNThree}
          </Text>
        </View>
        <CustomButton
          theme={theme}
          buttonDisable={buttonDisable}
          buttonTitle={Strings.continue}
          buttonTitleStyle={styles.continue}
          buttonStyle={[
            styles.continueButtonStyle,
            buttonDisable && {backgroundColor: Colors[theme].blue50},
          ]}
          onBtnPress={() => {
            navigation.navigate(navigationStrings.DEPOSITCHECKNAME);
          }}
        />
      </View>
    </View>
  );
};

export default SignEndorseScreen;
