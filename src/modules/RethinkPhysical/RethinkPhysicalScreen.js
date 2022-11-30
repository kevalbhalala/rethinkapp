import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomHeader} from '../../components';
import {navigationStrings} from '../../constants';
import {manageRethinkCard, Strings} from '../../constants/Strings';
import {Colors, moderateScale} from '../../theme';
import styles from './RethinkPhysicalStyle';

const RethinkPhysicalScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.rethinkCard}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.manageDebitCard}>
          {Strings.manageDebitCard?.toUpperCase()}
        </Text>
        <View style={styles.card}>
          {manageRethinkCard?.map((value, index) => {
            const onPress = () => {
              if (value === 'Activate your Rethink Card') {
                navigation.navigate(navigationStrings.ACTIVATECARD);
              } else if (value === 'Change PIN') {
                navigation.navigate(navigationStrings.CHANGEPIN);
              } else if (value === 'Travel Notice') {
                navigation.navigate(navigationStrings.TRAVELNOTICE);
              }
            };
            return (
              <View key={index}>
                <TouchableOpacity style={styles.cardItem} onPress={onPress}>
                  <Text style={styles.cardItemName}>{value}</Text>
                  <FontAwesome
                    name={'angle-right'}
                    color={Colors.grey500}
                    size={moderateScale(24)}
                  />
                </TouchableOpacity>
                {index !== manageRethinkCard?.length - 1 ? (
                  <View style={styles.divider} />
                ) : (
                  <></>
                )}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default RethinkPhysicalScreen;
