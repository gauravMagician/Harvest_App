import { StyleSheet } from "react-native";
import {
  fontSizes,
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
  spacing,
} from "../../utils/deviceDimensions";

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: "#010B1F", // Dark background as shown
    paddingHorizontal: spacing.medium,
    paddingTop: spacing.medium,
  },
  headerIcon: {
    width: scaleSizeWidth(50),
    height: scaleSizeHeight(30),
  },

  // Top bar
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: scaleSizeHeight(10),
    marginHorizontal: scaleSizeWidth(5),
    marginTop: scaleSizeHeight(8),
  },
  innerheader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: scaleSizeWidth(10),
    position: "relative",
    top: scaleSizeHeight(10),
  },
  logoText: {
    color: "#5F8ADA", // "H" in bluish color
    fontSize: scaleFontSize(24),
    fontWeight: "bold",
  },
  rightHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectText: {
    color: "#FFFFFF",
    fontSize: fontSizes.medium,
    marginRight: spacing.small,
  },
  selectIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(16),
    // tintColor: "#FFFFFF",
    resizeMode: "contain",
    marginRight: scaleSizeWidth(10),
  },
  downIcon: {
    width: scaleSizeWidth(13),
    height: scaleSizeHeight(16),
    tintColor: "#FFFFFF",
    resizeMode: "contain",
  },
  sectionHeader: {
    color: "#FFFFFF",
    fontSize: fontSizes.large,
    fontWeight: "600",
    marginTop: spacing.medium,
    marginBottom: spacing.small,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: scaleSize(8),
    marginVertical: scaleSizeHeight(7),
  },
  //====dotsnotificationItem=====/
  dotsnotificationItem: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: scaleSize(8),
    marginVertical: scaleSizeHeight(7),
    position:"relative",
    top:scaleSizeHeight(25)
  },
  userImage: {
    width: scaleSize(40),
    height: scaleSize(40),
    borderRadius: scaleSize(20),
    marginRight: spacing.small,
  },
  textContainer: {
    flex: 1,
  },
  notificationText: {
    color: "#FFFFFF",
    fontSize: fontSizes.medium,
    marginBottom: 2,
  },
  timeText: {
    color: "#999999",
    fontSize: fontSizes.small,
  },
  acceptButton: {
    backgroundColor: "#0360D2",
    borderRadius: scaleSize(5),
    paddingVertical: scaleSize(4),
    paddingHorizontal: scaleSize(10),
    marginRight: spacing.small,
  },
  acceptButtonText: {
    color: "#FFFFFF",
    fontSize: fontSizes.small,
  },
  moreIcon: {
    width: scaleSizeWidth(18),
    height: scaleSizeHeight(18),
    tintColor: "#FFFFFF",
    resizeMode: "contain",
  },
});

export default styles;
