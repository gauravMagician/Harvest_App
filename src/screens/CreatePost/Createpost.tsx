import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
} from 'react-native-vision-camera';
import { launchImageLibrary } from 'react-native-image-picker';
import styles from './styles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import images from '../../resources/images';
import { StackNavigationProp } from '@react-navigation/stack';
import { CreatePostStackParamList } from '../../navigation/CratePostSatck/CreatePostStack';

const CreatePost = () => {
  const navigation = useNavigation<StackNavigationProp<CreatePostStackParamList>>();
  const route = useRoute<RouteProp<CreatePostStackParamList, 'CreatePost'>>();
  const videoUri = route.params?.videoUri;
  const cameraRef = useRef<Camera | null>(null);
  const devices = useCameraDevices();
  const device = devices.find(d => d.position === 'back');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [cameraPosition, setCameraPosition] = useState<'back' | 'front'>(
    'back',
  );
  const [activeTab, setActiveTab] = useState<'Post' | 'Reels' | 'Live' | 'Videos'>('Post');


  useEffect(() => {
    if (videoUri) {
      console.log('Selected video URI:', videoUri);
    }
  }, [videoUri]);


  useEffect(() => {
    const requestCameraPermission = async () => {
      const cameraPermission: CameraPermissionStatus =
        await Camera.requestCameraPermission();

      if (cameraPermission === 'granted') {
        console.log('✅ Camera permission granted');
        setHasPermission(true);
      } else {
        console.warn('❌ Camera permission not granted');
        setHasPermission(false);
      }
    };

    requestCameraPermission();
  }, []);

  // ✅ Capture Photo
  const takePhoto = async () => {
    if (!cameraRef.current) return;
    try {
      const photo = await cameraRef.current.takePhoto();
      console.log('📷 Photo saved at:', photo.path);
      setSelectedImage('file://' + photo.path);
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };

  // ✅ Handle Image Picking
  const pickImage = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if (result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri || null);
    }
  };

  // ✅ Handle Video Recording
  const startRecording = async () => {
    if (!cameraRef.current || isRecording) return;
    setIsRecording(true);
    try {
      await cameraRef.current.startRecording({
        flash: 'off',
        onRecordingFinished: video => {
          console.log('📹 Video saved at:', video.path);
          setIsRecording(false);
        },
        onRecordingError: error => {
          console.error('Recording error:', error);
          setIsRecording(false);
        },
      });
    } catch (error) {
      console.error('Error starting recording:', error);
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (cameraRef.current && isRecording) {
      cameraRef.current.stopRecording();
      setIsRecording(false);
    }
  };

  // ✅ Switch Camera
  const switchCamera = () => {
    setCameraPosition(prev => (prev === 'back' ? 'front' : 'back'));
  };

  //  Handle No Permission Case
  if (!hasPermission) {
    return (
      <Text style={{ color: 'white', textAlign: 'center', marginTop: 50 }}>
        Camera permission not granted
      </Text>
    );
  }

  //  Handle No Camera Available Case
  if (!device) {
    return (
      <Text style={{ color: 'white', textAlign: 'center', marginTop: 50 }}>
        No camera available
      </Text>
    );
  }

  return (
    <>
      <View style={styles.container}>
        {/* 📷 Camera View */}
        <Camera
          ref={cameraRef}
          style={styles.camera}
          device={device}
          isActive={true}
          video={true}
          photo={true}
        />

        {/* 🖼 Show Selected Image Preview */}
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.preview} />
        )}

        {/* 📍 Top Tab Navigation */}
        <View style={styles.tabContainer}>
          {['Post', 'Reels', 'Live', 'Videos'].map(tab => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab ? styles.activeTab : styles.transparentTab,
              ]}
              onPress={() => {
                if (tab === 'Videos') {
                  navigation.navigate('Videos');
                } else if (tab === 'Reels') {
                  navigation.navigate('Reels');
                } else if (tab === 'Live') {
                  navigation.navigate('Live');
                } else {
                  setActiveTab(tab as 'Post' | 'Reels' | 'Live');
                }

              }}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* 🎮 Controls */}
        <View style={styles.controls}>
          {/* 📁 Open Gallery */}
          <TouchableOpacity style={styles.iconButton} onPress={pickImage}>
            <Image source={images.IC_GALLERY} style={styles.icon} />
          </TouchableOpacity>

          {/* ⚡ Flash Toggle */}
          <TouchableOpacity style={styles.iconButton}>
            <Image source={images.FLASH} style={styles.icon} />
          </TouchableOpacity>

          {/* 🎥 Start/Stop Video Recording */}
          <TouchableOpacity
            style={styles.recordButton}
            onPress={isRecording ? stopRecording : startRecording}>
            <View
              style={[styles.recordCircle, isRecording && styles.recording]}
            />
          </TouchableOpacity>

          {/* 🔄 Switch Camera */}
          <TouchableOpacity style={styles.iconButton} onPress={switchCamera}>
            <Image source={images.CHANGE_CAMERA} style={styles.icon} />
          </TouchableOpacity>

          {/* 😀 Face Filter */}
          <TouchableOpacity style={styles.iconButton}>
            <Image source={images.FACE_FILTER} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CreatePost;
