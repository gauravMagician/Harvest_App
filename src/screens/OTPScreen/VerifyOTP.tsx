import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from "react-native";
import styles from "./styles";
import { StringConstants } from "../../constants/StringConstants";
import { useNavigation, useRoute } from "@react-navigation/native";
import images from "../../resources/images";
import Button from "../../component/Button";
import { storage, StorageKeys } from "../../utils/storage";
import { authService } from "../../services/authService";

const VerifyOTP: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const phoneNumber = route?.params?.phone || "";
  const [code, setCode] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [showText, setShowText] = useState(false);

  // Handle input change
  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace navigation
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle OTP verification

  const handleVerifyOTP = async () => {
    const otpCode = code.join("");
    if (otpCode.length !== 4) {
      Alert.alert("Invalid OTP", "Please enter a 4-digit OTP.");
      return;
    }

    setLoading(true);
    try {
      const response = await authService.verifyOtp({ mobile: phoneNumber, otp: otpCode });
      // console.log("000000000", response.token);

      if (response?.message?.includes("verified")) {
        // await storage.setItem(StorageKeys.USER, JSON.stringify(response.user));
        // await storage.setItem(StorageKeys.AUTH_TOKEN, response.token);

        Alert.alert("OTP Verified", response.message);
        navigation.reset({
          index: 0,
          routes: [{ name: "Profile", params: { userId: response?.userId, phoneNumber } }],
        });
      } else {
        Alert.alert("Error", response?.message || "Invalid OTP. Please try again.");
      }
    } catch (error: any) {
      Alert.alert("Error", error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP API call
  const handleResendOTP = async () => {
    setResending(true);
    try {
      const response = await authService.resendOtp({ mobile: phoneNumber });

      if (response.success) {
        Alert.alert("OTP Resent", response.data.message);
      } else {
        Alert.alert(
          "Error",
          response?.message || "Failed to resend OTP. Try again."
        );
      }
    } catch (error) {
      Alert.alert(
        "Error",
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setResending(false);
    }
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../resources/images/backicon.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Text style={styles.title}>Enter Your Code</Text>
        <View style={styles.subtitleView}>
          <Text style={styles.subtitle}>
            Enter the verification code that we {""}
            <Text
              style={{}}
            >
              have sent to your phone
            </Text>{" "}

          </Text>
        </View>

        {/* OTP Input Fields */}
        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.codeInput}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
            />
          ))}
        </View>

        {/* Resend OTP */}
        <View style={styles.resendWrapper}>
          <TouchableOpacity disabled={resending} style={styles.resendview} onPress={handleResendOTP}>
            <Text style={styles.resendText}>
              {resending ? "Resending..." : "Resend Code"}
            </Text>
            <Image
              source={require("../../resources/images/resendicon.png")}
              style={styles.resendCircleImage}
            />
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleVerifyOTP}
          // onPress={() => navigation.navigate('Profile')}
          disabled={loading}
        >
          <Text style={styles.continueButtonText}>
            {loading ? "Verifying..." : "Continue"}
          </Text>
        </TouchableOpacity>

        {/* Or separator */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        {/* Connect to Wallet */}
        <TouchableOpacity
          onPress={() => setShowText(!showText)}
          style={styles.secondaryButton}
        >
          <Text style={styles.secondaryButtonText}>Connect to a wallet</Text>
          <Image source={images.IC_DOWN_ARROW} style={styles.downlogo} />
        </TouchableOpacity>

        {/* Disclaimer */}
        {/* {showText && ( */}
        <View style={styles.textView}>
          <Text style={styles.bottomtext}>
            By connecting a wallet, you agree to Lorem Ipsum{""}
            <Text
              style={styles.Centertext}
            >
              Terms of Service
            </Text>{" "}
            and acknowledge that you have read and understand the{" "}
            <Text
              style={styles.Centertext}
            >
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
        {/* )} */}
        {/* CONNECT WALLET Button */}
        <Button
          title={StringConstants.CONNECT_WALLET}
          // onPress={handleSendOTP}
          disabled={loading}
          loading={loading}
          style={styles.WalletButton}
          titleStyle={{ color: "black" }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifyOTP;
