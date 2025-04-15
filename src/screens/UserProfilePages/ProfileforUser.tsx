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
import { RootStackParamList } from "../../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";

const tabs = ["All Posts", "Videos", "Reels", "Photos", "Story", "Saved Post"];
const posts = [
  require("../../resources/images/post.jpg"),
  require("../../resources/images/post2.png"),
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
  type NavigationProp = StackNavigationProp<RootStackParamList, 'PostDetails'>;
  const navigation = useNavigation<NavigationProp>();
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

  const renderTabContent = () => {
    switch (selectedTab) {
      case "All Posts":
        return (
          <FlatList
            data={posts}
            keyExtractor={(_, index) => index.toString()}
            numColumns={3}
            style={styles.gridList}
            contentContainerStyle={styles.gridListContent}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.postContainer}
                onPress={() =>
                  navigation.navigate("PostDetails", {
                    image: item,
                    type: "image",
                  })
                }
              >
                <Image source={item} style={styles.postImage} />
              </TouchableOpacity>
            )}
          />
        );
      case "Saved Post":
        return (
          <FlatList
            data={posts.slice(0, 6)} // example different data
            keyExtractor={(_, index) => `saved-${index}`}
            numColumns={3}
            style={styles.gridList}
            contentContainerStyle={styles.gridListContent}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.postContainer}
                onPress={() =>
                  navigation.navigate("PostDetails", {
                    image: item,
                    type: "image",
                  })
                }
              >
                <Image source={item} style={styles.postImage} />
              </TouchableOpacity>
            )}
          />
        );
      // Add other tabs below similarly
      case "Videos":
      case "Reels":
      case "Photos":
      case "Story":
        return (
          <View style={styles.emptyTabContent}>
            <Text style={styles.emptyText}>No content yet for {selectedTab}</Text>
          </View>
        );
      default:
        return null;
    }
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
          <TouchableOpacity style={styles.backButton}>
            <Image
              source={images.IC_SHAREICONS}
              style={styles.shareIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            // onPress={() => modalRef.current?.open()}
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
        // onPress={() => navigation.navigate("UserViewProfilePage")}
        >
          <Image
            source={images.IC_PROFILE}
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

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.innerStatsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>90</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <TouchableOpacity
            style={styles.statItem}
            onPress={() => navigation.navigate("FollowersFollowingScreen", { initialTab: 'Followers' })}
          >
            {/* <Text style={styles.statNumber}>{profile?.followersCount}</Text> */}
            <Text style={styles.statNumber}>150</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.statItem}
            onPress={() => navigation.navigate("FollowersFollowingScreen", { initialTab: 'Following' })}
          >
            {/* <Text style={styles.statNumber}>{profile?.followingCount}</Text> */}
            <Text style={styles.statNumber}>190</Text>
            <Text style={styles.statLabel}>Following</Text>
          </TouchableOpacity>
        </View>
        <Button
          title={"edit"}
          onPress={() => navigation.navigate("UserViewProfilePage")}
          style={styles.secondButton}
          variant="primary"
          titleStyle={{ color: "white" }}
        />
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
      {renderTabContent()}

      {/* More Options Modal */}
      <Modal transparent animationType="fade" visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
        <TouchableOpacity
          activeOpacity={1}
          style={StyleSheet.absoluteFill}
          onPress={() => setIsModalVisible(false)}
        >
          <View style={[styles.modalContent, { top: modalPosition.top, right: modalPosition.right }]}>
            <TouchableOpacity style={styles.modalItem} onPress={() => navigation.navigate("SettingPage")}>
              <Text style={styles.modalText}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => navigation.navigate("BuyMembershipScreen")}>
              <Text style={styles.modalText}>Buy Membership</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => navigation.navigate("MyRewards")}>
              <Text style={styles.modalText}>Reward</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => navigation.navigate("Wallet")}>
              <Text style={styles.modalText}>My Wallet</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

    </View>
  );
};

export default ProfileforUser;
