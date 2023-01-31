import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { Strings } from '../../../constants/Strings';
import { Colors, moderateScale, verticalScale } from '../../../theme';
import styling from './styles/BalancesCardStyle';

const BalancesCard = ({
  currencySymbol = '$',
  availableBalance,
  reserves,
  reservesHoldings,
  pending,
  overallBalance,
  monthName,
  moneyIn,
  moneyOut,
  theme,
}) => {
  const styles = styling(theme);

  const [isCardOpen, setIsCardOpen] = useState(false);
  // const accountInfo = useSelector(state => state?.user?.accountInfo)
  // console.log('---------userD', accountInfo?.balances)
  return (
    <View style={[styles.card, !isCardOpen && { height: verticalScale(150) }]}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerTitle}>{Strings.balances}</Text>
        <TouchableOpacity onPress={() => setIsCardOpen(!isCardOpen)}>
          <Icon
            name={isCardOpen ? 'chevron-up' : 'chevron-down'}
            size={moderateScale(36)}
            color={Colors[theme]?.black}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.balanceDetailParent}>
        <View style={styles.balanceDetail}>
          <View style={styles.availableParent}>
            <Text style={styles.availableBalance}>
              {Strings.availableBalance}
            </Text>
            <TouchableOpacity onPress={() => { }}>
              <Icon
                name="md-information-circle-outline"
                size={moderateScale(25)}
                color={Colors[theme]?.blue}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.balanceDetailText}>{Strings.reserves}</Text>
          <Text style={styles.balanceDetailText}>
            {Strings.reservesHoldings}
          </Text>
          <Text style={styles.balanceDetailText}>{Strings.pending}</Text>
        </View>
        <View style={styles.balanceDetailNumbers}>
          <Text style={styles.availableBalanceNumber}>{`${currencySymbol}${availableBalance ?? '0.00'
            }`}</Text>
          <Text style={styles.balanceDetailText}>{`+${currencySymbol}${reserves ?? '0.00'
            }`}</Text>
          <Text style={styles.balanceDetailText}>{`+${currencySymbol}${reservesHoldings ?? '0.00'
            }`}</Text>
          <Text style={styles.balanceDetailText}>{`-${currencySymbol}${pending ?? '0.00'
            }`}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.overallBalanceParent}>
        <Text style={styles.overallBalanceText}>{Strings.overallBalance}</Text>
        <Text style={styles.overallBalanceNumber}>{`${currencySymbol}${overallBalance ?? '0.00'
          }`}</Text>
      </View>
      <View style={styles.monthDetailParent}>
        <View style={styles.monthTextParent}>
          <Text style={styles.monthName}>{monthName ?? 'January'}</Text>
        </View>
        <View style={styles.monthDetailDivider} />
        <View style={styles.moneyInOutParent}>
          <View style={styles.moneyInParent}>
            <Text style={styles.moneyDetailText}>{Strings.moneyIn}</Text>
            <Text style={styles.moneyInNumber}>{`${currencySymbol}${moneyIn ?? '0.00'
              }`}</Text>
          </View>
          <View style={styles.moneyOutParent}>
            <Text style={styles.moneyDetailText}>{Strings.moneyOut}</Text>
            <Text style={styles.moneyOutNumber}>{`${currencySymbol}${moneyOut ?? '0.00'
              }`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BalancesCard;
