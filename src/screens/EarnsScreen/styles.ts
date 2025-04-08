// import {StyleSheet} from 'react-native';
// import {
//   fontSizes,
//   getResponsiveValue,
//   scaleSize,
//   scaleSizeHeight,
//   spacing,
// } from '../../utils/deviceDimensions';
// import ColorConstants from '../../constants/ColorConstants';
// import { AppConstants } from '../../constants/AppConstants';

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor:"#000618",
//   },
//   gradientBackground: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: spacing.medium,
//   },
//   logo: {
//     width: getResponsiveValue(224, 200, 250),
//     height: getResponsiveValue(241, 210, 220),
//     resizeMode: 'center',
//     marginBottom: scaleSize(15),
//   },
//   title: {
//     fontSize: fontSizes.large,
//     color: '#2E92EF',
//     fontWeight: 'bold',
//     // marginBottom: spacing.small,
//   },
//   subtitle: {
//     // fontSize: fontSizes.extraLarge,
//     fontSize:30,
//     fontWeight: "800",
//     color: ColorConstants.WHITE,
//     textAlign: 'center',
//     marginHorizontal: spacing.medium,
//     fontFamily:AppConstants.FONT_POPPINS_MEDIUM,
//   },
//   subInnerTitle: {
//     fontSize: fontSizes.extraLarge,
//     color: ColorConstants.WHITE,
//     textAlign: 'center',
//   },
//   paginationContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: spacing.medium,
//   },
//   subtitleView: {
//     marginBottom: spacing.extraLarge,
//   },

// });

// export default styles;

import { StyleSheet } from "react-native";
import {
  fontSizes,
  getResponsiveValue,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
  spacing,
} from "../../utils/deviceDimensions";
import ColorConstants from "../../constants/ColorConstants";
import { AppConstants } from "../../constants/AppConstants";

export default StyleSheet.create({
  // Base container
  safeArea: {
    flex: 1,
    // Optional fallback color in case image fails to load
    backgroundColor: "#000000",
  },

  // Full-screen background image
  backgroundImage: {
    flex: 1,
    resizeMode: "contain", // or 'stretch' / 'contain' based on your design
    padding: spacing.large,
  },

  // Container to hold text and button
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // centers items vertically
    // If you need them a bit higher or lower, adjust with marginTop / marginBottom
  },

  // "Post to Earn" text (blue)
  title: {
    fontSize: fontSizes.large,
    color: ColorConstants.APP_TEXT_BLUE_COLOR, // Adjust to match your design’s blue
    fontFamily: AppConstants.FONT_DMSANS_MEDIUM,
    marginBottom: spacing.medium,
  },

  // "Get rewards..." text (white)
  subTitle: {
    fontSize: scaleSize(24),
    color: ColorConstants.WHITE, // Adjust to match your design’s blue
    fontFamily: AppConstants.FONT_DMSANS_BOLD,
    marginBottom: scaleSize(90),
    textAlign: "center",
    fontWeight: '700',
    paddingHorizontal: scaleSizeWidth(40)
  },

  // "Get started" button
  button: {
    backgroundColor: "#0360D2",
    paddingHorizontal: scaleSizeWidth(30),
    paddingVertical: 14,
    width: scaleSizeHeight(260),
    borderRadius: scaleSize(15),
    position: "absolute",
    bottom: 30, // Adjust for your desired spacing from bottom
    alignSelf: "center", // ensure the button is centered horizontally
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  logo: {
    width: getResponsiveValue(400, 200, 250),
    height: getResponsiveValue(441, 200, 220),
    resizeMode: "center",
    marginBottom: scaleSize(15),
  },
  ImageView: {
    position: "relative",
    top: scaleSizeHeight(90),
  },
  AssestView: {
    position: "relative",
    top: scaleSizeHeight(40),
    right: scaleSizeWidth(20),
  },
  newlogo: {
    width: scaleSizeWidth(300),
    height: scaleSizeHeight(300),
    resizeMode: "center",
    marginBottom: scaleSize(15),
  }
});
