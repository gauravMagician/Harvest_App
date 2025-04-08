import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import images from '../../../resources/images';
import styles from './styles';
import { Camera } from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native';

const ReelsRecording = () => {
    const navigation = useNavigation<any>();
    const [isRecording, setIsRecording] = useState(false);
    const cameraRef = useRef<Camera | null>(null);
    const stopRecording = () => {
        if (cameraRef.current && isRecording) {
            cameraRef.current.stopRecording();
            setIsRecording(false);
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

    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={images.IC_BACK} style={styles.iconBack} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addSoundButton}>
                    <Text style={styles.addSoundText}>Add Sound</Text>
                </TouchableOpacity>
                <View style={styles.topRight}>
                    <Text style={styles.timerText}>30s</Text>
                    <TouchableOpacity>
                        <Image source={images.IC_REELS} style={styles.checkIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Bottom Bar */}
            <View style={styles.bottomBar}>
                <TouchableOpacity>
                    <Image source={images.IC_GALLERY} style={styles.bottomIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={images.FLASH} style={styles.bottomIcon} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.recordButton}
                    onPress={isRecording ? stopRecording : startRecording}>
                    <View
                        style={[styles.recordCircle, isRecording && styles.recording]}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={images.CHANGE_CAMERA} style={styles.bottomIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={images.FACE_FILTER} style={styles.bottomIconWithDot} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ReelsRecording;
