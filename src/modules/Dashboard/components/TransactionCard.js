import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ContentLoader} from '../../../components';
import {Strings} from '../../../constants/Strings';
import {Colors, moderateScale, verticalScale} from '../../../theme';
import styling from './styles/TransactionCardStyle';

const TransactionCard = ({title, noTrasaction, transactionData, theme}) => {
  const styles = styling(theme);

  return (
    <View style={[styles.card, noTrasaction && {height: verticalScale(265)}]}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerTitle}>
          {noTrasaction ? Strings.noTransaction : title}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Icon
            name={'chevron-right'}
            size={moderateScale(36)}
            color={Colors[theme]?.black}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      {noTrasaction ? (
        <>
          <ContentLoader />
          <ContentLoader />
          <ContentLoader />
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

export default TransactionCard;
