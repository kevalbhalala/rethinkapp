import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styles from './RethinkCardStyle';

const RethinkCardScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.rethinkCard}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.cardT}>{Strings.virtualCard?.toUpperCase()}</Text>
        <TouchableOpacity style={styles.card}>
          <View style={styles.innerView}>
            <FontAwesome
              name={'credit-card'}
              color={Colors.black}
              size={moderateScale(24)}
            />
            <Text style={styles.cardTitle}>{Strings.virtualCard}</Text>
          </View>
          <FontAwesome
            name={'angle-right'}
            color={Colors.grey500}
            size={moderateScale(24)}
          />
        </TouchableOpacity>
        <Text style={styles.cardT}>{Strings.physicalCard?.toUpperCase()}</Text>
        <TouchableOpacity style={styles.card}>
          <View style={styles.innerView}>
            <FontAwesome
              name={'credit-card'}
              color={Colors.black}
              size={moderateScale(24)}
            />
            <Text style={styles.cardTitle}>{Strings.rethinkCard}</Text>
          </View>
          <FontAwesome
            name={'angle-right'}
            color={Colors.grey500}
            size={moderateScale(24)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RethinkCardScreen;
