import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import images from "../../resources/images";
import Button from "../../component/Button";
import { StringConstants } from "../../constants/StringConstants";
import { sendOtp } from "../../services/apiActions";

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [showText, setShowText] = useState(false);

  console.log("phone number: " + phoneNumber);


  // Function to validate phone number
  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  // Function to handle OTP request

  const handleSendOTP = async () => {
    if (phoneNumber.trim() === "") {
      Alert.alert("Please enter a phone number");
      return;
    } else if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert("Invalid Phone Number", "Enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        "mobile": phoneNumber
      };
      const response = await sendOtp(payload);

      console.log("✅ API Response:", response);

      if (response.status === 200) {
        Alert.alert("OTP Sent", "A verification code has been sent to your number.");
        navigation.navigate("VerifyOTP", { phone: phoneNumber });
      } else {
        Alert.alert("Error", response?.data?.message || "Failed to send OTP.");
      }
    } catch (error: any) {
      console.error("API Error:", error);

      let errorMessage = "Something went wrong. Please try again.";

      if (error.response) {
        console.error(" API Error Response:", error.response);
        const { status, data } = error.response;

        if (status === 400) {
          errorMessage = data?.message || "Invalid request. Please check your input.";
        } else if (status === 401) {
          errorMessage = "Unauthorized. Please log in again.";
        } else if (status === 500) {
          errorMessage = "Server error. Please try again later.";
        }
      } else if (error.message) {
        errorMessage = error.message;
      }

      Alert.alert(`Error (Code: ${error.response?.status || "Unknown"})`, errorMessage);
    } finally {
      setLoading(false);
    }
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../../resources/images/LoginImg.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
          <Image source={images.IC_LOGO} style={styles.logo} />
        </View>

        <View style={styles.container}>
          <Text style={styles.heading}>Sign Up/Sign in to your account</Text>
          {/* Phone Input */}
          <View style={styles.phoneInputContainer}>
            <TouchableOpacity style={styles.countryCodeContainer}>
              <Image source={images.IC_FLAG} style={styles.flagIcon} />
              <Image
                source={images.IC_DOWN_ARROW}
                style={styles.downArrowIcon}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone"
              placeholderTextColor="#A0AEC0"
              keyboardType="phone-pad"
              maxLength={10}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <Image source={images.IC_TELEPHONE} style={styles.phoneIcon} />
          </View>

          {/* Get OTP Button */}
          <Button
            title={StringConstants.GET_OTP}
            onPress={handleSendOTP}
            // onPress={() => navigation.navigate("VerifyOTP")}
            disabled={loading}
            loading={loading}
            style={styles.button}
          />

          {/* Separator: "Or" */}
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
        </View>

        {/* CONNECT WALLET Button */}
        <Button
          title={StringConstants.CONNECT_WALLET}
          // onPress={handleSendOTP}
          disabled={loading}
          loading={loading}
          style={styles.WalletButton}
          titleStyle={{ color: "black" }}
        />

      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;
