// import React, { useEffect, useState } from 'react';
// import {
//     View,
//     Text,
//     FlatList,
//     Image,
//     TouchableOpacity,
//     PermissionsAndroid,
//     Platform,
// } from 'react-native';
// import { CameraRoll, PhotoIdentifier } from '@react-native-camera-roll/camera-roll';
// import { styles } from './styles';
// import images from '../../../resources/images';
// import { useNavigation } from '@react-navigation/native';
// import { launchImageLibrary, Asset } from 'react-native-image-picker';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../../store';
// import { setSelectedMedia } from '../../../store/slices/mediaSlice';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../../navigation/types';

// const PostScreen = () => {
//     type NavigationProp = StackNavigationProp<RootStackParamList, 'MediaDetailsScreen'>;
//     const navigation = useNavigation<NavigationProp>();


//     const dispatch = useDispatch();
//     const selectedMedia = useSelector((state: RootState) => state.media.selectedMedia);
//     const [media, setMedia] = useState<PhotoIdentifier[]>([]);

//     useEffect(() => {
//         requestPermission();
//     }, []);

//     const requestPermission = async () => {
//         if (Platform.OS === 'android') {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
//                 {
//                     title: 'Permission',
//                     message: 'App needs access to your photos',
//                     buttonPositive: 'OK',
//                 }
//             );
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 fetchGallery();
//             }
//         } else {
//             fetchGallery();
//         }
//     };

//     const fetchGallery = async () => {
//         try {
//             const photos = await CameraRoll.getPhotos({
//                 first: 50,
//                 assetType: 'All',
//             });
//             setMedia(photos.edges);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const openSystemGalleryPicker = () => {
//         launchImageLibrary(
//             {
//                 mediaType: 'mixed',
//                 selectionLimit: 1,
//             },
//             (response) => {
//                 if (response.didCancel) {
//                     console.log('User cancelled image picker');
//                 } else if (response.assets && response.assets.length > 0) {
//                     const selectedAsset: Asset = response.assets[0];

//                     const isDuplicate = selectedMedia.some(
//                         (item) => item.uri === selectedAsset.uri
//                     );

//                     if (!isDuplicate) {
//                         const updatedMedia = [...selectedMedia, selectedAsset];
//                         dispatch(setSelectedMedia(updatedMedia));
//                     } else {
//                         console.log('Duplicate media ignored');
//                     }
//                 } else if (response.errorMessage) {
//                     console.log('Picker error: ', response.errorMessage);
//                 }
//             }
//         );
//     };

//     const handleGoBack = () => {
//         navigation.goBack();
//     };
//     const handleMediaPress = (item: Asset) => {
//         navigation.navigate('MediaSliderScreen', { selectedMedia: selectedMedia, initialIndex: selectedMedia.findIndex(m => m.uri === item.uri) });
//     };


//     const renderSelectedItem = ({ item }: { item: Asset }) => {
//         const isVideo = item.type?.includes('video');
//         return (
//             <TouchableOpacity onPress={() => handleMediaPress(item)} style={styles.mediaItem}>
//                 <Image
//                     source={{ uri: item.uri }}
//                     style={styles.mediaImage}
//                 />
//                 {isVideo && <Image source={images.VIDEO_ICON} style={styles.videoIcon} />}
//             </TouchableOpacity>
//         );
//     };


//     // const renderSelectedItem = ({ item }: { item: Asset }) => {
//     //     const isVideo = item.type?.includes('video');
//     //     return (
//     //         <View style={styles.mediaItem}>
//     //             <Image
//     //                 source={{ uri: item.uri }}
//     //                 style={styles.mediaImage}
//     //             />
//     //             {isVideo && <Image source={images.VIDEO_ICON} style={styles.videoIcon} />}
//     //         </View>
//     //     );
//     // };

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <TouchableOpacity onPress={handleGoBack}>
//                     <Image source={images.IC_BACK} style={styles.backIcon} />
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.moreView} onPress={openSystemGalleryPicker}>
//                     <Text style={styles.selectText}>Select More</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity>
//                     <Image source={images.REELS_CHECK} style={styles.checkIcon} />
//                 </TouchableOpacity>
//             </View>

//             {selectedMedia.length > 0 && (
//                 <FlatList
//                     data={selectedMedia}
//                     numColumns={3}
//                     keyExtractor={(item, index) => `selected-${index}`}
//                     renderItem={renderSelectedItem}
//                     contentContainerStyle={styles.grid}
//                 />
//             )}
//         </View>
//     );
// };

// export default PostScreen;



import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    PermissionsAndroid,
    Platform,
} from 'react-native';
import { CameraRoll, PhotoIdentifier } from '@react-native-camera-roll/camera-roll';
import { styles } from './styles';
import images from '../../../resources/images';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { launchImageLibrary, Asset } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { setCurrentMediaIndex, setSelectedMedia } from '../../../store/slices/mediaSlice';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { CreatePostStackParamList } from '../../../navigation/CratePostSatck/CreatePostStack';

const PostScreen = () => {
    const route = useRoute<RouteProp<CreatePostStackParamList, 'Post'>>(); // change 'Reels' to your screen
    const { tabTitle } = route.params;
    type NavigationProp = StackNavigationProp<RootStackParamList, 'MediaDetailsScreen'>;
    const navigation = useNavigation<NavigationProp>();

    const dispatch = useDispatch();
    const selectedMedia = useSelector((state: RootState) => state.media.selectedMedia);
    const [media, setMedia] = useState<PhotoIdentifier[]>([]);
    const [localSelectedMedias, setLocalSelectedMedias] = useState<Asset[]>([]);


    useEffect(() => {
        requestPermission();
    }, []);



    const requestPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                {
                    title: 'Permission',
                    message: 'App needs access to your photos',
                    buttonPositive: 'OK',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                fetchGallery();
            }
        } else {
            fetchGallery();
        }
    };

    const fetchGallery = async () => {
        try {
            const photos = await CameraRoll.getPhotos({
                first: 50,
                assetType: 'All',
            });
            setMedia(photos.edges);
        } catch (error) {
            console.log(error);
        }
    };

    const openSystemGalleryPicker = () => {
        launchImageLibrary(
            {
                mediaType: 'mixed',
                selectionLimit: 0, // 0 = unlimited selection
            },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.assets && response.assets.length > 0) {
                    const newSelections = response.assets.filter(
                        (newAsset) => !selectedMedia.some((item) => item.uri === newAsset.uri)
                    );

                    const updatedMedia = [...selectedMedia, ...newSelections];
                    dispatch(setSelectedMedia(updatedMedia));
                } else if (response.errorMessage) {
                    console.log('Picker error: ', response.errorMessage);
                }
            }
        );
    };


    // const handleMediaGridPress = (item: PhotoIdentifier) => {
    //     const asset: Asset = {
    //         uri: item.node.image.uri,
    //         type: item.node.type ?? 'image',
    //         fileName: item.node.image.filename,
    //     };

    //     const isAlreadySelected = selectedMedia.some((m) => m.uri === asset.uri);

    //     const updatedMedia = isAlreadySelected
    //         ? selectedMedia.filter((m) => m.uri !== asset.uri)
    //         : [...selectedMedia, asset];

    //     dispatch(setSelectedMedia(updatedMedia));
    // };

    const handleMediaGridPress = (item: PhotoIdentifier) => {
        const asset: Asset = {
            uri: item.node.image.uri,
            type: item.node.type ?? 'image',
            fileName: item.node.image.filename,
        };

        const isAlreadySelected = localSelectedMedias.some((m) => m.uri === asset.uri);

        const updatedMedia = isAlreadySelected
            ? localSelectedMedias.filter((m) => m.uri !== asset.uri)
            : [...localSelectedMedias, asset];

        setLocalSelectedMedias(updatedMedia);
    };


    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleCheckPress = () => {
        if (localSelectedMedias.length > 0) {
            navigation.navigate('MediaDetailsScreen', {
                selectedMedia: localSelectedMedias,
                initialIndex: 0,
                tabTitle,
            });
        }
    };



    const renderMediaItem = ({ item }: { item: PhotoIdentifier }) => {
        const uri = item.node.image.uri;
        const isVideo = item.node.type?.includes('video');
        const isSelected = selectedMedia.some((m) => m.uri === uri);

        return (
            <TouchableOpacity
                onPress={() => handleMediaGridPress(item)}
                style={[styles.mediaItem, isSelected && styles.selectedBorder]}
            >
                <Image source={{ uri }} style={styles.mediaImage} />
                {isVideo && <Image source={images.VIDEO_ICON} style={styles.videoIcon} />}
                {isSelected && (
                    <View style={styles.selectedOverlay}>
                        {/* You can show a check icon here */}
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Image source={images.IC_BACK} style={styles.backIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.moreView} onPress={openSystemGalleryPicker}>
                    <Text style={styles.selectText}>Select More</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleCheckPress}>
                    <Image source={images.REELS_CHECK} style={styles.checkIcon} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={media}
                numColumns={3}
                keyExtractor={(item, index) => `gallery-${index}`}
                renderItem={renderMediaItem}
                contentContainerStyle={styles.grid}
            />
        </View>
    );
};

export default PostScreen;


