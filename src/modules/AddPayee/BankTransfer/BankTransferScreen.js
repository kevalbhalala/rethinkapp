import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Switch, TextInput} from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomButton, CustomHeader, ModalButton} from '../../../components';
import {Strings, type} from '../../../constants';
import {Colors, moderateScale} from '../../../theme';
import styles from './BankTransferStyle';

const BankTransferScreen = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isVisibleType, setIsVisibleType] = useState(false);
  const [selectedType, setSelectedType] = useState(false);
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.addPayee}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.titleParent}>
          <FontAwesomeIcon
            name={'bank'}
            size={moderateScale(22)}
            color={Colors.blue}
          />
          <Text style={styles.title}>{Strings.bankTransfer}</Text>
        </View>
        <View style={styles.card}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}
            enabled>
            <ScrollView
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}>
              <TextInput
                mode={'outlined'}
                label={Strings.legalName?.toUpperCase()}
                style={styles.textInput}
                activeOutlineColor={Colors.black}
              />
              <TextInput
                mode={'outlined'}
                label={Strings.nickname?.toUpperCase()}
                style={styles.textInput}
                activeOutlineColor={Colors.black}
              />
              <Text style={styles.onlyVisible}>{Strings.onlyVisible}</Text>
              <ModalButton
                buttonValue={selectedType ? selectedType : 'TYPE'}
                width={'100%'}
                onPressButton={() => setIsVisibleType(true)}
              />
              <TextInput
                mode={'outlined'}
                label={Strings.accountNumber?.toUpperCase()}
                style={styles.textInput}
                activeOutlineColor={Colors.black}
              />
              <TextInput
                mode={'outlined'}
                label={Strings.routingNumber?.toUpperCase()}
                style={styles.textInput}
                activeOutlineColor={Colors.black}
              />
              <View style={styles.checkingAccountParent}>
                <Text style={styles.checkingAccount}>
                  {Strings.checkingAccount}
                </Text>
                <Switch
                  value={isSwitchOn}
                  onValueChange={() => setIsSwitchOn(!isSwitchOn)}
                  color={Colors.blue}
                />
              </View>
              <TextInput
                mode={'outlined'}
                label={Strings.emailOptional?.toUpperCase()}
                style={styles.textInput}
                activeOutlineColor={Colors.black}
              />
              <TextInput
                multiline
                mode={'outlined'}
                label={Strings.notes}
                placeholder={Strings.notes}
                defaultValue={' '}
                style={[styles.textInput, styles.textInputMulti]}
                textAlignVertical={'top'}
                activeOutlineColor={Colors.black}
                maxLength={250}
              />
              <View style={styles.onlyVisibleParent}>
                <Text>{Strings.onlyVisible}</Text>
                <Text>0/250</Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
      <View style={styles.reviewButtonParent}>
        <CustomButton
          buttonTitle={Strings.review}
          buttonTitleStyle={styles.review}
          buttonStyle={styles.reviewButtonStyle}
        />
      </View>
      <Modal visible={isVisibleType} transparent>
        <SafeAreaView style={styles.modalParent}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{Strings.type}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.modalList}>
              {type?.map((item, index) => {
                const isSelected = item === selectedType;
                return (
                  <View key={index}>
                    <TouchableOpacity
                      style={styles.itemParent}
                      onPress={() => {
                        setSelectedType(item);
                        setIsVisibleType(false);
                      }}>
                      <Text
                        style={[
                          styles.modalItem,
                          isSelected && styles.selectedModalItem,
                        ]}>
                        {item}
                      </Text>
                      {isSelected ? (
                        <Icon
                          name="checkmark"
                          size={moderateScale(24)}
                          color={Colors.blue}
                        />
                      ) : (
                        <></>
                      )}
                    </TouchableOpacity>
                    <View style={styles.divider} />
                  </View>
                );
              })}
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default BankTransferScreen;
