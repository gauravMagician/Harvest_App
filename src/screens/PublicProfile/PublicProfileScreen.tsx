import React, { useRef, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Modal,
    StyleSheet,
    findNodeHandle,
    UIManager,
    Dimensions
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import images from "../../resources/images";
import Button from "../../component/Button";

const tabs = ["All Posts", "Videos", "Reels", "Photos", "Story"];
const posts = [
    require("../../resources/images/user3.png"),
    require("../../resources/images/user5.png"),
    require("../../resources/images/postImg.png"),
    require("../../resources/images/post.jpg"),
    require("../../resources/images/post2.png"),
    require("../../resources/images/postImg.png"),
    require("../../resources/images/postImg.png"),
    require("../../resources/images/post.jpg"),
    require("../../resources/images/post2.png"),
    require("../../resources/images/postImg.png"),
    require("../../resources/images/post.jpg"),
    require("../../resources/images/post2.png"),
    require("../../resources/images/postImg.png"),
    require("../../resources/images/postImg.png"),
];


const ProfileforUser: React.FC = () => {
    const navigation = useNavigation();
    const dotRef = useRef<View>(null);
    const screenWidth = Dimensions.get('window').width;
    const [toggleStates, setToggleStates] = useState([true, false, true]);
    const [selectedTab, setSelectedTab] = useState("All Posts");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, right: 0 });



    const openModal = () => {
        const handle = findNodeHandle(dotRef.current);
        if (handle) {
            UIManager.measure(handle, (_x, _y, _width, _height, pageX, pageY) => {
                setModalPosition({ top: pageY + 30, right: screenWidth - pageX - 5 });
                setIsModalVisible(true);
            });
        }
    };



    const togglePublic = (index: number) => {
        const newToggleStates = [...toggleStates];
        newToggleStates[index] = !newToggleStates[index];
        setToggleStates(newToggleStates);
    };

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image
                        source={images.IC_BACK}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
                <View style={styles.innerIconView}>
                    <TouchableOpacity
                        style={styles.backButton}
                        ref={dotRef}
                        onPress={openModal}
                    >
                        <Image
                            source={images.IC_MORE}
                            style={styles.shareIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Profile Section */}
            <View style={styles.profileContainer}>
                <TouchableOpacity
                    style={styles.profileImageContainer}
                >
                    <Image
                        source={require("../../resources/images/userpublic.png")}
                        style={styles.profileImage}
                    />
                    {/* Camera Icon */}
                    <View style={styles.cameraButton}>
                        <Image
                            source={images.IC_CAMERAICON}
                            style={styles.cameraIcon}
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.nameRow}>
                    <Text style={styles.title}>Carl Pate</Text>
                    <Image
                        source={images.IC_BULETICK}
                        style={styles.nameTickIcon}
                    />
                </View>
            </View>

            {/* Privacy Toggle */}
            <View style={styles.toggleViewContainer}>
                <Text style={styles.toggleLabel}>lorem ipsum dolor bxjcsb bxnbzcnbc bscjbhscb nmbjbjhcbhjsbhs c bh hs h vsjb.</Text>
            </View>

            {/* Stats Section */}
            <View style={styles.statsContainer}>
                <View style={styles.innerStatsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>90</Text>
                        <Text style={styles.statLabel}>Posts</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.statItem}
                    >
                        {/* <Text style={styles.statNumber}>{profile?.followersCount}</Text> */}
                        <Text style={styles.statNumber}>5M</Text>
                        <Text style={styles.statLabel}>Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.statItem}
                    >
                        {/* <Text style={styles.statNumber}>{profile?.followingCount}</Text> */}
                        <Text style={styles.statNumber}>2.5K</Text>
                        <Text style={styles.statLabel}>Following</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ButtonView}>
                    <Button
                        title={"Following"}
                        style={styles.secondButton}
                        variant="primary"
                        titleStyle={styles.ButtonText}
                    />
                    <Button
                        title={"Chat"}
                        style={styles.secondButton}
                        variant="primary"
                        titleStyle={styles.ButtonText}
                    />
                </View>

            </View>

            {/* Tabs for Filtering */}
            <View style={styles.tabsRow}>
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[
                            styles.tabButton,
                            selectedTab === tab && styles.selectedTab,
                        ]}
                        onPress={() => setSelectedTab(tab)}
                    >
                        <Text
                            style={[
                                styles.tabButtonText,
                                selectedTab === tab && styles.selectedTabText,
                            ]}
                        >
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Display Filtered Posts */}
            <FlatList
                data={posts}
                keyExtractor={(_, index) => index.toString()}
                numColumns={3}
                style={styles.gridList}
                contentContainerStyle={styles.gridListContent}
                renderItem={({ item }) => (
                    <View style={styles.postContainer}>
                        <Image source={item} style={styles.postImage} />
                    </View>
                )}
            />


            {/* More Options Modal */}
            <Modal transparent animationType="fade" visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={StyleSheet.absoluteFill}
                    onPress={() => setIsModalVisible(false)}
                >
                    <View style={[styles.modalContent, { top: modalPosition.top, right: modalPosition.right }]}>
                        <TouchableOpacity style={styles.modalItem}>
                            <Text style={styles.modalText}>Block</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalItem} >
                            <Text style={styles.modalText}>Share Proflie</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalItem} >
                            <Text style={styles.modalText}>Report</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>

        </View>
    );
};

export default ProfileforUser;
