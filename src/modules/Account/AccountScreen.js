import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {navigationStrings, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './AccountStyle';

const AccountScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons
            name={'share-outline'}
            color={Colors[theme]?.black}
            size={moderateScale(28)}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.usernameParent}>
        <Text style={styles.usernameT}>{'USERNAME'}</Text>
        <Text style={styles.usernameS}>{'Username'}</Text>
      </View>
      <View style={styles.routingAccountNumberParent}>
        <View style={styles.routingNumberParent}>
          <Text style={styles.routingNumber}>
            {Strings.routingNumber?.toUpperCase()}
          </Text>
          <View style={styles.subTitleParent}>
            <Text style={styles.subTitle}>211370150</Text>
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons
                name="content-copy"
                size={moderateScale(16)}
                color={Colors[theme]?.grey700}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.accountNumberParent}>
          <Text style={styles.accountNumber}>
            {Strings.accountNumber?.toUpperCase()}
          </Text>
          <View style={styles.subTitleParent}>
            <MaterialCommunityIcons
              name="information"
              size={moderateScale(16)}
              color={Colors[theme]?.grey700}
            />
            <Text style={styles.subTitle}>{Strings.view}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardParent}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(navigationStrings.RETHINKCARD)}>
          <FontAwesome
            name={'credit-card'}
            color={Colors[theme]?.black}
            size={moderateScale(72)}
          />
          <Text style={styles.cardTitle}>{Strings.rethinkCard}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(navigationStrings.STATEMENTS)}>
          <Ionicons
            name={'file-tray-full-sharp'}
            color={Colors[theme]?.black}
            size={moderateScale(72)}
          />
          <Text style={styles.cardTitle}>{Strings.statement}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardParent}>
        <TouchableOpacity style={styles.card}>
          <Ionicons
            name={'settings-outline'}
            color={Colors[theme]?.black}
            size={moderateScale(72)}
          />
          <Text style={styles.cardTitle}>{Strings.settings}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons
            name={'information-circle-outline'}
            color={Colors[theme]?.black}
            size={moderateScale(72)}
          />
          <Text style={styles.cardTitle}>{Strings.support}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.referParent}
        onPress={() => navigation.navigate(navigationStrings.REFERRALS)}>
        <Text
          style={styles.referBusiness}>{`${Strings.referBusiness} $40`}</Text>
        <FontAwesome
          name={'angle-right'}
          color={Colors[theme]?.grey500}
          size={moderateScale(24)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;
