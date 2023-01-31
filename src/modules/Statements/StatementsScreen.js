import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CustomHeader } from '../../components';
import { Strings } from '../../constants';
import styling from './StatementsStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, moderateScale } from '../../theme';
import { useRoute } from '@react-navigation/native';
import { showLoader } from '../../redux/actions/user';
import { useDispatch } from 'react-redux';

const StatementsScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      await dispatch(showLoader(true))
      setTimeout(async () => {
        await dispatch(showLoader(false))
      }, 1000);
    })()
  }, [])

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.statements}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.statementPeriod}>
          {Strings.statementPeriod?.toUpperCase()}
        </Text>
        <View style={styles.card}>
          <View style={styles.cardItem}>
            <Text style={styles.cardItemTitle}>{'DEC 2022'}</Text>
            <TouchableOpacity>
              <MaterialIcons
                name={'picture-as-pdf'}
                color={Colors[theme]?.blue}
                size={moderateScale(26)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          {/* <View style={styles.cardItem}>
            <Text style={styles.cardItemTitle}>{'September 2022'}</Text>
            <TouchableOpacity>
              <MaterialIcons
                name={'picture-as-pdf'}
                color={Colors[theme]?.blue}
                size={moderateScale(26)}
              />
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default StatementsScreen;
