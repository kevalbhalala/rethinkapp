import React from 'react';
import {Text, View} from 'react-native';
import {CustomButton} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import styles from './IntroStyle';

const IntroScreen = ({navigation}) => {
  const onPressAlreadyAccount = () => {
    navigation.navigate(navigationStrings.LOGIN);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.titleParent}>
        <Text style={styles.title}>{Strings.introTitle}</Text>
      </View>
      <View style={styles.subTitleParent}>
        <Text style={styles.subTitle}>{Strings.introSubtitle}</Text>
      </View>
      <View style={styles.applyButtonParent}>
        <CustomButton
          onBtnPress={() => {}}
          buttonTitle={Strings.applyNow}
          buttonStyle={styles.applyBtn}
          buttonTitleStyle={styles.applyText}
        />
        <CustomButton
          onBtnPress={() => {}}
          buttonTitle={Strings.completeApplication}
          buttonStyle={styles.completeApplicationBtn}
          buttonTitleStyle={styles.completeApplicationText}
        />
      </View>
      <View style={styles.dividerParent}>
        <View style={styles.line} />
        <View style={styles.orParent}>
          <Text style={styles.or}>OR</Text>
        </View>
        <View style={styles.line} />
      </View>
      <CustomButton
        onBtnPress={onPressAlreadyAccount}
        buttonTitle={Strings.alreadyAccount}
        buttonStyle={styles.alreadyAccountBtn}
        buttonTitleStyle={styles.alreadyAccountText}
      />
      <View style={styles.introNoteParent}>
        <Text style={styles.introNote}>{Strings.introNote}</Text>
      </View>
    </View>
  );
};

export default IntroScreen;
