import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Icons } from '../../assets';
import { CustomHeader } from '../../components';
import { navigationStrings, Strings } from '../../constants';
import { getCard } from '../../redux/actions/card';
import { showLoader } from '../../redux/actions/user';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import styling from './VirtualCardStyle';

const VirtualCardScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const dispatch = useDispatch()
  const card = useSelector(state => state?.user?.getCard)
  console.log('-----card', card)
  useEffect(() => {
    (async () => {
      await dispatch(showLoader(true))
      await dispatch(getCard())
      await dispatch(showLoader(false))
    })();
  }, [])
  return (
    <View style={styles.screen}>
      <View style={styles.headerParent}>
        <CustomHeader
          theme={theme}
          headerTitle={Strings.virtualCard}
          onPressBack={() => navigation.goBack()}
        />
        <MaterialCommunityIcons
          name={'information-outline'}
          size={moderateScale(26)}
          color={Colors[theme]?.blue}
        />
      </View>
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0.5, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#FFBF00', '#FBCEB1']}
          style={styles.virtualCard}>
          <View style={styles.leftSide}>
            <Image source={Icons.appLogo} style={styles.appLogo} />
            <Text style={styles.cardNumber}>{`**** **** **** ${card?.[0]?.last_four}`}</Text>
            <Text style={styles.cardName}>{`User Name : ${card?.[0]?.emboss_name?.line_1}`}</Text>
          </View>
          <View style={styles.rightSide}>
            <View style={styles.cardStateParent}>
              <Text style={styles.cardState}>
                {Strings.active?.toUpperCase()}
              </Text>
            </View>
            <Text style={styles.cardType}>{Strings.debit}</Text>
            <Image source={Icons.masterCard} style={styles.masterCard} />
          </View>
        </LinearGradient>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.card, { flex: 0.48 }]}>
            <Fontisto
              name="mastercard"
              color={Colors[theme]?.blue}
              size={moderateScale(20)}
            />
            <Text style={styles.freezCard}>{Strings.freezCard}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, { flex: 0.48 }]}>
            <Fontisto
              name="mastercard"
              color={Colors[theme]?.blue}
              size={moderateScale(20)}
            />
            <Text
              style={styles.cardDetails}
              onPress={() =>
                navigation.navigate(navigationStrings.CONFIRMPASSWORD)
              }>
              {Strings.cardDetails}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.card,
            {
              marginTop: verticalScale(15),
              justifyContent: 'space-between',
              paddingHorizontal: horizontalScale(15),
            },
          ]}>
          <Text style={styles.addFundsCard}>{Strings.addFundsCard}</Text>
          <Feather name={'chevron-right'} size={moderateScale(20)} />
        </TouchableOpacity>
        <View style={styles.noTransaction}>
          <Text style={styles.noVirtualCardTransaction}>
            {Strings.noVirtualCardTransaction}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VirtualCardScreen;
