import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './RethinkCardStyle';

const RethinkCardScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.rethinkCard}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.cardT}>{Strings.virtualCard?.toUpperCase()}</Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(navigationStrings?.VIRTAULCARD)}>
          <View style={styles.innerView}>
            <FontAwesome
              name={'credit-card'}
              color={Colors[theme]?.black}
              size={moderateScale(24)}
            />
            <Text style={styles.cardTitle}>{Strings.virtualCard}</Text>
          </View>
          <FontAwesome
            name={'angle-right'}
            color={Colors[theme]?.grey500}
            size={moderateScale(24)}
          />
        </TouchableOpacity>
        <Text style={styles.cardT}>{Strings.physicalCard?.toUpperCase()}</Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate(navigationStrings.RETHINKPHYSICAL)
          }>
          <View style={styles.innerView}>
            <FontAwesome
              name={'credit-card'}
              color={Colors[theme]?.black}
              size={moderateScale(24)}
            />
            <Text style={styles.cardTitle}>{Strings.rethinkCard}</Text>
          </View>
          <FontAwesome
            name={'angle-right'}
            color={Colors[theme]?.grey500}
            size={moderateScale(24)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RethinkCardScreen;
