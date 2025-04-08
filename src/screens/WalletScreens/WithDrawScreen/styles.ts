import { StyleSheet } from "react-native";
import { fontSizes, scaleFontSize, scaleSize, scaleSizeHeight, scaleSizeWidth, spacing } from "../../../utils/deviceDimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01081A",
    paddingHorizontal: spacing.medium,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scaleSizeHeight(15),
    marginLeft: scaleSizeWidth(10)
  },
  inputWrapperStyles: {
    width: scaleSizeWidth(339),
    height: scaleSizeHeight(48),

  },
  inneview: {
    width: scaleSizeWidth(330),
    height: scaleSizeHeight(242),
    marginTop: scaleSizeHeight(40),
    marginHorizontal: scaleSizeWidth(10)
  },
  backIcon: {
    width: scaleSize(20),
    height: scaleSize(15),
    tintColor: "#FFFFFF",
  },
  headerTitle: {
    fontSize: scaleFontSize(24),
    color: "#FFFFFF",
    fontWeight: "700",
    marginLeft: spacing.medium,
  },
  subtitle: {
    fontSize: scaleFontSize(20),
    fontWeight: "400",
    color: "#D1D5DB",
  },
  balanceText: {
    fontSize: scaleFontSize(28),
    fontWeight: "700",
    color: "#FFFFFF",
    marginTop: scaleSizeHeight(5),
    marginBottom: scaleSizeHeight(10)
  },
  linkText: {
    color: "#3B82F6",
    fontWeight: "600",
    fontSize: fontSizes.medium,
    marginTop: scaleSizeHeight(40),
  },
  minMaxContainer: {
    flexDirection: "row",
    marginTop: scaleSizeHeight(40),
  },
  minMaxText: {
    color: "#3B82F6",
    fontWeight: "600",
    fontSize: fontSizes.small,
    marginLeft: spacing.small,
  },
  withdrawButton: {
    backgroundColor: "#103E91",
    borderRadius: scaleSize(16),
    paddingVertical: scaleSizeHeight(12),
    alignItems: "center",
    position: "relative",
    top: scaleSizeHeight(250),
    marginHorizontal: scaleSizeWidth(8)
  },
  withdrawButtonText: {
    color: "#FFFFFF",
    fontSize: fontSizes.medium,
    fontWeight: "600",
  },
});
