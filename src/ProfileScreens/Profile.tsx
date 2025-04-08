import React, {useEffect, useState} from 'react';
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
import {spacing} from '../../utils/deviceDimensions';
import {StringConstants} from '../../constants/StringConstants';
import {useNavigation, useRoute} from '@react-navigation/native';
import TextInputField from '../../components/TextInputField';
import Button from '../../components/Button';
import images from '../../resources/images';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {setupProfile} from '../../store/slices/authSlice';
import {navigate} from '../../navigation/navigationRef';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {ScreenConstants} from '../../constants/ScreenConstants';
import DateTimePicker from '@react-native-community/datetimepicker';
const Profile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const route = useRoute(); // Get route params
  const [isPublic, setIsPublic] = useState(true);
  const [userName, setUserName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('92231312312');
  const [referralCode, setReferralCode] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [bio, setBio] = useState('');
  const navigation = useNavigation();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);

  // Gender select karne ka function
  const handleGenderSelect = selectedGender => {
    setGender(selectedGender);
    setShowGenderModal(false);
  };
  // Date Picker ko show karne ka function
  // const handleDateChange = (event, selectedDate) => {
  //   setShowDatePicker(false);
  //   if (selectedDate) {
  //     const formattedDate = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD format
  //     setDob(formattedDate);
  //   }
  // };
  const handleDateChange = (event, selectedDate) => {
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
        setDob(null); // Reset DOB if user is under 18
      } else {
        const formattedDate = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD format
        setDob(formattedDate);
      }
    }
  };
  
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  const togglePublic = () => {
    setIsPublic(prev => !prev);
  };

  const handleImagePick = type => {
    const options = {mediaType: 'photo', quality: 1};
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
    setModalVisible(false);
  };

  useEffect(() => {
    if (route?.params?.phoneNumber) {
      setPhoneNumber(route?.params?.phoneNumber); // Prefill phone number
    }
  }, [route.params]);

  const handleContinue = async () => {
    const formData = new FormData();

    formData.append('name', userName);
    formData.append('dob', dob);
    formData.append('gender', gender);
    formData.append('mobile', phoneNumber);
    formData.append('referredBy', referralCode);
    formData.append('bio', bio);
    formData.append('isPrivate', isPublic.toString()); // Convert boolean to string

    // Append profile image if exists
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
        console.log(
          '🚀 Profile Setup Success:',
          JSON.stringify(response.payload),
        );

        // Navigate to Main screen after success
        navigate(ScreenConstants.WALLET_PERFERENCE);
      } else {
        console.error('❌ Profile Setup Failed. No response payload.');
      }
    } catch (error) {
      console.error('❌ Profile Setup Error:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A1024" />

      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
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
                ? {uri: profileImage}
                : require('../../resources/images/women.png')
            }
            style={styles.profileImage}
          />
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() => setModalVisible(true)}>
            <Image
              source={require('../../resources/images/cameraicon.png')}
              style={styles.cameraIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal transparent visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => handleImagePick('camera')}
              style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleImagePick('gallery')}
              style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Choose from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeModalButton}>
              <Text style={[styles.modalOptionText, {color: 'red'}]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Title and Public Toggle */}
      {/* <View style={styles.titleContainer}>
        <Text style={styles.title}>My Profile</Text>
        <View style={styles.publicContainer}>
          <Text style={styles.publicText}>Public</Text>
          <TouchableOpacity
            style={[
              styles.toggleContainer,
              isPublic && { backgroundColor: "#555" },
            ]}
            onPress={togglePublic}
          >
            <View
              style={[styles.toggleButton, isPublic && { marginLeft: 20 }]}
            />
          </TouchableOpacity>
        </View>
      </View> */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Profile</Text>
        <View style={styles.publicContainer}>
          <Text style={styles.publicText}>
            {isPublic ? 'Public' : 'Private'}
          </Text>
          <TouchableOpacity
            style={[
              styles.toggleContainer,
              {backgroundColor: isPublic ? '#D9D9D980' : '#0360D2'}, // Green for public, Red for private
            ]}
            onPress={togglePublic}>
            <View
              style={[
                styles.toggleButton,
                isPublic
                  ? {marginLeft: 18, backgroundColor: 'white'}
                  : {marginLeft: 0, backgroundColor: 'white'},
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
          containerStyle={{marginBottom: spacing.medium}}
          inputWrapperStyles={{width: '100%'}}
          style={{
            // backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backgroundColor: '#0A1024',
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
            containerStyle={{marginBottom: 0}}
            inputWrapperStyles={{width: '100%'}}
            style={{
              backgroundColor: '#0A1024',
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
            containerStyle={{marginBottom: 0}}
            inputWrapperStyles={{width: '100%'}}
            style={{
              backgroundColor: '#0A1024',
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
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.phoneInput}
          keyboardType="phone-pad"
        />
        <TouchableOpacity>
          <Image source={images.IC_TELEPHONE} style={styles.phoneIcon} />
        </TouchableOpacity>
      </View>

      {/* Referral Code */}
      <Text style={styles.referralText}>Have a Referral Code</Text>
      <TextInputField
        placeholder="Enter Code"
        value={referralCode}
        onChangeText={setReferralCode}
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        containerStyle={{marginBottom: spacing.medium}}
        inputWrapperStyles={{width: '100%'}}
        style={{
          backgroundColor: '#0A1024',
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
        containerStyle={{marginBottom: spacing.medium}}
        inputWrapperStyles={{width: '100%'}}
        style={[
          {
            backgroundColor: '#0A1024',
            color: 'white',
            borderColor: '#27303F',
            paddingTop: spacing.medium,
            borderRadius: 17,
          },
          styles.bioInput,
        ]}
        multiline={true}
        numberOfLines={4}
      />

      {/* Save Button */}
      <Button
        title={StringConstants.SAVE}
        style={styles.secondButton}
        variant="primary"
        onPress={handleContinue}
      />

      {/* Bottom spacing */}
      <View style={{height: 40}} />

      {showDatePicker && (
        <DateTimePicker
        
          value={dob ? new Date(dob) : new Date()}
          mode="date"
          display="spinner"
          maximumDate={new Date()} // Future dates allow na kare
          onChange={handleDateChange}
        />
      )}

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
              <Text style={[styles.modalOptionText, {color: 'red'}]}>
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
