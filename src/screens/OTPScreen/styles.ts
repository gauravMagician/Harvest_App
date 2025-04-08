import { StyleSheet } from "react-native";
import {
  fontSizes,
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
} from "../../utils/deviceDimensions";
import ColorConstants from "../../constants/ColorConstants";
import { AppConstants } from "../../constants/AppConstants";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#01081A", // Dark background
  },
  container: {
    flex: 1,
    paddingHorizontal: scaleSizeWidth(30),
    paddingTop: scaleSizeHeight(70),
  },
  headerRow: {
    paddingHorizontal: scaleSizeWidth(20),
    paddingVertical: scaleSizeHeight(20),
    // marginBottom: 10,
  },
  backButton: {
    // padding: 4,
  },
  backIcon: {
    width: 20,
    height: 24,
    tintColor: "#FFFFFF",
    resizeMode: "contain",
  },
  title: {
    fontSize: scaleFontSize(24),
    color: "#FFFFFF",
    fontWeight: "700",
    marginBottom: 5,
  },
  subtitleView: {
    width: scaleSizeWidth(230),
  },
  subtitle: {
    fontSize: scaleFontSize(17),
    fontWeight: "400",
    color: "#A0AEC0",
    marginBottom: 20,
    lineHeight: 20,
  },

  // Row that contains code inputs + resend section
  codeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  // Container for the 4 code boxes
  codeContainer: {
    flexDirection: "row",
  },
  codeInput: {
    width: scaleSizeWidth(50),
    height: scaleSizeHeight(40),
    backgroundColor: "#1B2E47",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#27303F",
    // marginRight: scaleSizeWidth(20),
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
    marginHorizontal: scaleSizeWidth(10),
    justifyContent: "center",
    position: "relative",
    left: scaleSizeWidth(10)
  },

  // Resend code + circle
  resendWrapper: {
    alignItems: "center",
    marginTop: scaleSizeHeight(10),
  },
  resendText: {
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "700",
  },
  resendCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F7B500", // Yellow circle
    justifyContent: "center",
    alignItems: "center",
  },
  resendCircleText: {
    color: "#000000",
    fontWeight: "700",
  },
  resendview: {
    flexDirection: "row",
    marginTop: scaleSizeHeight(10),
    marginBottom: scaleSizeHeight(10)
  },
  resendCircleImage: {
    width: scaleSizeWidth(14),
    height: scaleSizeHeight(10),
    tintColor: "#FFFFFF",
    resizeMode: "contain",
    marginTop: scaleSizeHeight(3),
    marginLeft: scaleSizeWidth(6),
  },


  // Continue button
  continueButton: {
    backgroundColor: "#0360D2",
    paddingHorizontal: scaleSizeWidth(30),
    paddingVertical: 16,
    width: scaleSizeHeight(260),
    borderRadius: scaleSize(16),
    alignItems: "center",
    height: scaleSizeHeight(45),
    marginVertical: scaleSizeHeight(10)
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  // Or separator
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: scaleSizeHeight(25),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#27303F",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#A0AEC0",
    fontWeight: "bold",
  },

  // Connect to wallet text
  connectTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 10,
    fontWeight: "600",
  },
  connectDescription: {
    fontSize: 14,
    color: "#A0AEC0",
    marginBottom: 30,
  },
  connectWalletButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  connectWalletText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
  // 6) Connect to wallet row
  secondaryButton: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    right: scaleSizeWidth(5),
    marginTop: scaleSizeHeight(10)
  },
  secondaryButtonText: {
    color: "#FFFFFF",
    fontSize: scaleFontSize(16),
    fontWeight: "500",
    textAlign: "center",
  },
  downlogo: {
    width: scaleSizeWidth(15),
    height: scaleSizeHeight(10),
    resizeMode: "contain",
    tintColor: "white",
    marginLeft: scaleSizeWidth(3),
    marginTop: scaleSizeHeight(3)
  },
  // 7) Disclaimer text
  textView: {
    paddingHorizontal: scaleSizeWidth(10),
    // position: "relative",
    right: scaleSizeWidth(13),
    marginTop: scaleSizeHeight(4),
  },
  bottomtext: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: scaleFontSize(16),
    fontFamily: AppConstants.FONT_DMSANS_REGULAR,
    fontWeight: "400",
    lineHeight: 19
  },
  secondButton: {
    backgroundColor: ColorConstants.APP_TEXT_BLUE_COLOR,
    marginTop: scaleSizeHeight(20),
    width: scaleSizeHeight(260),
    borderRadius: scaleSize(10),
  },
  Centertext: {
    color: "#3FE4FE",
    fontSize: scaleFontSize(14),
    fontWeight: "400",
    position: "relative",
    top: scaleSizeHeight(4),
  },
  text: { color: "#fff", fontSize: 16 },
  address: { color: "#00ffcc", fontSize: 14, marginVertical: 10 },
  buttonText: { color: "#000", fontWeight: "bold" },
  WalletButton: {
    backgroundColor: "#FFFFFF",
    width: scaleSizeHeight(260),
    borderRadius: scaleSize(16),
    marginTop: scaleSizeHeight(20),
    alignSelf: "center",
    height: scaleSizeHeight(45),
    color: "black"
  },
});
