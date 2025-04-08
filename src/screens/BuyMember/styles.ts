import { StyleSheet } from 'react-native';
import {
  fontSizes,
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
  spacing,
} from '../../utils/deviceDimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    padding: spacing.small,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scaleSizeWidth(10),
    marginBottom: scaleSizeHeight(15),
    marginTop: scaleSizeHeight(6)
  },
  backIcon: {
    width: scaleSizeWidth(15),
    height: scaleSizeHeight(24),
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: scaleFontSize(18),
    fontWeight: '700',
    color: 'white',
    marginLeft: scaleSizeWidth(15),
  },
  premiumText: {
    color: '#FFF',
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
    marginVertical: spacing.small,
    textAlign: 'center',
  },
  description: {
    color: '#AAB2C1',
    textAlign: 'center',
    marginHorizontal: spacing.large,
    marginBottom: spacing.large,
  },
  image: {
    width: scaleSize(358),
    height: scaleSize(164),
    resizeMode: 'center',
  },
  freeText: {
    color: '#FFF',
    fontSize: fontSizes.medium,
    fontWeight: '400',
  },
  price: {
    color: '#FFF',
    fontSize: scaleFontSize(32),
    fontWeight: '600',
  },
  info: {
    color: '#AAB2C1',
    fontSize: fontSizes.small,
    marginVertical: spacing.small,
  },
  freePack: {
    color: '#FFF',
    fontSize: fontSizes.medium,
    fontWeight: '400',
    marginTop: spacing.small,
  },
  activeButton: {
    backgroundColor: '#0360D2', //#2D485A
    borderRadius: scaleSize(10),
    alignItems: 'center',
    paddingVertical: spacing.small,
    position: 'relative',
    top: scaleSizeHeight(20),
  },
  activeText: {
    color: '#FFF',
    fontSize: fontSizes.small,
    fontWeight: '600',
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#0F4BBD',
    borderRadius: scaleSize(10),
    width: scaleSizeWidth(350),
    height: scaleSizeHeight(121),
    padding: spacing.extraLarge,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: scaleSizeWidth(5),
  },
  cardSecondContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#27303F',
    marginTop: scaleSizeHeight(10),
    borderRadius: scaleSize(10),
    width: scaleSizeWidth(350),
    height: scaleSizeHeight(160),
    padding: spacing.extraLarge,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: scaleSizeWidth(5),
  },
  cardthirdContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#27303F',
    marginTop: scaleSizeHeight(10),
    borderRadius: scaleSize(10),
    width: scaleSizeWidth(350),
    height: scaleSizeHeight(120),
    padding: spacing.extraLarge,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: scaleSizeWidth(5),
  },
  innerText: {
    flexDirection: 'column',
  },
  imgView: {
    flexDirection: 'column',
  },
  cardIcon: {
    width: scaleSizeWidth(50),
    height: scaleSizeHeight(37),
  },
  noactiveButton: {
    backgroundColor: '#2D485A',
    alignItems: 'center',
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.small,
    position: 'relative',
    top: scaleSizeHeight(20),
  },
  noactiveText: {
    color: '#FFF',
    fontSize: fontSizes.small,
    fontWeight: '600',
  },
  NocardIcon: {
    width: scaleSizeWidth(50),
    height: scaleSizeHeight(40),
  },
  bluetick: {
    color: '#AAB2C1',
    fontSize: fontSizes.small,
    marginVertical: scaleSizeHeight(1),
  },
  startText: {
    color: '#FFF',
    fontSize: fontSizes.medium,
    fontWeight: '400',
    position: 'relative',
    bottom: 5,
  },
  startPack: {
    color: '#3070E8',
    fontSize: scaleFontSize(12),
    fontWeight: '600',
    position: 'relative',
    top: 7,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor: '#0D1B2A',
  },
  label: {
    fontSize: scaleFontSize(18),
    color: '#A0AEC0',
    fontWeight: '300',
    marginTop: scaleSizeHeight(5),
    marginLeft: scaleSizeWidth(10),
  },
  button: {
    backgroundColor: '#0360D2',
    alignSelf: 'center',
    width: scaleSizeWidth(350),
    marginTop: scaleSizeHeight(40),
    marginBottom: scaleSizeHeight(20),
  },
  termsContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    width: '90%',
  },

  termsText: {
    color: '#AAB2C1',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },

  linkText: {
    color: '#3070E8',
    fontWeight: 'bold',
  },

});

export default styles;
