import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './AddPayeeStyle';

const AddPayeeScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.addPayee}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.choosePayMethod}>
          {Strings.choosePayMethod?.toUpperCase()}
        </Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(navigationStrings.BANKTRANSFER)}>
          <View style={styles.leftParent}>
            <FontAwesomeIcon
              name={'bank'}
              size={moderateScale(26)}
              color={Colors[theme]?.blue}
            />
          </View>
          <View style={styles.detailParent}>
            <Text style={styles.detailText}>{Strings.bankTransfer}</Text>
          </View>
          <View style={styles.rightParent}>
            <FeatherIcon name={'chevron-right'} size={moderateScale(18)} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(navigationStrings.PAPERCHECK)}>
          <View style={styles.leftParent}>
            <Fontisto
              name={'email'}
              size={moderateScale(26)}
              color={Colors[theme]?.blue}
            />
          </View>
          <View style={styles.detailParent}>
            <Text style={styles.detailText}>{Strings.paperCheck}</Text>
          </View>
          <View style={styles.rightParent}>
            <FeatherIcon name={'chevron-right'} size={moderateScale(18)} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPayeeScreen;
