import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  headerParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
    marginTop: verticalScale(6),
  },
  headerTitle: {
    color: Colors.white,
  },
  backBtnStyle: {
    tintColor: Colors.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: verticalScale(190),
    paddingHorizontal: horizontalScale(25),
  },
  suggestionParent: {
    height: verticalScale(50),
    width: horizontalScale(250),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.orange,
    marginBottom: verticalScale(40),
  },
  triAngle: {
    position: 'absolute',
    top: verticalScale(40),
    width: 0,
    height: 0,
    borderLeftWidth: moderateScale(20),
    borderRightWidth: moderateScale(20),
    borderBottomWidth: moderateScale(40),
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.orange,
    transform: [{rotate: '180deg'}],
  },
  suggestionText: {
    color: Colors.white,
    fontSize: moderateScale(16),
    fontFamily: Fonts.bold,
    zIndex: 1,
  },
  frame: {
    height: verticalScale(200),
    width: '100%',
    borderWidth: 2,
    borderColor: Colors.orange,
  },
  modalParent: {
    flex: 1,
    backgroundColor: Colors.black50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(35),
  },
  modalCard: {
    backgroundColor: Colors.white,
    width: '100%',
    height: verticalScale(180),
    marginTop: verticalScale(50),
  },
  cardTitleParent: {
    flex: 0.3,
    justifyContent: 'center',
    paddingLeft: horizontalScale(10),
  },
  cardSubtitleParent: {
    flex: 0.3,
    justifyContent: 'center',
    paddingLeft: horizontalScale(10),
  },
  cardButtonsParent: {
    flexDirection: 'row',
    flex: 0.4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardTitle: {
    color: Colors.black,
    fontSize: moderateScale(16),
    fontFamily: Fonts.bold,
  },
  modalButton: {
    backgroundColor: Colors.orange,
    height: verticalScale(50),
    paddingHorizontal: horizontalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(8),
  },
  modalButtonText: {
    color: Colors.white,
    fontSize: moderateScale(16),
    fontFamily: Fonts.bold,
  },
  exitNote: {
    fontFamily: Fonts.regular,
  },
});

export default styles;
