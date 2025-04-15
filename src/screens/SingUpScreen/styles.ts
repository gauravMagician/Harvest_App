import { StyleSheet } from "react-native";
import {
  fontSizes,
  getResponsiveValue,
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
  spacing,
} from "../../utils/deviceDimensions";
import ColorConstants from "../../constants/ColorConstants";
import { AppConstants } from "../../constants/AppConstants";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: ColorConstants.BACKGOUND,

  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    padding: spacing.large,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: scaleSizeHeight(80),
  },

  button: {
    backgroundColor: "#0360D2",
    paddingHorizontal: scaleSizeWidth(30),
    paddingVertical: 14,
    width: scaleSizeHeight(260),
    borderRadius: scaleSize(16),
    marginTop: scaleSizeHeight(5),
    alignSelf: "center",
    height: scaleSizeHeight(45),
  },
  WalletButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: scaleSizeWidth(30),
    paddingVertical: 14,
    width: scaleSizeHeight(260),
    borderRadius: scaleSize(16),
    marginTop: scaleSizeHeight(5),
    alignSelf: "center",
    height: scaleSizeHeight(45),
    color: "black"
  },

  logo: {
    width: getResponsiveValue(120, 200, 250),
    height: getResponsiveValue(120, 210, 220),
    resizeMode: "contain",
  },

  // 3) Main container for the rest of the content
  container: {
    paddingHorizontal: scaleSize(16),
    marginTop: scaleSize(40),
    alignItems: "center",
  },
  heading: {
    fontSize: scaleFontSize(18),
    fontWeight: "400",
    color: "#A0AEC0",
    marginBottom: scaleSize(25),
    textAlign: "center",
    position: "relative",
    right: scaleSizeWidth(60),
    fontFamily: AppConstants.FONT_DMSANS_REGULAR,
  },
  // 4) Phone Input Container
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: scaleSizeWidth(320),
    height: scaleSizeHeight(47),
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#27303F",
    borderRadius: 20,
    paddingHorizontal: scaleSizeWidth(12),
    marginBottom: scaleSizeHeight(20),
  },
  countryCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: scaleSizeWidth(5),
  },
  flagIcon: {
    width: scaleSizeWidth(24),
    height: scaleSizeHeight(24),
    resizeMode: "contain",
    marginRight: scaleSizeWidth(7),
  },
  downArrowIcon: {
    width: scaleSizeWidth(16),
    height: scaleSizeHeight(16),
    tintColor: "#FFFFFF",
    resizeMode: "contain",
    position: "relative",
    top: 1,
    right: scaleSizeWidth(5)
  },
  upArrowIcon: {
    width: scaleSizeWidth(25),
    height: scaleSizeHeight(20),
    tintColor: "#FFFFFF",
    resizeMode: "contain",
    position: "relative",
    top: 1,
    right: scaleSizeWidth(5)
  },
  phoneInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: scaleFontSize(18),
  },
  phoneIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(20),
    tintColor: "#788497",
    resizeMode: "contain",
    marginLeft: scaleSizeWidth(8),
  },

  // 5) "Or" separator
  orContainer: {
    marginVertical: scaleSizeHeight(30),
    flexDirection: "row",
    alignItems: "center",
    // width: "90%",
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: "#27303F",
  },
  orText: {
    marginHorizontal: scaleSizeWidth(13),
    fontSize: scaleFontSize(17),
    fontWeight: "400",
    color: "#A0AEC0",
  },

  // 6) Connect to wallet row
  secondaryButton: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    left: scaleSizeWidth(12)
  },
  secondaryButtonText: {
    color: "#FFFFFF",
    fontSize: scaleFontSize(18),
    fontWeight: "500",
    textAlign: "center",
  },
  downlogo: {
    width: scaleSizeWidth(18),
    height: scaleSizeHeight(12),
    resizeMode: "contain",
    tintColor: "white",
    position: "relative",
    top: scaleSizeHeight(3),
  },
  upArrow: {
    width: scaleSizeWidth(28),
    height: scaleSizeHeight(22),
    resizeMode: "contain",
    tintColor: "white",
    position: "relative",
    top: scaleSizeHeight(3),
    right: scaleSizeWidth(2)
  },
  // 7) Disclaimer text
  textView: {
    width: scaleSizeWidth(300),
    height: scaleSizeHeight(50),
    paddingLeft: 2,
    marginLeft: scaleSizeWidth(12),
    marginTop: scaleSizeHeight(3)
  },
  bottomtext: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: AppConstants.FONT_DMSANS_REGULAR,
    fontWeight: "400",
  },
  secondButton: {
    backgroundColor: "white",
    color:"black",
    marginTop: scaleSizeHeight(18),
    width: scaleSizeHeight(260),
    borderRadius: scaleSize(16),
    height: 56,
  },
  Centertext: {
    color: "#3FE4FE",
    fontSize: scaleFontSize(16),
    fontWeight: "400",
    position: "relative",
    top: scaleSizeHeight(4),
  },
  text: { color: "#fff", fontSize: 16 },
  address: { color: "#00ffcc", fontSize: 14, marginVertical: 10 },
  buttonText: { color: "#000", fontWeight: "bold" },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    maxHeight: '70%',
    backgroundColor: '#fff',
    borderRadius: scaleSize(10),
    padding: scaleSize(16),
    elevation: 5,
  },
});
