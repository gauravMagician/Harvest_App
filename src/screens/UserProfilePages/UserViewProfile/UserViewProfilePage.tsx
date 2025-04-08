import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { styles } from './styles';
import { launchImageLibrary } from "react-native-image-picker";
import { useNavigation } from '@react-navigation/native';
import images from '../../../resources/images';
import TextInputField from '../../../component/TextInputField';
import { scaleSizeHeight, scaleSizeWidth, spacing } from '../../../utils/deviceDimensions';
import Button from '../../../component/Button';
import { StringConstants } from '../../../constants/StringConstants';
const UserViewProfilePage = () => {
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const navigation = useNavigation()
  const [profileImage, setProfileImage] = useState(null);
  const [toggleStates, setToggleStates] = useState([true, false, true]);


  const togglePublic = (index: number) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
  };



  // Function to open gallery
  const openGallery = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };

    launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        Alert.alert("Error", "Something went wrong while selecting an image.");
      } else {
        setProfileImage(response.assets[0].uri); // Set selected image
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.goBack()}>
          <Image
            source={images.IC_BACK}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Image
            source={images.IC_MORE}
            style={styles.shareIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {/* Profile Image */}
        <View style={styles.profileSection}>
          <Image
            source={require('../../../resources/images/userpublic.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraButton} onPress={openGallery}>
            <Image
              source={images.IC_CAMERAICON}
              style={styles.cameraIcon}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.profileName}>Carl Pate</Text>
            <Image
              source={images.IC_BULETICK}
              style={styles.smallIcon}
            />
          </View>
        </View>

        <View style={styles.toggleViewContainer}>
          <Text style={styles.toggleLabel}>My Profile</Text>
          <View style={styles.switchView}>
            <Text style={styles.Label}>Public</Text>
            <TouchableOpacity
              style={[styles.toggleContainer, { backgroundColor: toggleStates[0] ? '#0360D2' : '#D9D9D980' }]}
              onPress={() => togglePublic(0)}>
              <View style={[styles.toggleButton, toggleStates[0] ? { marginLeft: 18 } : { marginLeft: 0 }]} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Details */}
        <View style={styles.detailsSection}>
          <View >
            <Image
              source={images.IC_USERICONS}
              style={styles.user}
            />
            <TextInputField
              placeholder="User Name"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              containerStyle={{ marginBottom: spacing.medium }}
              inputWrapperStyles={{ width: '100%' }}
              style={{
                backgroundColor: '#01081A',
                color: 'white',
                borderColor: '#27303F',
                borderRadius: 17,
                paddingLeft: 40,
              }}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.halfWidthInput}>
              <Image
                source={images.IC_CALENDER}
                style={styles.dob}
              />
              <TextInputField
                placeholder="DOB"
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
            </View>
            <View style={styles.halfWidthInput}>
              <Image
                source={images.IC_GENDER}
                style={styles.dob}
              />
              <TextInputField
                placeholder="Gender"
                // value={dob}
                // onChangeText={setDob}
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
            </View>
          </View>
          <View style={styles.phoneInputContainer}>
            <Image
              source={images.IC_FLAG}
              style={styles.flag}
            />
            <Image
              source={images.IC_DOWNICONS}
              style={styles.dropdownIcon}
            />
            <TextInput
              // value={phoneNumber}
              // onChangeText={setPhoneNumber}
              style={styles.phoneInput}
              keyboardType="phone-pad"
              placeholder="Enter your phone number"
              placeholderTextColor={'#A0AEC0'}
            />
            <TouchableOpacity>
              <Image
                source={images.IC_TELEPHONE}
                style={styles.phoneIcon}
              />
            </TouchableOpacity>
          </View>
          <TextInputField
            value="ABCD............1241522"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            containerStyle={{ marginBottom: 0 }}
            inputWrapperStyles={{ width: '100%' }}
            style={{
              backgroundColor: '#01081A',
              color: 'white',
              borderColor: '#27303F',
              borderRadius: 17,
              marginTop: 10,
              marginBottom: 10,
            }}
          />

          <Text style={styles.label}>Referral Code</Text>
          <TextInputField
            value="qcgadHt12359"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            containerStyle={{ marginBottom: 0 }}
            multiline={true}
            numberOfLines={6}
            inputWrapperStyles={{ width: '100%' }}
            style={{
              backgroundColor: '#01081A',
              color: 'white',
              borderColor: '#27303F',
              borderRadius: 17,
              marginTop: 10,
              marginBottom: 10,
            }}
          />

          <TextInput
            style={styles.textArea}
            multiline={true}
            placeholder="Enter the text"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
          {/* Save Button */}
          <Button
            title={StringConstants.SAVE}
            style={styles.Button}
            variant="primary"
          // onPress={handleContinue}
          />

          {/* Buy Subscription */}
          <Text style={styles.label}>Buy Subscription</Text>
          <View style={styles.BuyViewSubscription}>
            {/* <TextInput
              style={styles.BuytextArea}
              multiline={true}
              placeholder="Enter the text"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            /> */}
            <Text style={{color:"#A0AEC0", marginLeft:scaleSizeWidth(20),marginVertical:scaleSizeHeight(7)}}>Lorem ipsum dolor ametbd nbd dhfbhjbn</Text>
            <Button
              title={StringConstants.BUY_MEMBERSHIP}
              style={styles.secondButton}
              variant="primary"
              onPress={() => navigation.navigate("BuyMembershipScreen")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserViewProfilePage;
