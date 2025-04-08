import { StyleSheet } from "react-native";
import { AppConstants } from "../../constants/AppConstants";
import ColorConstants from "../../constants/ColorConstants";
import {
  fontSizes,
  getResponsiveValue,
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
  spacing,
} from "../../utils/deviceDimensions";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01081A",
    padding: spacing.large,
    paddingHorizontal: scaleSizeWidth(20),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.large,
  },
  backButton: {
    padding: spacing.small,
  },
  backIcon: {
    width: 18,
    height: 18,
    tintColor: "white",
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: spacing.large,
  },
  profileImageContainer: {
    width: getResponsiveValue(100, 120, 130),
    height: getResponsiveValue(100, 120, 130),
    borderRadius: getResponsiveValue(50, 60, 65),
    backgroundColor: ColorConstants.COLOR_YELLOW,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: getResponsiveValue(50, 60, 65),
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    borderRadius: 15,
    width: scaleSizeWidth(30),
    height: scaleSizeHeight(20),
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIcon: {
    width: scaleSizeWidth(17),
    height: scaleSizeHeight(11),
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: scaleSizeHeight(5),
    // marginBottom: spacing.large,
  },
  title: {
    color: "white",
    fontSize: scaleFontSize(24),
    fontFamily: AppConstants.FONT_DMSANS_BOLD,
    fontWeight: "700",
  },
  publicContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  publicText: {
    color: "white",
    marginRight: spacing.small,
    fontSize: fontSizes.medium,
    fontFamily: AppConstants.FONT_DMSANS_REGULAR,
  },
  toggleContainer: {
    width: scaleSizeWidth(30),
    height: scaleSizeHeight(10),
    borderRadius: 15,
    backgroundColor: "#333",
    // padding: 2,
  },
  toggleButton: {
    width: scaleSizeWidth(12),
    height: scaleSizeHeight(10),
    borderRadius: 15,
    backgroundColor: "white",
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: getResponsiveValue(60, 58, 66),
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: spacing.medium,
    // marginBottom: spacing.medium,
    backgroundColor: '#01081A',
    color: "white",
    borderColor: "#27303F",
  },
  countryFlag: {
    width: 24,
    height: 16,
    marginRight: spacing.small,
  },
  dropdownIcon: {
    width: 20,
    height: 13,
    tintColor: "#788497",
    marginHorizontal: spacing.small,
    marginTop: scaleSizeHeight(3)
  },
  phoneInput: {
    backgroundColor: '#01081A',
    color: "white",
    borderColor: "#27303F",
    flex: 1,
    // color: 'white',
    fontFamily: AppConstants.FONT_DMSANS_REGULAR,
    fontSize: scaleFontSize(17),
    paddingHorizontal: spacing.small,
    borderRadius: 17,
    marginTop: scaleSizeHeight(3)
  },
  phoneIcon: {
    width: scaleSizeWidth(18),
    height: scaleSizeHeight(18),
    tintColor: "#788497",
    resizeMode: "contain",
    marginRight: scaleSizeWidth(8),
  },
  referralText: {
    color: "#A0AEC0",
    fontSize: scaleFontSize(18),
    fontFamily: AppConstants.FONT_DMSANS_REGULAR,
    marginVertical: scaleSizeHeight(13),
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: spacing.medium,
  },
  halfWidthInput: {
    width: "48%",
  },
  bioInput: {
    height: getResponsiveValue(120, 140, 160),
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: "#2463EB",
    height: getResponsiveValue(50, 58, 66),
    borderRadius: getResponsiveValue(25, 29, 33),
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.extraLarge,
  },
  saveButtonText: {
    color: "white",
    fontSize: fontSizes.medium,
    fontFamily: AppConstants.FONT_DMSANS_MEDIUM,
  },
  secondButton: {
    marginTop: scaleSizeHeight(10),
  },

  // NEW STYLES FOR INPUT ICONS
  inputIconContainer: {
    position: "relative",
    marginBottom: spacing.medium,
  },
  inputIcon: {
    position: "absolute",
    left: 10,
    top: scaleSizeHeight(20),
    transform: [{ translateY: -10 }],
    zIndex: 1,
    width: scaleSizeWidth(18),
    height: scaleSizeHeight(18),
  },
  user: {
    position: "relative",
    zIndex: 1,
    top: scaleSizeHeight(27),
    width: scaleSizeWidth(18),
    height: scaleSizeHeight(18),
    marginLeft: 10,
  },
  dob: {
    position: "absolute",
    left: 10,
    top: scaleSizeHeight(17),
    transform: [{ translateY: -10 }],
    zIndex: 1,
    width: scaleSizeWidth(18),
    height: scaleSizeHeight(18),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#000618",
    padding: 20,
    borderRadius: 15,
    width: 300,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalOption: {
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
  },
  modalOptionText: {
    fontSize: 16,
    color: "white",
  },
  closeModalButton: {
    marginTop: 10,
    padding: 10,
    width: "100%",
    backgroundColor: ColorConstants.APP_TEXT_BLUE_COLOR,

    borderRadius: 10,
    alignItems: "center",
  },
  closeModalText: {
    color: "#0A1024",
    fontWeight: "bold",
  },
  walletIcon: {
    width: 20, // Adjust size as needed
    height: 20,
    position: "absolute",
    left: 15,
    top: "50%",
    transform: [{ translateY: -10 }], // Center vertically
    tintColor: "white", // Adjust color if needed
  },
  button: {
    backgroundColor: "#0360D2",
    paddingHorizontal: scaleSizeWidth(30),
    paddingVertical: 14,
    width: scaleSizeHeight(260),
    borderRadius: scaleSize(16),
    marginTop: scaleSizeHeight(12),
    alignSelf: "center",
    height: scaleSizeHeight(45),
  },
});
