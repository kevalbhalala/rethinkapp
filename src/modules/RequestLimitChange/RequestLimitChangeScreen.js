import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Icons} from '../../assets';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styles from './RequestLimitChangeStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RequestLimitChangeScreen = ({navigation}) => {
  const route = useRoute();
  const from = route?.params?.from;

  const TitleCard = () => {
    if (from === 'bankTransferOnly') {
      return (
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderIconParent}>
            <Image source={Icons.money} style={styles.cardHeaderIcon} />
          </View>
          <View>
            <Text style={styles.cardTitle}>{Strings.bankTransferOnly}</Text>
            <Text style={styles.cardSubtitle}>{Strings.achPush}</Text>
          </View>
        </View>
      );
    } else if (from === 'mailedCheck') {
      return (
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderIconParent}>
            <Image source={Icons.money} style={styles.cardHeaderIcon} />
          </View>
          <View>
            <Text style={styles.cardTitle}>{Strings.mailedCheck}</Text>
            <Text style={styles.cardSubtitle}>{Strings.mailedCheckNote}</Text>
          </View>
        </View>
      );
    } else if (from === 'checkDeposit') {
      return (
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderIconParent}>
            <Image source={Icons.money} style={styles.cardHeaderIcon} />
          </View>
          <View>
            <Text style={styles.cardTitle}>{Strings.checkDeposit}</Text>
            <Text style={styles.cardSubtitle}>
              {Strings.depositCheckTakePhoto}
            </Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.screen}>
      <CustomHeader
        headerTitle={Strings.requestLimitChange}
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        {TitleCard()}
        <View style={styles.card}>
          <Text style={styles.whichLimit}>{Strings.whichLimit}</Text>
          <View style={styles.cardItemParent}>
            <View>
              <Text>{Strings.perTransfer}</Text>
              <Text>{`${Strings.currentLimit} :`}</Text>
            </View>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name={'checkbox-blank-circle-outline'}
                size={moderateScale(24)}
                color={Colors.blue}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItemParent}>
            <View>
              <Text>{Strings.perDay}</Text>
              <Text>{`${Strings.currentLimit} :`}</Text>
            </View>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name={'checkbox-blank-circle-outline'}
                size={moderateScale(24)}
                color={Colors.blue}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItemParent}>
            <View>
              <Text>{Strings.perMonth}</Text>
              <Text>{`${Strings.currentLimit} :`}</Text>
            </View>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name={'checkbox-blank-circle-outline'}
                size={moderateScale(24)}
                color={Colors.blue}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.whatLimit}>{Strings.whatLimit}</Text>
          <TextInput
            label={Strings.amount?.toUpperCase()}
            mode={'outlined'}
            style={styles.textInput}
            activeOutlineColor={Colors.grey500}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RequestLimitChangeScreen;
