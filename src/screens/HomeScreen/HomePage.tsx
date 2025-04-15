import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, TextInput, ActivityIndicator, Modal, findNodeHandle, UIManager, Dimensions, StyleSheet, TouchableOpacityProps, } from 'react-native';
import ReusableModal, { ReusableModalRef } from '../../component/BottomSheet';
import Loader from '../../component/Loader';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { scaleSize, scaleSizeHeight } from '../../utils/deviceDimensions';
import commentModalStyles from './commentModalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { storage, StorageKeys } from '../../utils/storage';
import { homeService } from '../../services/homeService';
import moment from "moment";
import { likePost } from '../../store/slices/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchComments, postComment } from '../../store/slices/commentSlice';
import images from '../../resources/images';
import CommentModalContent from './modal/CommentModalContent';
import LikeModalContent from './modal/LikeModalContent';

const stories = [
  { id: '1', name: 'You', image: require('../../resources/images/women.png'), isUser: true },
  { id: '2', name: 'Emiley', image: require('../../resources/images/preferenceImg.png') },
  { id: '3', name: 'Emma', image: require('../../resources/images/preferenceImg.png') },
  { id: '4', name: 'Olivia', image: require('../../resources/images/preferenceImg.png') },
  { id: '5', name: 'Michael', image: require('../../resources/images/women.png') },
  { id: '6', name: 'Emiley', image: require('../../resources/images/preferenceImg.png') },
  { id: '7', name: 'Emma', image: require('../../resources/images/preferenceImg.png') },
  { id: '8', name: 'Olivia', image: require('../../resources/images/preferenceImg.png') },
  { id: '9', name: 'Michael', image: require('../../resources/images/women.png') },
  { id: '10', name: 'Emiley', image: require('../../resources/images/preferenceImg.png') },
  { id: '11', name: 'Emma', image: require('../../resources/images/preferenceImg.png') },
];
const users = [
  {
    id: 1,
    name: "John Doe",
    avatar: require("../../resources/images/women.png"),
    isFollowing: true,
  },
  {
    id: 2,
    name: "Alice Smith",
    avatar: require("../../resources/images/preferenceImg.png"),
    isFollowing: false,
  },
  {
    id: 3,
    name: "Robert Brown",
    avatar: require("../../resources/images/women.png"),
    isFollowing: true,
  },
  {
    id: 4,
    name: "Emma Wilson",
    avatar: require("../../resources/images/preferenceImg.png"),
    isFollowing: false,
  },
  {
    id: 5,
    name: "Robert Brown",
    avatar: require("../../resources/images/women.png"),
    isFollowing: true,
  },
  {
    id: 6,
    name: "Emma Wilson",
    avatar: require("../../resources/images/women.png"),
    isFollowing: false,
  },
  {
    id: 7,
    name: "Robert Brown",
    avatar: require("../../resources/images/women.png"),
    isFollowing: true,
  },
  {
    id: 8,
    name: "Emma Wilson",
    avatar: require("../../resources/images/women.png"),
    isFollowing: false,
  },
];
const options = ['funny', 'Entertainment', 'Tech', 'Create New '];

const HomeScreen = () => {
  type NavigationProp = StackNavigationProp<RootStackParamList, 'PostDetails'>;
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const commentModalRef = useRef<ReusableModalRef>(null);
  const LikeModalRef = useRef<ReusableModalRef>(null);
  const ShareModalRef = useRef<ReusableModalRef>(null);
  const liveModalRef = useRef<ReusableModalRef>(null);
  const dotRef = useRef<View>(null);
  const filterRef = useRef<View>(null); // Ref for filter buttons
  const [expandedStates, setExpandedStates] = useState<boolean[]>([]);
  const [userId, setUserId] = useState(null);
  const [feeds, setFeeds] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState("");
  const screenWidth = Dimensions.get('window').width;
  const { comments, commentsLoading, postCommentLoading } = useSelector((state: RootState) => state.comments);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, right: 0 });
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [filterModalVisible, setIsFilterModalVisible] = useState(false);

  const saveModalRef = useRef<ReusableModalRef>(null);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);


  const toggleCheckbox = (option: string) => {
    if (option === 'All') {
      if (selectedCategory.includes('All')) {
        setSelectedCategory([]);
      } else {
        setSelectedCategory([...options]);
      }
    } else {
      let updatedOptions = [...selectedCategory];
      if (updatedOptions.includes(option)) {
        updatedOptions = updatedOptions.filter(item => item !== option);
      } else {
        updatedOptions.push(option);
      }

      if (updatedOptions.length === options.length - 1) {
        updatedOptions.push('All');
      } else {
        updatedOptions = updatedOptions.filter(item => item !== 'All');
      }

      setSelectedCategory(updatedOptions);
    }
  };

  const handleSave = () => {
    setIsModalVisible(false); // Close the more options modal
    saveModalRef.current?.open(); // Open the save bottom sheet
  };
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const openModal = () => {
    const handle = findNodeHandle(dotRef.current);
    if (handle) {
      UIManager.measure(handle, (_x, _y, _width, _height, pageX, pageY) => {
        setModalPosition({ top: pageY + 20, right: screenWidth - pageX - 8 });
        setIsModalVisible(true);
      });
    }
  };

  const OpenFilterModal = () => {
    const handle = findNodeHandle(filterRef.current);
    if (handle) {
      UIManager.measure(handle, (_x, _y, _width, _height, pageX, pageY) => {
        setModalPosition({ top: pageY + 30, right: screenWidth - pageX - 5 });
        setIsFilterModalVisible(true);
      });
    }
  };

  // Fetch user ID from storage
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUser = await storage.getItem(StorageKeys.USER);
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser?._id) setUserId(parsedUser._id);
        }
      } catch (error) {
        console.error("❌ Error fetching user ID:", error);
      }
    };
    fetchUserId();
  }, []);

  // Fetch feeds from the backend
  useEffect(() => {
    const fetchFeeds = async () => {
      setIsLoading(true);
      try {
        const response = await homeService.getHomeFeed();
        const mappedFeeds = response?.map((post: any) => ({
          id: post?._id || Math.random().toString(),
          caption: post?.caption || "Mahadev", // caption = username from API
          username: post?.user?.name || "Deo",
          userImage: post?.user?.profilePic
            ? { uri: post.user.profilePic }
            : require("../../resources/images/women.png"),
          totalLikesEarning: post?.totalLikesEarning || 0,
          totalCommentsEarning: post?.totalCommentsEarning || 0,
          totalSharesEarning: post?.totalSharesEarning || 0,
          postImage:
            post?.media?.length > 0
              ? { uri: post.media[0] }
              : require("../../resources/images/bravewallet.png"),
          likes: post?.likesCount?.toString() || "0",
          comments: post?.commentsCount?.toString() || "0",
          shares: post?.sharesCount?.toString() || "0",
          hvt: `${post?.totalEarnings || 0} HVT`,
          isFollowing: post?.isFollowing || false,
          isLiked: post?.likes?.includes(userId) || false,
          likesCount: post?.likesCount || 0,
          commentsCount: post?.commentsCount || 0,
          sharesCount: post?.sharesCount || 0,
          createdAt: post?.createdAt || new Date().toISOString(),
          description: post?.description || "",
          tags: post?.tags || [],
          postType: post?.postType || "post",
          media: post?.media || [],
        }));

        setFeeds(mappedFeeds);
      } catch (error) {
        console.error("Error fetching feeds:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (userId) fetchFeeds();
  }, [userId]);


  useEffect(() => {
    if (feeds?.length) {
      setExpandedStates(Array(feeds.length).fill(false));
    }
  }, [feeds]);

  const toggleReadMore = (index: number) => {
    setExpandedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  // Toggle follow status
  const toggleFollow = (id: any) => {
    setFeeds((prev: any) =>
      prev.map((feed: any) =>
        feed.id === id ? { ...feed, isFollowing: !feed.isFollowing } : feed
      )
    );
  };


  // Fetch comments when a post is selected
  const handleOpenComments = (post: any) => {
    if (!post?.id) return;
    setSelectedPost(post);
    setSelectedPostId(post.id);
    dispatch(fetchComments(post.id));
    commentModalRef.current?.open();
  };


  // Handle sending a comment
  const handleSendComment = () => {
    if (!selectedPost || !commentText.trim() || !userId) return;

    dispatch(
      postComment({
        postId: selectedPost.id,
        comment: commentText,
      })
    )
      .unwrap()
      .then(() => {
        setCommentText(""); // Clear input
        dispatch(fetchComments(selectedPost.id)); // Refetch updated list
        // Update UI counts 
        setFeeds((prevFeeds: any) =>
          prevFeeds.map((feed: any) =>
            feed.id === selectedPost.id
              ? {
                ...feed,
                comments: (feed.commentsCount + 1).toString(),
                commentsCount: (feed.commentsCount || 0) + 1,
              }
              : feed
          )
        );

        setSelectedPost((prevPost: any) => ({
          ...prevPost,
          comments: (prevPost.commentsCount + 1).toString(),
          commentsCount: (prevPost.commentsCount || 0) + 1,
        }));
      });
  };

  // Handle liking a post
  const handleLike = async (postId: any) => {
    if (!userId) return;
    try {
      await dispatch(likePost({ postId, userId })).unwrap();
      setFeeds((prevFeeds: any) =>
        prevFeeds.map((feed: any) =>
          feed.id === postId
            ? {
              ...feed,
              isLiked: !feed.isLiked,
              likesCount: feed.isLiked
                ? feed.likesCount - 1
                : feed.likesCount + 1,
              likes: (feed.isLiked
                ? feed.likesCount - 1
                : feed.likesCount + 1
              ).toString(),
            }
            : feed
        )
      );
    } catch (error) {
      console.error("Like/unlike failed:", error);
    }
  };

  {/* share Render items */ }
  const renderShareModal = (
    <>
      <ScrollView style={styles.TopContainer} horizontal>
        <TouchableOpacity style={styles.shareIconWrapper}>
          <Image
            source={require("../../resources/images/modalCopy.png")}
            style={styles.shareIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIconWrapper}>
          <Image
            source={require("../../resources/images/shareModal.png")}
            style={styles.shareIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIconWrapper}>
          <Image
            source={require("../../resources/images/Userimg.png")}
            style={styles.shareIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIconWrapper}>
          <Image
            source={require("../../resources/images/whatapp.png")}
            style={styles.shareIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIconWrapper}>
          <Image
            source={require("../../resources/images/facebook.png")}
            style={styles.shareIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIconWrapper}>
          <Image
            source={require("../../resources/images/insta.png")}
            style={styles.shareIcon}
          />
        </TouchableOpacity>
      </ScrollView>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.shareuserRow}>
            <Image source={item.avatar} style={styles.sendAvatar} />
            <Text style={styles.sharebottomname}>{item.name}</Text>
            <TouchableOpacity style={styles.SendButtonbottom}>
              <Text style={styles.sendextbottom}>Send</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </>
  );

  {/* Live Render items */ }
  const renderliveModal = (item: any) => (
    <View style={styles.liveview}>
      <View style={styles.innerView}>
        <View style={styles.TextImgView}>
          <Image
            source={require("../../resources/images/Heart.png")}
            style={styles.liveIcon}
          />
          <Text style={styles.liveText}>{item.likesCount}</Text>
        </View>
        <Text style={styles.numbertext}>{item.totalLikesEarning} HVT</Text>
      </View>
      <View style={styles.innerView}>
        <View style={styles.TextImgView}>
          <Image
            source={require("../../resources/images/comment.png")}
            style={styles.liveIcon}
          />
          <Text style={styles.liveText}>{item.commentsCount}</Text>
        </View>
        <Text style={styles.numbertext}>{item.totalCommentsEarning} HVT</Text>
      </View>
      <View style={styles.innerView}>
        <View style={styles.TextImgView}>
          <Image
            source={require("../../resources/images/share.png")}
            style={styles.liveshareIcon}
          />
          <Text style={styles.liveText}>{item.sharesCount}</Text>
        </View>
        <Text style={styles.numbertext}>{item.totalSharesEarning} HVT</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Loader isLoading={isLoading} />
      {/* Scrollable Header Section */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        contentContainerStyle={{ paddingBottom: scaleSize(16) }}
      >

        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require("../../resources/images/Logo.png")}
            style={styles.headerIcon}
          />
          <View style={styles.headerIcons}>
            {isSearchVisible ? (
              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
                  placeholderTextColor="#999"
                  autoFocus={true}
                  onBlur={toggleSearch} // Hide input when focus is lost
                />
                <Image
                  source={require("../../resources/images/search.png")}
                  style={styles.searchicons}
                />
              </View>
            ) : (
              <TouchableOpacity onPress={toggleSearch}>
                <Image
                  source={require("../../resources/images/search.png")}
                  style={styles.icons}
                />
              </TouchableOpacity>
            )}
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                // onPress={() => navigation.navigate("SettingPage")}
                ref={filterRef}
                onPress={OpenFilterModal}
              >
                <Image
                  source={require("../../resources/images/Frame_img.png")}
                  style={styles.icons}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("NotificationPage")}
              >
                <Image
                  source={require("../../resources/images/Notification.png")}
                  style={styles.icons}
                />
              </TouchableOpacity>
            </View>

          </View>
        </View>

        {/* Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}
        >
          {["All", "Trending", "For You", "Live", "Following", "Gaming", "Technology", "Crypto"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.filterButton,
                { backgroundColor: selectedFilter === item ? "#125BE4CC" : "#FFFFFF" },
              ]}
              onPress={() => setSelectedFilter(item)}
            >
              <Text
                style={[
                  styles.filterText,
                  { color: selectedFilter === item ? "#FFFFFF" : "#000000" },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Stories */}
        <Text style={styles.Toptext}> Top Stories</Text>
        <FlatList
          data={stories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.storyListContainer}
          renderItem={({ item }) => (
            <View style={styles.storyContainer}>
              <Image source={item.image} style={styles.storyImage} />

              <Text style={styles.storyName}>{item.name}</Text>
              {item.isUser && (
                <View style={styles.addStory}>
                  <Text style={styles.plusIcon}>+</Text>
                </View>
              )}
            </View>
          )}
        />

        {/* Feeds */}
        <Text style={styles.myfeedtext}> My Feed</Text>
        <FlatList
          data={feeds}
          keyExtractor={(item: any) => item?.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const fullText = item.description || "";
            const previewText = fullText.substring(0, 100);
            const isExpanded = expandedStates[index];
            return (
              <View style={styles.feedContainer}>
                {/* Feed Header */}
                <View style={styles.feedHeader}>
                  <TouchableOpacity>
                    <Image source={item.userImage} style={styles.userImage} />
                  </TouchableOpacity>
                  <View style={styles.nameView}>
                    <Text style={styles.username}>{item.username}</Text>
                    <Text style={styles.timeText}>{moment(item.createdAt).fromNow()}</Text>
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.followButton,
                      item.isFollowing && styles.followingButton,
                    ]}
                    onPress={() => toggleFollow(item.id)}
                  >
                    <Text
                      style={[
                        styles.followText,
                        item.isFollowing && styles.followingText,
                      ]}
                    >
                      {item.isFollowing ? "Following" : "Follow"}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    ref={dotRef}
                    onPress={openModal}
                  >
                    <Image
                      source={require("../../resources/images/more.png")}
                      style={styles.moreIcon}
                    />
                  </TouchableOpacity>
                </View>

                {/* Post Image */}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("PostDetails", {
                      image: item.postImage,
                      type: "image",
                    })
                  }
                >
                  <Image source={item.postImage} style={styles.postImage} />
                </TouchableOpacity>

                {/* Action Bar */}
                <View style={styles.actionBar}>
                  <TouchableOpacity style={styles.actionItem}
                    onPress={() => handleLike(item.id)}
                  >
                    {item.isLiked ? (
                      <Image source={require("../../resources/images/Heart.png")} style={styles.HartIcon} />
                    ) : (
                      <Image source={require("../../resources/images/PlanHeart.png")} style={styles.PlanHartIcon} />
                    )}
                    <TouchableOpacity onPress={() => LikeModalRef.current?.open()}>
                      <Text style={styles.actionText}>{item.likesCount}</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => handleOpenComments(item)}>
                    <View style={styles.actionItem}>
                      <Image
                        source={require("../../resources/images/comment.png")}
                        style={styles.actionIcon}
                      />
                      <Text style={styles.actionText}>{item.comments}</Text>
                    </View>
                  </TouchableOpacity>


                  <TouchableOpacity onPress={() => ShareModalRef.current?.open()} style={styles.actionItem}>
                    <Image
                      source={require("../../resources/images/share.png")}
                      style={styles.actionIcon}
                    />
                    <Text style={styles.actionText}>{item.shares}</Text>
                  </TouchableOpacity>


                  <TouchableOpacity onPress={() => liveModalRef.current?.open()} style={styles.actionItem}>
                    <Image
                      source={require("../../resources/images/Vector.png")}
                      style={styles.actionIcon}
                    />

                    <Text style={styles.actionText}>{item.hvt}</Text>
                  </TouchableOpacity>


                </View>

                {/* Description */}
                <View style={styles.descriptionWrapper}>
                  <Text style={styles.postTitle}>{item.caption}</Text>
                  <Text style={styles.postDescription}>
                    {isExpanded ? fullText : `${previewText}...`}
                    <Text
                      style={styles.readMoreText}
                      onPress={() => toggleReadMore(index)}
                    >
                      {isExpanded ? " less" : " more"}
                    </Text>
                  </Text>
                </View>

                {/* Modals inside each item (not optimal, but works if content is per-post) */}
                <ReusableModal
                  ref={LikeModalRef}
                  header={
                    <View style={styles.bottomView}>
                      <Image
                        source={require("../../resources/images/Heart.png")}
                        style={styles.LikeIcon}
                      />
                      <Text style={styles.actionText}>{item.likesCount}</Text>
                    </View>
                  }
                  // content={renderLikeModal(item.likesCount)}
                  content={<LikeModalContent users={users} toggleFollow={toggleFollow} />}
                  modalHeight={scaleSizeHeight(320)}
                />

                <ReusableModal
                  ref={commentModalRef}
                  header={
                    <View style={styles.commentbottomView}>
                      <Image
                        source={require("../../resources/images/comment.png")}
                        style={styles.LikeIcon}
                      />
                      <Text style={styles.actionText}>{selectedPost?.comments || 0}</Text>
                    </View>
                  }
                  // content={renderCommentModal}
                  content={
                    <CommentModalContent
                      comments={comments}
                      commentsLoading={commentsLoading}
                      selectedPostId={selectedPostId}
                      commentText={commentText}
                      setCommentText={setCommentText}
                      handleSendComment={handleSendComment}
                    />
                  }
                  modalHeight={scaleSizeHeight(200)}
                />

                <ReusableModal
                  ref={ShareModalRef}
                  header={
                    <View style={styles.sharebottomView}>
                      <Image
                        source={require("../../resources/images/share.png")}
                        style={styles.modalshareIcon}
                      />
                      <Text style={styles.actionText}>{item.shares}</Text>
                    </View>
                  }
                  content={renderShareModal}
                  modalHeight={scaleSizeHeight(300)}
                />

                <ReusableModal
                  ref={liveModalRef}
                  header={
                    <View style={styles.bottomView}>
                      <Image
                        source={require("../../resources/images/Vector.png")}
                        style={styles.VectorIcon}
                      />
                      <Text style={styles.actionText}>{item.hvt}</Text>
                    </View>
                  }
                  content={renderliveModal(item)}
                  modalHeight={scaleSizeHeight(220)}
                />
                {/* More Options Modal */}
                <Modal
                  transparent
                  animationType="fade"
                  visible={isModalVisible}
                  onRequestClose={() => setIsModalVisible(false)}
                >
                  <TouchableOpacity
                    activeOpacity={1}
                    style={StyleSheet.absoluteFill}
                    onPress={() => setIsModalVisible(false)}
                  >
                    <View style={[styles.modalContent, { top: modalPosition.top, right: modalPosition.right }]}>
                      <TouchableOpacity style={styles.modalOption} onPress={() => {/* Handle Report action */ }}>
                        <Text style={styles.modalText}>Report</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.modalOption} onPress={handleSave}>
                        <Text style={styles.modalText}>Save</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.modalOption} onPress={() => {/* Handle Not interest action */ }}>
                        <Text style={styles.modalText}>Not interest</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.modalOption} onPress={() => {/* Handle Hide action */ }}>
                        <Text style={styles.modalText}>Hide</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </Modal>
                {/* //filter modal */}
                <Modal
                  transparent
                  animationType="fade"
                  visible={filterModalVisible}
                  onRequestClose={() => setIsFilterModalVisible(false)}
                >
                  <TouchableOpacity
                    activeOpacity={1}
                    style={StyleSheet.absoluteFill}
                    onPress={() => setIsFilterModalVisible(false)}
                  >
                    <View style={[styles.modalContent, { top: modalPosition.top, right: modalPosition.right }]}>
                      <TouchableOpacity style={styles.modalOption} onPress={() => {/* Handle Report action */ }}>
                        <Text style={styles.modalText}>Shorts</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.modalOption} onPress={() => {/* Handle Save action */ }}>
                        <Text style={styles.modalText}>Latest Update</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.modalOption} onPress={() => {/* Handle Not interest action */ }}>
                        <Text style={styles.modalText}>BitCoin</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.modalOption} onPress={() => {/* Handle Hide action */ }}>
                        <Text style={styles.modalText}>Funny</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.modalOption} onPress={() => {/* Handle Hide action */ }}>
                        <Text style={styles.modalText}>Technology</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.modalOption} onPress={() => {/* Handle Hide action */ }}>
                        <Text style={styles.modalText}>Entertaiment</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </Modal>

                {/* save bottom modal  */}
                <ReusableModal
                  ref={saveModalRef}
                  header={
                    <View style={styles.bottomView}>
                      {/* <Image
                        source={require("../../resources/images/save.png")} // Replace with appropriate save icon
                        style={styles.LikeIcon}
                      /> */}
                      <Text style={styles.actionText}>Save</Text>
                    </View>
                  }
                  content={
                    <View style={styles.SaveModal}>
                      {options.map(option => (
                        <View style={styles.checkboxGroup}>
                          <TouchableOpacity
                            key={option}
                            style={styles.checkboxContainer}
                            onPress={() => toggleCheckbox(option)}
                          >
                            <Image
                              source={
                                selectedCategory.includes(option)
                                  ? require('../../resources/images/checkCricle.png')
                                  : require('../../resources/images/cricle.png')
                              }
                              style={styles.checkboxImage}
                            />

                          </TouchableOpacity>
                          <Text style={styles.checkboxText}>{option}</Text>
                        </View>
                      ))}

                      {/* </ScrollView> */}
                      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <TextInput
                          style={styles.nameInput}
                          placeholder="Name"
                          value={selectedCategory === "Create New" ? "" : undefined}
                          onChangeText={(text) => {/* Handle custom name input */ }}
                        />
                        <TouchableOpacity style={styles.saveButton} onPress={() => saveModalRef.current?.close()}>
                          <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                      </View>

                    </View>
                  }
                  modalHeight={scaleSizeHeight(300)}
                />
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
