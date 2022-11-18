import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader, MoveMoneyCard} from '../../components';
import {Strings} from '../../constants/Strings';
import {Colors, moderateScale} from '../../theme';
import styles from './PushFundStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PushFundScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.fundAccount}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.card}>
        <MoveMoneyCard
          title={Strings.pushFundAnotherBank}
          subTitle={Strings.depositBusinessDayOneTwo}
          icon={Icons.money}
          tagOne={Strings.forLargeDeposits}
          tagTwo={Strings.fast}
          tagOneTextStyle={styles.greyText}
          tagOneBackground={Colors.grey200}
          tagTwoTextStyle={styles.darkBlueText}
          tagTwoBackground={Colors.blue10050}
          rightIcon={false}
        />
        <View style={styles.divider} />
        <Text style={styles.descriptionTitle}>
          {Strings.greatOptionLargeDeposit}
        </Text>
        <Text style={styles.descriptionSubtitle}>
          {Strings.initiateTransferExternalBank}
        </Text>
        <View style={styles.divider} />
        <View style={styles.routingAccountNumberParent}>
          <View style={styles.routingNumberParent}>
            <Text style={styles.routingNumber}>
              {Strings.routingNumber?.toUpperCase()}
            </Text>
            <View style={styles.subTitleParent}>
              <Text style={styles.subTitle}>211370150</Text>
              <TouchableOpacity onPress={() => {}}>
                <MaterialCommunityIcons
                  name="content-copy"
                  size={moderateScale(16)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.accountNumberParent}>
            <Text style={styles.accountNumber}>
              {Strings.accountNumber?.toUpperCase()}
            </Text>
            <View style={styles.subTitleParent}>
              <Text style={styles.subTitle}>{Strings.view}</Text>
              <MaterialCommunityIcons
                name="information"
                size={moderateScale(16)}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PushFundScreen;
