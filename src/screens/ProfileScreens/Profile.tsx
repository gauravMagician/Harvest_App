import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import styles from './styles';
import { scaleSizeHeight, spacing } from '../../utils/deviceDimensions';
import { StringConstants } from '../../constants/StringConstants';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import images from '../../resources/images';
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextInputField from '../../component/TextInputField';
import Button from '../../component/Button';
import { ScreenConstants } from '../../constants/ScreenConstants';
import { useDispatch } from 'react-redux';
import { setupProfile } from '../../store/slices/authSlice';
import { AppDispatch } from '../../store';

interface RouteParams {
  phoneNumber?: string;
}

type ProfileScreenRouteProp = RouteProp<{ Profile: RouteParams }, 'Profile'>;

const Profile: React.FC = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const [isPublic, setIsPublic] = useState(true);
  const [userName, setUserName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [bio, setBio] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenderSelect = (selectedGender: any) => {
    setGender(selectedGender);
    setShowGenderModal(false);
  };



  // Date Picker change function
  const handleDateChange = (event: any, selectedDate: any) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const today = new Date();
      const birthDate = new Date(selectedDate);

      // Age Calculation
      const ageDiff = today.getFullYear() - birthDate.getFullYear();
      const isUnder18 =
        ageDiff < 18 ||
        (ageDiff === 18 &&
          (today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() &&
              today.getDate() < birthDate.getDate())));

      if (isUnder18) {
        Alert.alert("Age Restriction", "You must be 18+ years old.");
        setDob(''); // Reset DOB if under 18
      } else {
        const formattedDate = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD format
        setDob(formattedDate);
      }
    }
  };

  const togglePublic = () => {
    setIsPublic((prev) => !prev);
  };

  // Handle image selection (camera or gallery)

  const handleImagePick = (type: 'camera' | 'gallery') => {
    const options = { mediaType: 'photo', quality: 1 };
    if (type === 'camera') {
      launchCamera(options, response => {
        if (!response.didCancel && !response.error) {
          setProfileImage(response.assets[0].uri);
        }
      });
    } else {
      launchImageLibrary(options, response => {
        if (!response.didCancel && !response.error) {
          setProfileImage(response.assets[0].uri);
        }
      });
    }
  };

  useEffect(() => {
    if (route?.params?.phoneNumber) {
      setPhoneNumber(route?.params?.phoneNumber); // Prefill phone number
    }
  }, [route.params]);

  



    // const handleContinue = async () => {
    //   const formData = new FormData();

    //   formData.append('name', userName);
    //   formData.append('dob', dob);
    //   formData.append('gender', gender);
    //   formData.append('mobile', phoneNumber);
    //   formData.append('referredBy', referralCode);
    //   formData.append('bio', bio);
    //   formData.append('isPrivate', isPublic.toString()); // Convert boolean to string

    //   // Append profile image if exists
    //   if (profileImage) {
    //     formData.append('profilePic', {
    //       uri: profileImage,
    //       name: 'profile.jpg',
    //       type: 'image/jpeg',
    //     });
    //   }

    //   try {
    //     const response = await dispatch(setupProfile(formData));
    //     console.log(">>>>>response", response)
    //     if (response.payload) {
    //       console.log(
    //         '🚀 Profile Setup Success:',
    //         JSON.stringify(response.payload),
    //       );
    //       Alert.alert("Profile Setup Success:");

    //       // Navigate to Main screen after success
    //       navigation.navigate(ScreenConstants.WALLET_PERFERENCE);
    //     } else {
    //       console.error('❌ Profile Setup Failed. No response payload.');
    //     }
    //   } catch (error) {
    //     console.error('❌ Profile Setup Error:', error);
    //   }
    // };

    const handleContinue = async () => {
      // ✅ Validation checks
      if (!userName.trim()) {
        Alert.alert("Validation Error", "Please enter your user name.");
        return;
      }
    
      if (!dob) {
        Alert.alert("Validation Error", "Please select your date of birth.");
        return;
      }
    
      if (!gender) {
        Alert.alert("Validation Error", "Please select your gender.");
        return;
      }
    
      if (!phoneNumber.trim()) {
        Alert.alert("Validation Error", "Please enter your phone number.");
        return;
      }
    
      if (phoneNumber.length < 10) {
        Alert.alert("Validation Error", "Please enter a valid phone number.");
        return;
      }
    
      if (bio.length > 0 && bio.length < 10) {
        Alert.alert("Validation Error", "Bio should be at least 10 characters.");
        return;
      }
    
      // ✅ Create FormData for API call
      const formData = new FormData();
      formData.append('name', userName);
      formData.append('dob', dob);
      formData.append('gender', gender);
      formData.append('mobile', phoneNumber);
      formData.append('referredBy', referralCode);
      formData.append('bio', bio);
      formData.append('isPrivate', isPublic.toString());
    
      if (profileImage) {
        formData.append('profilePic', {
          uri: profileImage,
          name: 'profile.jpg',
          type: 'image/jpeg',
        });
      }
    
      try {
        const response = await dispatch(setupProfile(formData));
        if (response.payload) {
          Alert.alert("Profile Setup Success");
          navigation.navigate(ScreenConstants.WALLET_PERFERENCE);
        } else {
          console.error('❌ Profile Setup Failed. No response payload.');
        }
      } catch (error) {
        console.error('❌ Profile Setup Error:', error);
      }
    };
    

    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#01081A" />
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image
              source={require('../../resources/images/backicon.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={
                profileImage
                  ? { uri: profileImage }
                  : require('../../resources/images/women.png')
              }
              style={styles.profileImage}
            />
            <TouchableOpacity
              style={styles.cameraButton}
              onPress={() => handleImagePick('gallery')}>
              <Image
                source={require('../../resources/images/cameraicon.png')}
                style={styles.cameraIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Title and Public Toggle */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Profile</Text>
          <View style={styles.publicContainer}>
            <Text style={styles.publicText}>
              {isPublic ? 'Public' : 'Private'}
            </Text>
            <TouchableOpacity
              style={[
                styles.toggleContainer,
                { backgroundColor: isPublic ? '#D9D9D980' : '#0360D2' }, // Green for public, Red for private
              ]}
              onPress={togglePublic}>
              <View
                style={[
                  styles.toggleButton,
                  isPublic
                    ? { marginLeft: 18, backgroundColor: 'white' }
                    : { marginLeft: 0, backgroundColor: 'white' },
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* User Name Input with Image Icon */}
        <View style={styles.inputIconContainer}>
          <Image
            source={require('../../resources/images/user.png')}
            style={styles.user}
          />
          <TextInputField
            placeholder="User Name"
            value={userName}
            onChangeText={setUserName}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            containerStyle={{ marginBottom: spacing.medium }}
            inputWrapperStyles={{ width: '100%' }}
            style={{
              backgroundColor: '#01081A',
              color: 'white',
              borderColor: '#27303F',
              borderRadius: 17,
              paddingLeft: 40, // extra padding to avoid overlap
            }}
          />
        </View>

        {/* DOB and Gender Inputs with Image Icons */}
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={[styles.inputIconContainer, styles.halfWidthInput]}>
            <Image
              resizeMode="contain"
              source={require('../../resources/images/calendar.png')}
              style={styles.dob}
            />
            <TextInputField
              placeholder="DOB"
              value={dob}
              editable={false} // User manually type na kar sake
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              containerStyle={{ marginBottom: 0 }}
              inputWrapperStyles={{ width: '100%' }}
              style={{
                backgroundColor: '#01081A',
                color: 'white',
                borderColor: '#27303F',
                borderRadius: 17,
                paddingLeft: 40,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowGenderModal(true)}
            style={[styles.inputIconContainer, styles.halfWidthInput]}>
            <Image
              resizeMode="contain"
              source={require('../../resources/images/gender.png')}
              style={styles.inputIcon}
            />
            <TextInputField
              placeholder="Gender"
              value={gender}
              editable={false} // User manually type na kare
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              containerStyle={{ marginBottom: 0 }}
              inputWrapperStyles={{ width: '100%' }}
              style={{
                backgroundColor: '#01081A',
                color: 'white',
                borderColor: '#27303F',
                borderRadius: 17,
                paddingLeft: 40,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Phone Number Input */}
        <View style={styles.phoneInputContainer}>
          <Image source={images.IC_FLAG} style={styles.countryFlag} />
          <Image source={images.IC_DOWN_ARROW} style={styles.dropdownIcon} />
          <TextInput
            placeholder='Enter Phone Number'
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={styles.phoneInput}
            keyboardType="phone-pad"
            placeholderTextColor={"#27303F"}
          />
          <TouchableOpacity>
            <Image source={images.IC_TELEPHONE} style={styles.phoneIcon} />
          </TouchableOpacity>
        </View>

        {/* Referral Code */}
        <Text style={styles.referralText}>Have a Referral Code ?</Text>
        <TextInputField
          placeholder="Enter Code"
          value={referralCode}
          onChangeText={setReferralCode}
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          containerStyle={{ marginBottom: scaleSizeHeight(18) }}
          inputWrapperStyles={{ width: '100%' }}
          style={{
            backgroundColor: '#01081A',
            color: 'white',
            borderColor: '#27303F',
            borderRadius: 17,
          }}
        />
        {/* Bio Input */}
        <TextInputField
          placeholder="Bio"
          value={bio}
          onChangeText={setBio}
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          containerStyle={{ marginBottom: spacing.medium }}
          inputWrapperStyles={{ width: '100%' }}
          style={[
            {
              backgroundColor: '#01081A',
              color: 'white',
              borderColor: '#27303F',
              paddingTop: spacing.medium,
              borderRadius: 17,
            },
            styles.bioInput,
          ]}
          multiline={true}
          numberOfLines={6}
        />

        {/* Save Button */}
        <Button
          title={StringConstants.SAVE}
          onPress={handleContinue}
          // onPress={() => navigation.navigate("WalletPreferenceScreen")}
          style={styles.button}
          variant="primary"
        />

        {/* Date picker  */}
        <View style={{ height: 40 }} />

        {showDatePicker && (
          <DateTimePicker
            value={dob ? new Date(dob) : new Date()}
            mode="date"
            display="spinner"
            maximumDate={new Date()} // Future dates allow na kare
            onChange={handleDateChange}
          />
        )}

        {/* modal for the gander */}
        <Modal transparent visible={showGenderModal} animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Gender</Text>

              <TouchableOpacity
                onPress={() => handleGenderSelect('Male')}
                style={styles.modalOption}>
                <Text style={styles.modalOptionText}>Male</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleGenderSelect('Female')}
                style={styles.modalOption}>
                <Text style={styles.modalOptionText}>Female</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleGenderSelect('Other')}
                style={styles.modalOption}>
                <Text style={styles.modalOptionText}>Other</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setShowGenderModal(false)}
                style={styles.closeModalButton}>
                <Text style={[styles.modalOptionText, { color: 'red' }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </ScrollView>
    );
  };

  export default Profile;
