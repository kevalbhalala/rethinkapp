import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {verticalScale} from '../../theme';
import styling from './TransferLimitsStyle';

const TransferLimitsScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.transferLimits}
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderIconParent}>
              <Image source={Icons.money} style={styles.cardHeaderIcon} />
            </View>
            <View>
              <Text style={styles.cardTitle}>{Strings.bankTransferOnly}</Text>
              <Text style={styles.cardSubtitle}>{Strings.achPush}</Text>
            </View>
          </View>
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.perTransfer?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.perTransfer?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.perDay?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.perDay?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.perMonth?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.perMonth?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.transfersPerDay?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.transfersPerDay?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.transfersPerMonth?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.transfersPerMonth?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <CustomButton
            theme={theme}
            buttonTitle={Strings.requestLimitChange}
            buttonStyle={styles.buttonStyle}
            buttonTitleStyle={styles.buttonTitle}
            onBtnPress={() =>
              navigation.navigate(navigationStrings.REQLIMITCHANGE, {
                from: 'bankTransferOnly',
              })
            }
          />
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderIconParent}>
              <Image source={Icons.money} style={styles.cardHeaderIcon} />
            </View>
            <View>
              <Text style={styles.cardTitle}>{Strings.mailedCheck}</Text>
              <Text style={styles.cardSubtitle}>{Strings.mailedCheckNote}</Text>
            </View>
          </View>
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.perTransfer?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.perTransfer?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.perDay?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.perDay?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.perMonth?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.perMonth?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.transfersPerDay?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.transfersPerDay?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.transfersPerMonth?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.transfersPerMonth?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <CustomButton
            theme={theme}
            buttonTitle={Strings.requestLimitChange}
            buttonStyle={styles.buttonStyle}
            buttonTitleStyle={styles.buttonTitle}
            onBtnPress={() =>
              navigation.navigate(navigationStrings.REQLIMITCHANGE, {
                from: 'mailedCheck',
              })
            }
          />
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderIconParent}>
              <Image source={Icons.money} style={styles.cardHeaderIcon} />
            </View>
            <View>
              <Text style={styles.cardTitle}>{Strings.checkDeposit}</Text>
              <Text style={styles.cardSubtitle}>
                {Strings.depositCheckTakePhoto}
              </Text>
            </View>
          </View>
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.perCheck?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.perCheck?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.perDay?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.perDay?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.perMonth?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.perMonth?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <CustomButton
            theme={theme}
            buttonTitle={Strings.requestLimitChange}
            buttonStyle={styles.buttonStyle}
            buttonTitleStyle={styles.buttonTitle}
            onBtnPress={() =>
              navigation.navigate(navigationStrings.REQLIMITCHANGE, {
                from: 'checkDeposit',
              })
            }
          />
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderIconParent}>
              <Image source={Icons.money} style={styles.cardHeaderIcon} />
            </View>
            <View>
              <Text style={styles.cardTitle}>{Strings.tranferFundTo}</Text>
              <Text style={styles.cardSubtitle}>{Strings.achPullExternal}</Text>
            </View>
          </View>
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.perTransfer?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.perTransfer?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.perDay?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.perDay?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.perMonth?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.perMonth?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.transfersPerDay?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.transfersPerDay?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.transfersPerMonth?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.transfersPerMonth?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderIconParent}>
              <Image source={Icons.money} style={styles.cardHeaderIcon} />
            </View>
            <View>
              <Text style={styles.cardTitle}>{Strings.debitCard}</Text>
            </View>
          </View>
          <View style={styles.cardHeader}>
            <View style={[styles.cardHeaderIconParent, styles.customIconSize]}>
              <Image source={Icons.money} style={styles.cardHeaderIcon} />
            </View>
            <View>
              <Text style={styles.cardTitle}>{Strings.posWithdrawal}</Text>
            </View>
          </View>
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.perDay?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.perDay?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.transactionPerDay?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.transactionPerDay?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
        </View>

        <View style={[styles.card, {marginBottom: verticalScale(30)}]}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderIconParent}>
              <Image source={Icons.money} style={styles.cardHeaderIcon} />
            </View>
            <View>
              <Text style={styles.cardTitle}>{Strings.atmWithdrawal}</Text>
            </View>
          </View>
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {Strings.transactionPerDay?.toUpperCase()}
            </Text>
            <Text style={styles.amountText}>
              {Strings.transactionPerDay?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
        </View>
      </ScrollView>
    </View>
  );
};

export default TransferLimitsScreen;
