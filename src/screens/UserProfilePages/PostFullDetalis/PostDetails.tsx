// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList, } from 'react-native';
// import { styles } from './styles';
// import images from '../../../resources/images';
// import { RouteProp, useRoute } from '@react-navigation/native';

// const PostDetails: React.FC = () => {
//     const [isMuted, setIsMuted] = useState(true);
//     type RouteParams = {
//         PostDetails: {
//             image: any;
//             type: 'image' | 'video';
//         };
//     };
//     const route = useRoute<RouteProp<RouteParams, 'PostDetails'>>();
//     const { image, type } = route.params || {};
//     const toggleMute = () => {
//         setIsMuted(!isMuted);
//     };

//     const renderHeader = () => (
//         <View style={styles.header}>
//             <Image source={images.IC_PROFILE} style={styles.profileImage} />
//             <View style={styles.nameTimeWrapper}>
//                 <View style={styles.nameRow}>
//                     <Text style={styles.userName}>Amelia John</Text>
//                     <Image source={images.IC_BULETICK} style={styles.verifiedIcon} />
//                     <TouchableOpacity style={styles.followButton}>
//                         <Text style={styles.followText}>Following</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <Text style={styles.timeText}>30 sec ago</Text>
//             </View>
//             <TouchableOpacity>
//                 <Image source={images.IC_MORE} style={styles.moreIcon} />
//             </TouchableOpacity>
//         </View>
//     );

//     return (
//         <>
//             <View style={styles.container}>
//                 <FlatList
//                     ListHeaderComponent={
//                         <>
//                             {renderHeader()}
//                             <View style={styles.videoContainer}>
//                                 <Image source={image || images.POST_IMAGE_SAMPLE} style={styles.postImage} />
//                                 {type === 'video' && (
//                                     <TouchableOpacity style={styles.playIconWrapper}>
//                                         <Image source={images.IC_PLAY_CIRCLE} style={styles.playIcon} />
//                                     </TouchableOpacity>
//                                 )}
//                             </View>

//                             {/* Actions */}
//                             <View style={styles.actionsRow}>
//                                 <View style={styles.reactionsRow}>
//                                     <View style={styles.iconTextRow}>
//                                         <Image source={images.IC_LIKE} style={styles.icon} />
//                                         <Text style={styles.iconText}>12.5K</Text>
//                                     </View>
//                                     <View style={styles.iconTextRow}>
//                                         <Image source={images.IC_COMMENT} style={styles.icon} />
//                                         <Text style={styles.iconText}>8.5K</Text>
//                                     </View>
//                                     <View style={styles.iconTextRow}>
//                                         <Image source={images.IC_SHARE} style={styles.icon} />
//                                         <Text style={styles.iconText}>5.6K</Text>
//                                     </View>
//                                     <View style={styles.iconTextRow}>
//                                         <Image source={images.IC_EYE} style={styles.icon} />
//                                         <Text style={styles.iconText}>1.2K HVT</Text>
//                                     </View>
//                                 </View>
//                                 <Text style={styles.postDescription}>
//                                     <Text style={styles.postTitle}>Lorem ipsum dolor nbdnf{"\n"}</Text>
//                                     Lorem ipsum dolor sit  bn bsjbs jsbdjsbjnc bshfvj bhb met ksk consec cbs tetuer #adipiscing #elit ………………more
//                                 </Text>
//                             </View>

//                             {/* Second post preview */}
//                             {renderHeader()}
//                             <Image source={images.POST_IMAGE_Second} style={styles.secondaryImage} />
//                         </>
//                     }
//                 />
//                 {/* <View style={styles.bottomBar}>
//                     <TouchableOpacity onPress={toggleMute}>
//                         <Image source={isMuted ? images.IC_MUTE : images.IC_VOLUME} style={styles.bottomIcon} />
//                     </TouchableOpacity>
//                     <View style={styles.seekBar} />
//                     <Text style={styles.duration}>08:31</Text>
//                 </View> */}
//             </View>
//         </>
//     );
// };

// export default PostDetails;


import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, findNodeHandle, UIManager, Dimensions, Modal, StyleSheet } from 'react-native';
import { styles } from './styles';
import images from '../../../resources/images';
import { RouteProp, useRoute } from '@react-navigation/native';

type RouteParams = {
    PostDetails: {
        image: any;
        type: 'image' | 'video';
    };
};

type PostType = {
    image: any;
    type: 'image' | 'video';
};

const PostDetails: React.FC = () => {
    const route = useRoute<RouteProp<RouteParams, 'PostDetails'>>();
    const { image, type } = route.params || {};
    const dotRefs = useRef<{ [key: number]: View | null }>({});
    const screenWidth = Dimensions.get('window').width;
    const [expandedStates, setExpandedStates] = useState<{ [index: number]: boolean }>({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, right: 0 });
    const posts: PostType[] = [
        { image: image || images.POST_IMAGE_SAMPLE, type: type || 'image' },
        { image: image || images.POST_IMAGE_Second, type: 'video' },
        { image: image || images.POST_IMAGE_SAMPLE, type: 'image' },
        { image: image || images.POST_IMAGE_Second, type: 'video' },
    ];


    //  this function is for the modal open 
    const openModal = (index: number) => {
        const ref = dotRefs.current[index];
        const handle = ref ? findNodeHandle(ref) : null;

        if (handle) {
            // Delay to ensure layout has settled
            setTimeout(() => {
                UIManager.measure(handle, (_x, _y, _width, _height, pageX, pageY) => {
                    setModalPosition({ top: pageY + 30, right: screenWidth - pageX - 5 });
                    setIsModalVisible(true);
                });
            }, 50); // 50ms is usually enough
        }
    };



    const toggleReadMore = (index: number) => {
        setExpandedStates((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const renderHeader = (index: number) => (
        <View style={styles.header}>
            <TouchableOpacity style={styles.profileImageContainer}>
                <Image source={images.IC_PROFILE} style={styles.profileImage} />
            </TouchableOpacity>
            <View style={styles.nameTimeWrapper}>
                <View style={styles.nameRow}>
                    <Text style={styles.userName}>Amelia John</Text>
                    <Image source={images.IC_BULETICK} style={styles.verifiedIcon} />
                    <TouchableOpacity style={styles.followButton}>
                        <Text style={styles.followText}>Following</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.timeText}>30 sec ago</Text>
            </View>
            <TouchableOpacity
                ref={(ref) => { dotRefs.current[index] = ref }}
                onPress={() => openModal(index)}
            >
                <Image source={images.IC_MORE} style={styles.moreIcon} />
            </TouchableOpacity>


            {/* <TouchableOpacity
                ref={(ref) => { dotRefs.current[index] = ref }}
                onPress={() => openModal(index)}
            >

                <Image source={images.IC_MORE} style={styles.moreIcon} />
            </TouchableOpacity> */}
        </View>
    );

    const renderPost = (post: PostType, index: number) => {
        const fullText = `Lorem ipsum dolor sit  bn bsjbs jsbdjsbjnc bshfvj bhb met ksk consec cbs tetuer #adipiscing #elit`;
        const previewText = fullText.substring(0, 100);
        const isExpanded = expandedStates[index];

        return (
            <View key={index}>
                {renderHeader(index)}
                <View style={styles.videoContainer}>
                    <Image source={post.image} style={styles.postImage} />
                    {post.type === 'video' && (
                        <TouchableOpacity style={styles.playIconWrapper}>
                            <Image source={images.IC_PLAY_CIRCLE} style={styles.playIcon} />
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.actionsRow}>
                    <View style={styles.reactionsRow}>
                        <View style={styles.iconTextRow}>
                            <Image source={images.IC_LIKE} style={styles.icon} />
                            <Text style={styles.iconText}>12.5K</Text>
                        </View>
                        <View style={styles.iconTextRow}>
                            <Image source={images.IC_COMMENT} style={styles.icon} />
                            <Text style={styles.iconText}>8.5K</Text>
                        </View>
                        <View style={styles.iconTextRow}>
                            <Image source={images.IC_SHARE} style={styles.icon} />
                            <Text style={styles.iconText}>5.6K</Text>
                        </View>
                        <View style={styles.iconTextRow}>
                            <Image source={images.IC_EYE} style={styles.icon} />
                            <Text style={styles.iconText}>1.2K HVT</Text>
                        </View>
                    </View>
                    <View style={styles.descriptionWrapper}>
                        <Text style={styles.postTitle}>Lorem ipsum dolor nbdnf</Text>
                        <Text style={styles.postDescription}>
                            {isExpanded ? fullText : `${previewText}...`}
                            <Text style={styles.readMoreText} onPress={() => toggleReadMore(index)}>
                                {isExpanded ? ' less' : ' more'}
                            </Text>
                        </Text>
                    </View>

                </View>
            </View>
        );
    };

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={posts}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item, index }) => renderPost(item, index)}
                />
            </View>
            {/* More Options Modal */}
            <Modal transparent animationType="fade" visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={StyleSheet.absoluteFill}
                    onPress={() => setIsModalVisible(false)}
                >
                    <View style={[styles.modalContent, { top: modalPosition.top, right: modalPosition.right }]}>
                        <TouchableOpacity style={styles.modalItem} >
                            <Text style={styles.modalText}>edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalItem} >
                            <Text style={styles.modalText}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalItem} >
                            <Text style={styles.modalText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalItem} >
                            <Text style={styles.modalText}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    );
};

export default PostDetails;

