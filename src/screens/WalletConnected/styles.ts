// import { StyleSheet } from 'react-native';
// import { deviceDimensions, fontSizes, spacing } from '../../utils/deviceDimensions';

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#04050E',
//   },
//   heroContainer: {
//     alignItems: 'center',
//     marginTop: spacing.extraLarge,
//   },
//   heroImage: {
//     width: deviceDimensions.width * 0.5,
//     height: deviceDimensions.height * 0.25,
//   },
//   content: {
//     paddingHorizontal: spacing.large,
//     marginTop: spacing.medium,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: spacing.medium,
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//     tintColor: '#FFF',
//   },
//   title: {
//     fontSize: fontSizes.large,
//     color: '#FFF',
//     fontWeight: '600',
//     marginLeft: spacing.medium,
//   },
//   walletInfo: {
//     alignItems: 'center',
//     marginBottom: spacing.large,
//   },
//   walletIcon: {
//     width: 60,
//     height: 60,
//     borderRadius: 12,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   walletName: {
//     fontSize: fontSizes.medium,
//     color: '#4A90E2',
//     fontWeight: '500',
//     marginTop: spacing.small,
//   },
//   detailsContainer: {
//     backgroundColor: '#0B0C1E',
//     borderRadius: 12,
//     padding: spacing.large,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: spacing.medium,
//   },
//   label: {
//     fontSize: fontSizes.medium,
//     color: '#A1A5C1',
//   },
//   value: {
//     fontSize: fontSizes.medium,
//     color: '#FFF',
//     fontWeight: '500',
//   },
//   rowRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   copyIcon: {
//     width: 18,
//     height: 18,
//     tintColor: '#FFF',
//     marginLeft: spacing.small,
//   },
//   networkValue: {
//     fontSize: fontSizes.medium,
//     color: '#4A90E2',
//     fontWeight: '500',
//   },
// });

import {StyleSheet} from 'react-native';
import {
  fontSizes,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
  spacing,
} from '../../utils/deviceDimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000F1E',
    // alignItems: 'center',
    paddingTop: spacing.extraLarge,
  },
  innerView: {
    marginTop: scaleSizeHeight(70),
  },
  walletIcon: {
    width: scaleSizeWidth(180),
    height: scaleSizeHeight(150),
    resizeMode: 'contain',
    marginTop: scaleSizeHeight(90),
    marginBottom: scaleSizeHeight(40),
  },
  title: {
    fontSize: fontSizes.large,
    color: 'white',
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scaleSizeWidth(10),
  },
  backButton: {
    padding: scaleSize(8),
  },
  backIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(10),
    tintColor: '#FFFFFF',
  },
  walletInfoContainer: {
    padding: spacing.medium,
    marginLeft: scaleSizeWidth(10),
    borderRadius: 10,
    marginBottom: spacing.large,
  },
  metamaskIcon: {
    width: scaleSizeWidth(74),
    height: scaleSizeHeight(70),
    resizeMode: 'contain',
    marginRight: spacing.medium,
  },
  metamaskText: {
    fontSize: scaleSize(15),
    color: '#3093F0',
    fontWeight: '600',
    marginLeft: 1,
  },

  infoContainer: {
    // width: '90%',
    paddingVertical: spacing.small,
    marginHorizontal: scaleSizeWidth(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal:spacing.small,
    // backgroundColor:"red"
  },
  label: {
    fontSize: scaleSize(20),
    color: '#AAB2C6',
    fontWeight: '400',
    // marginBottom: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    fontSize: scaleSize(16),
    color: '#3A9FFD',
    fontWeight: '400',
  },
  copyIcon: {
    width: scaleSizeWidth(14),
    height: scaleSizeHeight(15),
    resizeMode: 'contain',
    marginLeft:scaleSizeWidth(5)
  },
});
