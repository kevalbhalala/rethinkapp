import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CustomHeader } from '../../components';
import { navigationStrings } from '../../constants';
import { manageRethinkCard, Strings } from '../../constants/Strings';
import { Colors, moderateScale } from '../../theme';
import styling from './RethinkPhysicalStyle';
import * as constants from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { getProductCard } from '../../redux/actions/card';

const RethinkPhysicalScreen = ({ navigation }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  const [cardProductId, setCardProductId] = useState('')

  useEffect(() => {
    (async () => {
      let cardProducts = await dispatch(getProductCard)
      setCardProductId(cardProducts?.[0]?.id)
    })();
  }, [])


  const issueCard = () => {
    let body = {
      form: "PHYSICAL",
      account_id: constants.checking_account_id,
      card_brand: "MASTERCARD",
      card_product_id: "3744390e-a5a9-42cb-b0ca-d3050cfcec87",
      customer_id: "{{person_id}}",
      emboss_name: {
        line_1: "Al Charleson"
      },
      shipping: {
        address: {
          address_line_1: "0171 Kertzmann Drive",
          address_line_2: "Apt. 637",
          city: "Nealshire",
          country_code: "SE",
          postal_code: "49633",
          state: "NC"
        },
        is_expedited_fulfillment: false,
        method: "LOCAL_MAIL",
        phone_number: "+13307331476",
        recipient_name: {
          first_name: "Al",
          last_name: "Charleson"
        }
      },
      type: "DEBIT"
    }
  }
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
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
              } else if (value === 'Report lost or stolen') {
                navigation.navigate(navigationStrings.REPORTMISSINGCARD);
              }
            };
            return (
              <View key={index}>
                <TouchableOpacity style={styles.cardItem} onPress={onPress}>
                  <Text style={styles.cardItemName}>{value}</Text>
                  <FontAwesome
                    name={'angle-right'}
                    color={Colors[theme]?.grey500}
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
