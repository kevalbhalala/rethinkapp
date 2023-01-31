import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Icons } from '../../assets';
import styling from './SplashScreenStyle';
import * as Animatable from 'react-native-animatable';
import { navigationStrings } from '../../constants';

const SplashScreenStyle = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate(navigationStrings.AUTHSTACK)
    }, 4000);
  }, [])


  return (
    <View style={styles.screen}>
      <Animatable.Image source={Icons.appLogo} animation='zoomIn' delay={50} iterationDelay={50} resizeMode={'contain'} style={styles.appLogo} />
      <Text style={styles.headText}>WelCome To,</Text>
      <Text style={styles.secondText} >Rethink Mobile App</Text>
      <Animatable.Text animation="fadeIn" duration={4000} style={[styles.secondText, { alignSelf: 'center', color: 'black', fontWeight: '700', position: 'absolute', bottom: 30 }]}>Loading...</Animatable.Text>
    </View>
  );
};

export default SplashScreenStyle;
