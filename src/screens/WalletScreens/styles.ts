import { StyleSheet } from "react-native";
import {
  fontSizes,
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
  spacing,
} from "../../utils/deviceDimensions";

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
    marginBottom: spacing.medium,
    marginHorizontal: scaleSizeWidth(10),
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
    marginLeft: spacing.extraLarge,
  },
  balanceContainer: {
    alignItems: "center",
  },
  balanceTitle: {
    fontSize: fontSizes.large,
    color: "#D1D5DB",
    fontWeight: "600",
    marginTop: scaleSizeHeight(10),
  },
  balanceAmount: {
    fontSize: scaleFontSize(30),
    fontWeight: "700",
    color: "#FFFFFF",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: scaleSizeHeight(15),
    width: "100%",
    paddingHorizontal: scaleSizeWidth(30),
  },
  actionButton: {
    alignItems: "center",
  },
  icon: {
    width: scaleSize(44),
    height: scaleSize(44),
    marginBottom: spacing.small,
  },
  actionText: {
    fontSize: fontSizes.medium,
    color: "#FFFFFF",
  },
  transactionsView: {
    flex: 1,
    paddingHorizontal: scaleSizeWidth(12),
    paddingTop: scaleSizeHeight(25),
  },
  transactionTitle: {
    fontSize: scaleFontSize(23),
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 10
  },
  transactionItem: {
    paddingTop: scaleSizeHeight(9),
    marginHorizontal: scaleSizeWidth(2),
    borderBottomWidth: 0.5,
    borderBottomColor: "#374151",
  },
  transactionDate: {
    fontSize: fontSizes.small,
    color: "#8596A2",
  },
  transactionStatus: {
    fontSize: fontSizes.medium,
    fontWeight: "600",
  },
  transactionAmount: {
    fontSize: scaleFontSize(20),
    fontWeight: "700",
    textAlign: "right",
    position: "relative",
    bottom: scaleSizeHeight(20),
    right: scaleSizeWidth(3),
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  noDataText: {
    color: "#6B7280",
    fontSize: 16,
  },
});
