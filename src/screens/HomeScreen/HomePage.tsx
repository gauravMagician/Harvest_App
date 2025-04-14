import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, TextInput, ActivityIndicator, } from 'react-native';
import ReusableModal, { ReusableModalRef } from '../../component/BottomSheet';
import Loader from '../../component/Loader';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { scaleSizeHeight } from '../../utils/deviceDimensions';
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

const posts = [
  {
    id: '1',
    name: 'Amelia John',
    time: '30 sec ago',
    profileImage: require('../../resources/images/women.png'),
    postImage: require('../../resources/images/post2.png'),
    likes: '12.5K',
    comments: '8.5K',
    shares: '5.6K',
    tokens: '1.2K HVT',
    text: 'Lorem ipsum dolor sit...',
    isFollowing: true,
    createdAt: "30 sec ago"


  },
  {
    id: '2',
    name: 'Amelia John',
    time: '30 sec ago',
    profileImage: require('../../resources/images/women.png'),
    postImage: require('../../resources/images/user5.png'),
    likes: '12.5K',
    comments: '8.5K',
    shares: '5.6K',
    tokens: '1.2K HVT',
    text: 'Lorem ipsum dolor sit...',
    isFollowing: true,
    createdAt: "30 sec ago"

  },
  {
    id: '3',
    name: 'Amelia John',
    time: '30 sec ago',
    profileImage: require('../../resources/images/women.png'),
    postImage: require('../../resources/images/post2.png'),
    likes: '12.5K',
    comments: '8.5K',
    shares: '5.6K',
    tokens: '1.2K HVT',
    text: 'Lorem ipsum dolor sit...',
    isFollowing: true,
    createdAt: "30 sec ago"

  },
  {
    id: '4',
    name: 'Amelia John',
    time: '30 sec ago',
    profileImage: require('../../resources/images/women.png'),
    postImage: require('../../resources/images/post2.png'),
    likes: '12.5K',
    comments: '8.5K',
    shares: '5.6K',
    tokens: '1.2K HVT',
    text: 'Lorem ipsum dolor sit...',
    isFollowing: true,
    createdAt: "30 sec ago"

  },
  {
    id: '5',
    name: 'Amelia John',
    time: '30 sec ago',
    profileImage: require('../../resources/images/women.png'),
    postImage: require('../../resources/images/post2.png'),
    likes: '12.5K',
    comments: '8.5K',
    shares: '5.6K',
    tokens: '1.2K HVT',
    text: 'Lorem ipsum dolor sit...',
    isFollowing: true,
    createdAt: "30 sec ago"

  },
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
  const moreModalRef = useRef<ReusableModalRef>(null);
  const [expandedStates, setExpandedStates] = useState<boolean[]>([]);
  const [userId, setUserId] = useState(null);
  const [feeds, setFeeds] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState("");

  const { comments, commentsLoading, postCommentLoading } = useSelector(
    (state: RootState) => state.comments
  );
  console.log(comments);


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
    if (posts?.length) {
      setExpandedStates(Array(posts.length).fill(false));
    }
  }, [posts]);

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

  {/* comment Render items */ }
  const renderCommentModal = (
    <View style={{ flex: 1 }}>
      <View style={commentModalStyles.commentInputWrapper}>
        <TextInput
          placeholder="Comment"
          placeholderTextColor="#999"
          value={commentText}
          onChangeText={setCommentText}
          style={commentModalStyles.commentInput}
        />
        <TouchableOpacity style={commentModalStyles.sendButton} onPress={handleSendComment}>
          <Image
            source={require("../../resources/images/send.png")}
            style={commentModalStyles.sendIcon}
          />
        </TouchableOpacity>
      </View>

      {/* --- Comments List --- */}
      {commentsLoading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : comments[selectedPostId] && comments[selectedPostId].length > 0 ? (
        <FlatList
          data={comments[selectedPostId]}
          keyExtractor={(item) => item._id || Math.random().toString()}
          renderItem={({ item: comment }) => (
            <View style={commentModalStyles.commentRow}>
              <Image source={
                comment.userImage
                  ? { uri: comment.userImage }
                  : require("../../resources/images/women.png")
              } style={commentModalStyles.avatar} />
              <View style={commentModalStyles.commentContent}>
                <View style={commentModalStyles.commentContentHeader}>
                  <View style={commentModalStyles.createdView}>
                    <Text style={commentModalStyles.commentName}>{comment.username || "Anonymous"}</Text>
                    <Text style={commentModalStyles.date}>{comment.date}</Text>
                  </View>
                  <View style={commentModalStyles.createdView}>
                    <Text style={commentModalStyles.daytext}>{comment.createdAt}</Text>
                    <Image source={images.IC_DOTS} style={commentModalStyles.dots} />
                  </View>
                </View>

                <View style={commentModalStyles.createdView}>
                  <Text style={commentModalStyles.commentText}>{comment.comment}</Text>
                  <Image source={require("../../resources/images/Heart.png")} style={commentModalStyles.HeartIcons} />
                </View>

                <View style={commentModalStyles.commentFooter}>
                  <TouchableOpacity style={commentModalStyles.likeButton}>
                    <Text style={commentModalStyles.likeCount}>
                      {comment.likes?.length || 0} likes
                    </Text>
                  </TouchableOpacity>
                </View>

                {comment.replies && comment.replies.length > 0 && (
                  <View style={commentModalStyles.innercomment}>
                    {comment.replies.map((reply: any) => (
                      <View key={reply._id || Math.random().toString()} style={commentModalStyles.commentRow}>
                        <Image source={{ uri: reply.userImage }} style={commentModalStyles.avatar} />
                        <View style={commentModalStyles.commentContent}>
                          <View style={commentModalStyles.commentContentHeader}>
                            <View style={commentModalStyles.createdView}>
                              <Text style={commentModalStyles.commentName}>{reply.username || "Anonymous"}</Text>
                              <Text style={commentModalStyles.date}>{reply.date}</Text>
                            </View>
                            <View style={commentModalStyles.createdView}>
                              <Text style={commentModalStyles.daytext}>{reply.createdAt}</Text>
                              <Image source={images.IC_DOTS} style={commentModalStyles.dots} />
                            </View>
                          </View>
                          <View style={commentModalStyles.innercreatedView}>
                            <Text style={commentModalStyles.commentText}>{reply.comment}</Text>
                            <Image source={require("../../resources/images/Heart.png")} style={commentModalStyles.HeartIcons} />
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: scaleSizeHeight(20) }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />
      ) : (
        <Text style={{ padding: 15, color: "#888" }}>No comments available.</Text>
      )}
    </View>
  );


  {/* like Render items */ }
  const renderLikeModal = (
    <View style={styles.modalContainer}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userRow}>
            <Image source={item.avatar} style={styles.avatar} />
            <Text style={styles.bottomname}>{item.name}</Text>
            <TouchableOpacity
              style={[
                styles.followButtonbottom,
                item.isFollowing && styles.followingButtonbottom,
              ]}
              onPress={() => toggleFollow(item.id.toString())}
            >
              <Text
                style={[
                  styles.followTextbottom,
                  // item.isFollowing && styles.followingTextbottom,
                ]}
              >
                {item.isFollowing ? "Following" : "Follow"}
              </Text>
            </TouchableOpacity>


          </View>
        )}
        scrollEnabled={true}
      />
    </View>
  )

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
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../resources/images/Logo.png")}
          style={styles.headerIcon}
        />
        <View style={styles.headerIcons}>
          <Image
            source={require("../../resources/images/search.png")}
            style={styles.icons}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("SettingPage")}
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
          // const formattedDate = moment(item.createdAt).fromNow();

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
                <TouchableOpacity onPress={() => moreModalRef.current?.open()}>
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
                  <Image
                    source={
                      item.isLiked
                        ? require("../../resources/images/Heart.png") // Ensure this image exists
                        :
                        require("../../resources/images/PlanHeart.png")
                    }
                    style={styles.HartIcon}
                  />
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


                <View style={styles.actionItem}>
                  <Image
                    source={require("../../resources/images/share.png")}
                    style={styles.actionIcon}
                  />
                  <TouchableOpacity onPress={() => ShareModalRef.current?.open()}>
                    <Text style={styles.actionText}>{item.shares}</Text>
                  </TouchableOpacity>
                </View>


                <View style={styles.actionItem}>
                  <Image
                    source={require("../../resources/images/Vector.png")}
                    style={styles.actionIcon}
                  />
                  <TouchableOpacity onPress={() => liveModalRef.current?.open()}>
                    <Text style={styles.actionText}>{item.hvt}</Text>
                  </TouchableOpacity>
                </View>

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
                content={renderLikeModal}
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
                content={renderCommentModal}
                modalHeight={scaleSizeHeight(470)}
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
            </View>
          );
        }}
      />
    </View>
  );
};
export default HomeScreen;
