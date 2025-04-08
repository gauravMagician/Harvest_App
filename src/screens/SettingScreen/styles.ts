// ReferEarn.styles.ts
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
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#0A1128',
  },
  settingsTitle: {
    fontSize: fontSizes.extraLarge,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  menuContainer: {
    marginBottom: spacing.large,
    marginHorizontal: scaleSizeWidth(15)
  },
  header: {
    fontSize: fontSizes.extraLarge,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flexDirection: 'row',
    marginTop: scaleSizeHeight(10)
  },
  backIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(24),
    resizeMode: 'contain',
    marginLeft: scaleSizeHeight(10),
  },
  headerText: {
    fontSize: scaleFontSize(18),
    fontWeight: '700',
    color: 'white',
    marginLeft: scaleSizeWidth(20),
    marginTop: scaleSizeHeight(5)
  },
  menuItem: {
    color: '#FFFFFF',
    fontSize: fontSizes.medium,
    marginVertical: spacing.medium,
  },
  referContainer: {
    borderColor: "#27303F",
    borderWidth: 1,
    borderRadius: scaleSize(10),
    padding: spacing.large,
    marginHorizontal: scaleSizeWidth(10),
    marginBottom: scaleSizeHeight(10)
  },
  megaPhoneIcon: {
    width: scaleSize(83),
    height: scaleSize(82),
    marginBottom: spacing.medium,
  },
  title: {
    color: '#FFFFFF',
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    marginBottom: spacing.small,
  },
  description: {
    color: '#A9A9A9',
    textAlign: 'center',
    marginBottom: spacing.medium,
  },
  referralCodeLabel: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: scaleFontSize(20),
    marginBottom: spacing.small,
  },
  referralCodeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderRadius: scaleSize(5),
    marginBottom: spacing.medium,
  },
  referralCode: {
    color: '#9BBEFE',
    fontSize: scaleFontSize(24),
    fontWeight: '300',
    marginRight: spacing.small,
  },
  copyIcon: {
    width: scaleSize(20),
    height: scaleSize(20),
    tintColor: '#FFFFFF',
  },
  referButton: {
    backgroundColor: '#007BFF',
    width: '100%',
    paddingVertical: spacing.medium,
    borderRadius: scaleSize(5),
    alignItems: 'center',
  },
  referButtonText: {
    color: '#FFFFFF',
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
  },
});

export default styles;
