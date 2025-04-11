import React, { useRef, useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Modal,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import images from '../../../resources/images';
import { styles } from './styles';
import { RootState } from '../../../store';
import { ScreenConstants } from '../../../constants/ScreenConstants';
import { useAppDispatch } from '../../../store/hooks';
import { createPost } from '../../../store/slices/homeSlice';
import { RootStackParamList } from '../../../navigation/types';

const MediaDetailsScreen = () => {
    const navigation = useNavigation<any>();
    const flatListRef = useRef<FlatList>(null);
    const dispatch = useAppDispatch()
    const selectedMedia = useSelector((state: RootState) => state.media.selectedMedia);
    const initialIndex = useSelector((state: RootState) => state.media.currentMediaIndex);
    console.log(">>>>>>>>>>>>>>>>>>>>> img", selectedMedia);

    //  Define the postData state
    const [postData, setPostData] = useState({
        title: "",
        description: "",
        tags: [],
        scheduleDate: "",
        scheduleTime: "",
        amPm: "",
        visibility: "",
        mediaFile: selectedMedia?.[0]?.uri || null,
        mediaType: selectedMedia?.[0]?.type || null,
    });
    const [visibilityModalVisible, setVisibilityModalVisible] = useState(false);
    const [tagInput, setTagInput] = useState("");
    const titleCharCount = postData.title.length;
    const descriptionCharCount = postData.description.length;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const route = useRoute<RouteProp<RootStackParamList, 'MediaDetailsScreen'>>();
    const { tabTitle } = route.params;


    useEffect(() => {
        if (flatListRef.current && initialIndex >= 0) {
            setTimeout(() => {
                flatListRef.current?.scrollToIndex({ index: initialIndex, animated: true });
            }, 100);
        }
    }, [initialIndex]);

    const handleInputChange = (name: any, value: any) => {
        setPostData((prev) => ({ ...prev, [name]: value }));
    };


    const handleAddTag = () => {
        if (tagInput.trim()) {
            const formattedTag = tagInput.startsWith("@") ? tagInput : `@${tagInput}`;
            setPostData((prev: any) => ({
                ...prev,
                tags: [...prev.tags, formattedTag],
            }));
            setTagInput("");
        }
    };

    const handleRemoveTag = (tagToRemove: any) => {
        setPostData((prev) => ({
            ...prev,
            tags: prev.tags.filter((tag) => tag !== tagToRemove),
        }));
    };

    const renderMediaItem = () => {
        const item = selectedMedia?.[0];
        if (!item) return null;

        const isVideo = item.type?.includes('video');
        return (
            <View style={styles.mediaItem}>
                <Image source={{ uri: item.uri }} style={styles.mediaImage} />
                {isVideo && <Image source={images.VIDEO_ICON} style={styles.videoIcon} />}
            </View>
        );
    };


    // ✅ Step 3: Upload (for later API call)
    // const handleSubmit = async () => {
    //     if (!postData.title.trim()) {
    //         Alert.alert("Error", "Please enter a title for your post");
    //         return;
    //     }

    //     setIsSubmitting(true);

    //     try {
    //         // Create FormData for file upload
    //         const formData = new FormData();
    //         formData.append("userId", postData.userId); // Ensure userId is included
    //         formData.append("caption", postData.caption);
    //         formData.append("description", postData.description);
    //         formData.append("postType", postData.postType);

    //         if (postData.mediaFile) {
    //             formData.append("media", {
    //                 uri: postData.mediaFile.uri,
    //                 type: postData.mediaFile.type,
    //                 name: postData.mediaFile.fileName || "media",
    //             });
    //         }

    //         // Dispatch createPost action with FormData
    //         const resultAction = await dispatch(createPost(formData));

    //         if (createPost.fulfilled.match(resultAction)) {
    //             Alert.alert("Success", "Post created successfully!");
    //             navigation.navigate(ScreenConstants.MAIN_SCREEN, {
    //                 screen: "Home",
    //             });
    //         } else {
    //             throw new Error(resultAction.payload || "Failed to create post");
    //         }
    //     } catch (error) {
    //         console.error("Error creating post:", error);
    //         Alert.alert(
    //             "Error",
    //             error.message || "Failed to create post. Please try again."
    //         );
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    const handleSubmit = async () => {
        // const cleanTags = postData.tags.map(tag => tag.replace(/^@/, ''));

        if (!postData.title.trim()) {
            Alert.alert("Error", "Please enter a title for your post");
            return;
        }
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            // Add text fields
            formData.append("caption", postData.title);
            formData.append("description", postData.description);
            formData.append("visibility", postData.visibility);
            // formData.append("tags", cleanTags.join(","));
            // formData.append("tags", JSON.stringify(postData.tags)); // if backend accepts array as string
            // formData.append("scheduleDate", postData.scheduleDate);
            // formData.append("scheduleTime", postData.scheduleTime);
            // formData.append("amPm", postData.amPm);
            formData.append("postType", tabTitle);
            // formData.append("postType", postData.mediaFile);
            // Add media file
            // if (postData.mediaFile) {
            //     formData.append("media", {
            //         uri: postData.mediaFile,
            //         type: postData.mediaType,
            //         name: 'upload.jpeg',
            //     } as any); // 'as any' to avoid TS error with FormData
            // }

            // Add media file if exists
            if (postData.mediaFile) {
                const fileUri = postData.mediaFile;
                const fileExtension = fileUri.split('.').pop();
                const mimeType = postData.mediaType || (fileExtension === 'mp4' ? 'video/mp4' : 'image/jpeg');
                const fileName = fileUri.split('/').pop() || 'media-upload';

                formData.append("media", {
                    uri: fileUri,
                    type: mimeType,
                    name: fileName,
                } as any);
            }

            // dispatch API call
            const resultAction = await dispatch(createPost(formData));
            console.log(">>>>>><>>><<><?<>><<>>", resultAction);

            if (createPost.fulfilled.match(resultAction)) {
                Alert.alert("Success", "Post created successfully!");
                navigation.navigate(ScreenConstants.MAIN_SCREEN, {
                    screen: "Home",
                });
            } else {
                throw new Error(resultAction.payload || "Failed to create post");
            }
        } catch (error: any) {
            console.error("Error creating post:", error);
            Alert.alert("Error", error.message || "Failed to create post. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                <Image source={images.IC_BACK} style={styles.backIcon} />
                <Text style={styles.headerText}>Create Post</Text>
            </TouchableOpacity>

            {/* <FlatList
                ref={flatListRef}
                data={selectedMedia}
                renderItem={renderMediaItem}
                keyExtractor={(_, index) => `media-${index}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.slider}
            /> */}
            <ScrollView style={styles.scrollView}>
                <View style={styles.mediaContainer}>
                    {renderMediaItem()}
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        placeholder="Enter text here..."
                        placeholderTextColor="#888"
                        maxLength={80}
                        style={styles.input}
                        value={postData.title}
                        onChangeText={(text) => setPostData(prev => ({ ...prev, title: text }))}
                    />
                    <Text style={styles.titleCount}>{titleCharCount}/80</Text>



                    <View style={styles.fieldContainer}>
                        <Text style={styles.label}>Description</Text>
                        <View style={styles.textareaContainer}>
                            <TextInput
                                style={styles.textarea}
                                placeholder="Enter text here..."
                                placeholderTextColor="#666"
                                value={postData.description}
                                onChangeText={(text) => handleInputChange("description", text)}
                                multiline
                                maxLength={250}
                            />
                            <Text style={styles.charCount}>
                                {descriptionCharCount}/250
                            </Text>
                        </View>
                    </View>


                    {/* Tags */}
                    <View style={styles.fieldContainer}>
                        <Text style={styles.label}>@Tag</Text>
                        <View style={styles.tagsContainer}>
                            <View style={styles.tagsList}>
                                {postData.tags.map((tag, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.tag}
                                        onPress={() => handleRemoveTag(tag)}
                                    >
                                        <Text style={styles.tagText}>{tag}</Text>
                                        <Text style={styles.tagRemove}>×</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={styles.tagInputContainer}>
                                <TextInput
                                    style={styles.tagInput}
                                    placeholder="Add a tag..."
                                    placeholderTextColor="#666"
                                    value={tagInput}
                                    onChangeText={setTagInput}
                                    onSubmitEditing={handleAddTag}
                                />
                            </View>
                        </View>
                    </View>
                    {/* <Text style={styles.label}>Schedule</Text>
                    <View style={styles.scheduleContainer}>
                        <Text style={styles.scheduleText}>{postData.scheduleDate}</Text>
                        <Text style={styles.scheduleText}>{postData.scheduleTime}</Text>
                        <Text style={styles.scheduleText}>{postData.amPm}</Text>
                    </View> */}
                    {/* Content Visibility */}
                    <View style={styles.fieldContainer}>
                        <Text style={styles.label}>Content Visibility</Text>
                        <TouchableOpacity
                            style={styles.visibilitySelector}
                            onPress={() => setVisibilityModalVisible(true)}
                        >
                            <View style={styles.visibilityContent}>

                                <Image source={images.FRIENDS_ICON} style={styles.friendIcon} />
                                <Text style={styles.visibilityText}>{postData.visibility}</Text>
                            </View>
                            <Image source={images.IC_DOWN_ARROW} style={styles.dropdownIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Upload Button */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.uploadBtn}
                        onPress={handleSubmit}
                        disabled={isSubmitting}
                    >
                        <Text style={styles.uploadText}>
                            {isSubmitting ? "Uploading..." : "Upload"}
                        </Text>
                        {isSubmitting && (
                            <ActivityIndicator
                                size="small"
                                color="#fff"
                                style={styles.loader}
                            />
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* Visibility Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibilityModalVisible}
                onRequestClose={() => setVisibilityModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.visibilityModalContent}>
                        <TouchableOpacity
                            style={styles.visibilityOption}
                            onPress={() => {
                                handleInputChange("visibility", "Everyone");
                                setVisibilityModalVisible(false);
                            }}
                        >
                            <Text style={styles.visibilityOptionText}>Everyone</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.visibilityOption}
                            onPress={() => {
                                handleInputChange("visibility", "friends");
                                setVisibilityModalVisible(false);
                            }}
                        >
                            <Text style={styles.visibilityOptionText}>friends</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.visibilityOption}
                            onPress={() => {
                                handleInputChange("visibility", "Me Only");
                                setVisibilityModalVisible(false);
                            }}
                        >
                            <Text style={styles.visibilityOptionText}>Me Only</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default MediaDetailsScreen;
