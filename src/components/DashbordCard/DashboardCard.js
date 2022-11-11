import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors, horizontalScale, moderateScale} from '../../theme';
import styles from './DashboardCardStyle';

const DashboardCard = ({
  title,
  titleStyle,
  subTitle,
  subTitleStyle,
  navigationText,
  navigateTextStyle,
  navigationLogoColor,
  logo,
  backgroundImage,
  cardStyle,
  logoStyle,
  onPressNavigationButton,
}) => {
  return (
    <View style={[styles.card, cardStyle, backgroundImage && {paddingLeft: 0}]}>
      <ImageBackground
        source={backgroundImage}
        style={[
          styles.backgroundImage,
          backgroundImage && {paddingLeft: horizontalScale(15)},
        ]}>
        <View style={styles.cardDetailParent}>
          <View style={styles.cardTitleParent}>
            <Text style={[styles.cardTitle, titleStyle]}>{title}</Text>
          </View>
          <View style={styles.cardSubTitleParent}>
            <Text style={[styles.cardSubTitle, subTitleStyle]}>{subTitle}</Text>
          </View>
          <View style={styles.navigateTextParent}>
            <TouchableOpacity
              style={styles.navigateButton}
              onPress={onPressNavigationButton}>
              <Text style={[styles.navigateText, navigateTextStyle]}>
                {navigationText}
              </Text>
              <Icon
                name={'chevron-right'}
                size={moderateScale(18)}
                color={navigationLogoColor ? navigationLogoColor : Colors.black}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardLogoParent}>
          <Image source={logo} style={[styles.cardLogo, logoStyle]} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default DashboardCard;
