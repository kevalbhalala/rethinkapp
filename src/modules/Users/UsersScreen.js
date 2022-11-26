import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styles from './UsersStyle';

const UsersScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.headerParent}>
        <CustomHeader
          headerTitle={Strings.users}
          onPressBack={() => navigation.goBack()}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.ADDUSERREQ)}>
          <Feather
            name="user-plus"
            size={moderateScale(24)}
            color={Colors.blue}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
          <View>
            <Text style={styles.username}>{'Username'}</Text>
            <Text style={styles.usermail}>{'User Email'}</Text>
          </View>
          <Text style={styles.userType}>{'User type'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UsersScreen;
