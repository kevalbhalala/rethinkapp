import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Modal, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './ScanIdStyles';

const ScanIdScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  const [isFlashOn, setIsFlashOn] = useState(false);
  const [exitModal, setExitModal] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.headerParent}>
        <CustomHeader
          theme={theme}
          headerTitle={Strings.scanId}
          headerTitleStyle={styles.headerTitle}
          backBtnStyle={styles.backBtnStyle}
          onPressBack={() => setExitModal(true)}
        />
        <TouchableOpacity
          onPress={() => {
            setIsFlashOn(!isFlashOn);
          }}>
          <Ionicons
            name={isFlashOn ? 'flash-off-outline' : 'md-flash-outline'}
            color={Colors[theme]?.white}
            size={moderateScale(26)}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.suggestionParent}>
          <Text style={styles.suggestionText}>{Strings.alignDocument}</Text>
          <View style={styles.triAngle} />
        </View>
        <View style={styles.frame} />
      </View>
      <Modal visible={exitModal} transparent>
        <SafeAreaView style={styles.modalParent}>
          <View style={styles.modalCard}>
            <View style={styles.cardTitleParent}>
              <Text style={styles.cardTitle}>{Strings.cancelCapture}</Text>
            </View>
            <View style={styles.cardSubtitleParent}>
              <Text style={styles.exitNote}>{Strings.exitNote}</Text>
            </View>
            <View style={styles.cardButtonsParent}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setExitModal(false);
                  navigation.goBack();
                }}>
                <Text style={styles.modalButtonText}>
                  {Strings.positiveNote}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setExitModal(false);
                }}>
                <Text style={styles.modalButtonText}>
                  {Strings.nagativeNote}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default ScanIdScreen;
