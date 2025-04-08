

import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    FlatList,
    Image,
    TouchableOpacity,
    Text,
    PermissionsAndroid,
    Platform,
    Alert,
    BackHandler,
    ActivityIndicator,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { CameraRoll, PhotoIdentifier } from '@react-native-camera-roll/camera-roll';
import styles from './styles';
import images from '../../../resources/images';
import Video from 'react-native-video';

const VideoSelection = () => {
    const navigation = useNavigation<any>();
    const [videos, setVideos] = useState<PhotoIdentifier[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        requestGalleryPermission();
    }, []);

    const requestGalleryPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
                    {
                        title: 'Gallery Permission',
                        message: 'This app needs access to your videos',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    fetchVideos();
                } else {
                    Alert.alert('Permission Required', 'Please allow access to view your videos.');
                    setLoading(false);
                }
            } catch (err) {
                console.log('Permission request error:', err);
                setLoading(false);
            }
        } else {
            fetchVideos(); // iOS
        }
    };

    const fetchVideos = async () => {
        try {
            setLoading(true);
            const result = await CameraRoll.getPhotos({
                first: 100,
                assetType: 'Videos',
            });

            // Filter videos that are less than 60 seconds (optional)
            const filteredVideos = result.edges.filter(
                video => video.node.image.playableDuration <= 60
            );

            setVideos(filteredVideos);
            if (filteredVideos.length > 0) {
                setSelectedVideo(filteredVideos[0].node.image.uri);
            }
        } catch (err) {
            console.log('Failed to load videos:', err);
            Alert.alert('Error', 'Failed to load videos from your gallery.');
        } finally {
            setLoading(false);
        }
    };

    const handleBackPress = () => {
        if (selectedVideo) {
            Alert.alert(
                'Unsaved Changes',
                'You have selected a video. Do you want to post it or discard?',
                [
                    {
                        text: 'Discard',
                        style: 'destructive',
                        onPress: () => navigation.goBack(),
                    },
                    {
                        text: 'Post',
                        onPress: () => handleConfirmSelection(),
                    },
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                ]
            );
            return true;
        }
        return false;
    };

    useFocusEffect(
        useCallback(() => {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
            return () => backHandler.remove();
        }, [selectedVideo])
    );

    const handleConfirmSelection = () => {
        if (selectedVideo) {
            navigation.navigate('CreatePost', { videoUris: [selectedVideo] });
        }
    };

    const renderVideoItem = ({ item }: { item: PhotoIdentifier }) => {
        const uri = item.node.image.uri;

        return (
            <TouchableOpacity
                style={styles.videoItem}
                onPress={() => setSelectedVideo(uri)}
            >
                <Image 
                    source={{ uri }} 
                    style={styles.thumbnail} 
                    resizeMode="cover"
                />
                <Image source={images.IC_VIDEOS} style={styles.playIcon} />
                <Text style={styles.durationText}>
                    {formatDuration(item.node.image.playableDuration)}
                </Text>
            </TouchableOpacity>
        );
    };

    // Helper function to format duration (seconds to MM:SS)
    const formatDuration = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Image source={images.IC_BACK} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.selectText}>Select Video</Text>
                <TouchableOpacity
                    disabled={!selectedVideo}
                    onPress={handleConfirmSelection}
                >
                    <Image 
                        source={images.IC_REELS} 
                        style={[
                            styles.checkIcon,
                            !selectedVideo && { tintColor: 'gray' }
                        ]} 
                    />
                </TouchableOpacity>
            </View>

            {/* Top section - Video preview */}
            <View style={styles.previewContainer}>
                {selectedVideo ? (
                    <Video
                        source={{ uri: selectedVideo }}
                        style={styles.previewVideo}
                        resizeMode="contain"
                        muted={false}
                        repeat
                        controls
                    />
                ) : (
                    <View style={styles.noPreview}>
                        <Text style={styles.noPreviewText}>No video selected</Text>
                    </View>
                )}
            </View>

            {/* Bottom section - Video gallery */}
            <View style={styles.galleryContainer}>
                {loading ? (
                    <ActivityIndicator size="large" color="gray" style={styles.loader} />
                ) : videos.length === 0 ? (
                    <View style={styles.emptyGallery}>
                        <Text style={styles.emptyText}>No videos found in your gallery</Text>
                        <TouchableOpacity 
                            style={styles.refreshButton}
                            onPress={fetchVideos}
                        >
                            <Text style={styles.refreshText}>Refresh</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <FlatList
                        data={videos}
                        numColumns={3}
                        keyExtractor={(item) => item.node.image.uri}
                        renderItem={renderVideoItem}
                        contentContainerStyle={styles.grid}
                        showsVerticalScrollIndicator={false}
                        initialNumToRender={12}
                        maxToRenderPerBatch={12}
                        windowSize={7}
                    />
                )}
            </View>
        </View>
    );
};

export default VideoSelection;