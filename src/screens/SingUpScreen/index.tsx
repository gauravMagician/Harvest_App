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
import { authService } from "../../services/authService";
import { useWeb3Modal } from '@web3modal/wagmi-react-native';
import { useAccount } from "wagmi";
import { storage, StorageKeys } from "../../utils/storage";
import CountryPicker, { Country } from "react-native-country-picker-modal";

const SignUp: React.FC = () => {
  const { open } = useWeb3Modal();
  const navigation = useNavigation<any>();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [showText, setShowText] = useState(false);
  const { address, isConnected } = useAccount();
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [countryCode, setCountryCode] = useState("IN");
  const [country, setCountry] = useState<Country | null>(null);




  useEffect(() => {
    const checkWalletConnection = async () => {
      const walletConnected = await storage.getItem("walletConnected");
      const walletAddress = await storage.getItem("walletAddress");

      if (walletConnected === "true" && walletAddress) {
        try {
          // 🔁 Check if the wallet already exists in backend
          const response = await authService.verifyOtp({ walletAddress: address }); // or create a dedicated endpoint like checkWallet()

          if (response?.userId && response?.token) {
            // 🔐 Save user/token
            await storage.setItem(StorageKeys.USER, JSON.stringify(response.user));
            await storage.setItem(StorageKeys.AUTH_TOKEN, response.token);

            // ✅ Navigate directly to main app
            navigation.reset({
              index: 0,
              routes: [{ name: "BottomTab" }],
            });
          } else {
            // If wallet is stored but backend doesn’t recognize → clean storage and stay on signup
            await storage.removeItem("walletConnected");
            await storage.removeItem("walletAddress");
          }
        } catch (error) {
          console.error("Auto-login failed:", error);
          // Optional: Clear invalid wallet storage
          await storage.removeItem("walletConnected");
          await storage.removeItem("walletAddress");
        }
      }
    };

    checkWalletConnection();
  }, []);

  useEffect(() => {
    const handleWalletConnect = async () => {
      if (isConnected && address) {
        console.log("SignUp: Wallet Address:", address);

        // Save to storage
        await storage.setItem("walletConnected", "true");
        await storage.setItem("walletAddress", address);

        // 🔁 Check with backend if already registered
        try {
          const response = await authService.verifyOtp({ walletAddress: address });

          if (response?.userId && response?.token) {
            await storage.setItem(StorageKeys.USER, JSON.stringify(response.user));
            await storage.setItem(StorageKeys.AUTH_TOKEN, response.token);

            navigation.reset({
              index: 0,
              routes: [{ name: "BottomTab" }],
            });
          } else {
            // First time: go to Profile setup
            navigation.navigate("Profile", { walletAddress: address });
          }
        } catch (err) {
          console.log("Wallet connect but check failed:", err);
          navigation.navigate("Profile", { walletAddress: address });
        }
      }
    };

    handleWalletConnect();
  }, [isConnected, address]);



  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

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
      const response = await authService.sendOtp({ mobile: phoneNumber });
      // console.log("✅ API Response:////////////", response);

      if (response.success) {
        Alert.alert("OTP Sent Successfully ", response.message);

        if (
          response?.message !== "User already exists with this wallet address"
        ) {
          navigation.navigate("VerifyOTP", { phone: phoneNumber });
        } else {
          Alert.alert(
            "Account Exists",
            "This wallet is already linked to an account. Please login instead."
          );
        }
      } else {
        Alert.alert("Error", response?.message || "Failed to send OTP. Try again.");
      }
    } catch (error: any) {
      console.error("API Error:", error);
      let errorMessage = "Something went wrong. Please try again.";

      if (error.response) {
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

          <View style={styles.phoneInputContainer}>
            {/* <TouchableOpacity style={styles.countryCodeContainer}>
              <Image source={images.IC_FLAG} style={styles.flagIcon} />
              <Image source={images.IC_DOWN_ARROW} style={styles.downArrowIcon} />
            </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.countryCodeContainer}
              onPress={() => setShowCountryPicker(true)}
            >
              <CountryPicker
                withFlag
                withCallingCode={false}
                withCountryNameButton={false}
                withModal
                visible={showCountryPicker}
                countryCode={countryCode}
                onClose={() => setShowCountryPicker(false)}
                onSelect={(country: Country) => {
                  setCountryCode(country.cca2);
                  setCountry(country);
                }}
              />
              {/* <Image source={images.IC_DOWN_ARROW} style={styles.downArrowIcon} /> */}
              {showCountryPicker ? (
                <Image source={images.IC_UP_ARROW} style={styles.upArrowIcon} />
              ) : (
                <Image source={images.IC_DOWN_ARROW} style={styles.downArrowIcon} />
              )}
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

          <Button
            title={StringConstants.GET_OTP}
            onPress={handleSendOTP}
            disabled={loading}
            loading={loading}
            style={styles.button}
          />

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.line} />
          </View>
        </View>

        <View style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Connect to a wallet</Text>
          <TouchableOpacity onPress={() => setShowText(!showText)} >
            {showText ? (
              <Image source={images.IC_UP_ARROW} style={styles.upArrow} />
            ) : (
              <Image source={images.IC_DOWN_ARROW} style={styles.downlogo} />
            )}
          </TouchableOpacity>
        </View>
        {showText && (
          <View style={styles.textView}>
            <Text style={styles.bottomtext}>
              By connecting a wallet, you agree to Lorem Ipsum{" "}
              <Text style={styles.Centertext}>Terms of Service</Text> and acknowledge
              that you have read and understand the{" "}
              <Text style={styles.Centertext}>Privacy Policy</Text>.
            </Text>
          </View>
        )}

        {/* Replacing the custom Connect Wallet button with AppKitButton */}
        <Button
          title={StringConstants.CONNECT_WALLET}
          style={styles.secondButton}
          titleStyle={{ color: "black" }}
          onPress={() => open()} />;

      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;
