import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomHeader} from '../../components';
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
            return (
              <View key={index}>
                <TouchableOpacity style={styles.cardItem}>
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
