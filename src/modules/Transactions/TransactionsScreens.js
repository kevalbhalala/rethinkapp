import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {moderateScale} from '../../theme';
import {FilterModal} from './components';
import styling from './TransactionsStyle';

const TransactionsScreens = () => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  const [modalVisible, setModalVisible] = useState(false);
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
      <FilterModal
        visible={modalVisible}
        onPressBack={() => setModalVisible(false)}
        theme={theme}
      />
    </View>
  );
};

export default TransactionsScreens;
