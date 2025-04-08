// styles.ts
import { StyleSheet } from 'react-native';
import {
  fontSizes,
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
} from '../../../../utils/deviceDimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01081A',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleSizeHeight(40)
  },
  backIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(24),
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: scaleFontSize(20),
    fontWeight: '700',
    color: 'white',
    marginLeft: scaleSizeWidth(30),
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0A1024',
    paddingHorizontal: 10,
    borderColor: '#27303F',
    borderWidth: 1,
    borderRadius: scaleSize(20),
    width: scaleSizeWidth(320),
    height: scaleSizeHeight(45)
  },
  flagIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(15),
    marginRight: 10,
  },
  phoneIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(15),
    marginLeft: 10,
    tintColor: '#788497',
  },
  inputContainer: {
    flex: 1,
  },
  inputField: {
    color: 'white',
    paddingLeft: 10,
  },
  otpButton: {
    backgroundColor: '#0360D2',
    padding: scaleSize(20),
    borderRadius: scaleSize(18),
    alignItems: 'center',
    marginTop: scaleSizeHeight(35),
  },
  otpButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  ContinueButton: {
    backgroundColor: 'white',
    padding: scaleSize(20),
    borderRadius: scaleSize(18),
    alignItems: 'center',
    // marginTop: scaleSizeHeight(15),
  },
  ContiuneButtonText: {
    color: '#0360D2',
    fontWeight: '500',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scaleSizeWidth(6),
  },
  downArrowIcon: {
    width: scaleSizeWidth(16),
    height: scaleSizeHeight(16),
    tintColor: '#FFFFFF',
    resizeMode: 'contain',
  },
  phoneInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: scaleFontSize(17),
    marginLeft: scaleSizeWidth(5)
  },
  otpHeader: {
    color: 'white',
    fontSize: scaleFontSize(24),
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  otpSubText: {
    color: '#A0AEC0',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: scaleFontSize(20),
    width: scaleSizeWidth(278),
    marginLeft: scaleSizeWidth(20)
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  otpBox: {
    backgroundColor: '#27303F',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 10,
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  innerView: {
    marginTop: scaleSizeHeight(10),
    paddingHorizontal: scaleSizeWidth(10),
  },
  title: {
    fontSize: scaleFontSize(19),
    fontWeight: '400',
    color: '#A0AEC0',
    marginLeft: scaleSizeWidth(5),
    marginBottom: scaleSizeHeight(20),
  },
  innerCodeView: {
    marginTop: scaleSizeHeight(50),
  },

  // Resend code + circle
  resendWrapper: {
    alignItems: "center",
    // marginTop: scaleSizeHeight(10),
    marginBottom: scaleSizeHeight(10)
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
});
