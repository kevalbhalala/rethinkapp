import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import { useDispatch, useSelector } from 'react-redux';
import { getTransaction } from '../../redux/actions/tansaction';
import { showLoader } from '../../redux/actions/user';
import { moderateScale } from '../../theme';
import { FilterModal } from './components';
import styling from './TransactionsStyle';

const TransactionsScreens = () => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false);
  const transaction = useSelector(state => state?.user?.transaction)
  console.log(transaction[0]?.data?.user_data)
  useEffect(() => {
    (async () => {
      await dispatch(showLoader(true))
      await dispatch(getTransaction())
      await dispatch(showLoader(false))
    })()
  }, [])


  return (
    <View style={styles.screen}>
      <View style={styles.searchPanel}>
        <View style={styles.searchBarParent}>
          <View style={styles.searchRightIcon}>
            <FontistoIcon name="search" size={moderateScale(18)} />
          </View>
          <View style={styles.searchBar}>
            <TextInput placeholder={'Search'} />
          </View>
          <View style={styles.searchLeftIcon}>
            <FontistoIcon name="mic" size={moderateScale(18)} />
          </View>
        </View>
        <View style={styles.filterParent}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <FeatherIcon name="filter" size={moderateScale(22)} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {transaction && transaction.length > 0 && transaction.map((item, index) => {
          return (
            <View style={{ width: '100%', elevation: 5, backgroundColor: 'white', borderRadius: 8, padding: 10 }}>
              <Text>Transaction to: {item?.data?.user_data?.source_account_name}</Text>
              <Text>Type: {item?.type}</Text>
              <Text>Transfer Money amount: $10,000</Text>
            </View>
          )
        })}
      </View>
      <FilterModal
        visible={modalVisible}
        onPressBack={() => setModalVisible(false)}
        theme={theme}
      />
    </View>
  );
};

export default TransactionsScreens;
