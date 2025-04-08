// OtpScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import images from '../../../../resources/images';
const PhoneNumberChange = () => {
  const navigation = useNavigation()
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [resending, setResending] = useState(false);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={images.IC_BACK}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Phone</Text>
        </View>

        <View style={styles.innerView}>
          <Text style={styles.title}>Enter your phone number</Text>
          <View style={styles.phoneInputContainer}>
            {/* Country code + Flag + Down arrow */}
            <TouchableOpacity style={styles.countryCodeContainer}>
              <Image
                source={images.IC_FLAG}
                style={styles.flagIcon}
              />
              <Image
                source={require('../../../../resources/images/down-arrow.png')}
                style={styles.downArrowIcon}
              />
            </TouchableOpacity>
            {/* Actual phone input */}
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone"
              placeholderTextColor="#A0AEC0"
              keyboardType="phone-pad"
            />
            {/* Phone icon on right */}
            <Image
              source={images.IC_TELEPHONE}
              style={styles.phoneIcon}
            />
          </View>
          <TouchableOpacity style={styles.otpButton}>
            <Text style={styles.otpButtonText}>Get OTP</Text>
          </TouchableOpacity>
          <View style={styles.innerCodeView}>
            <Text style={styles.otpHeader}>Enter your Code</Text>
            <Text style={styles.otpSubText}>
              Enter the verification code that we have sent to your phone
            </Text>

            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.otpBox}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={value => handleOtpChange(value, index)}
                />
              ))}
            </View>
            <View style={styles.resendWrapper}>
              <TouchableOpacity disabled={resending} style={styles.resendview}>
                <Text style={styles.resendText}>
                  {resending ? "Resending..." : "Resend Code"}
                </Text>
                <Image
                  source={require("../../../../resources/images/resendicon.png")}
                  style={styles.resendCircleImage}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.ContinueButton}>
              <Text style={styles.ContiuneButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default PhoneNumberChange;
