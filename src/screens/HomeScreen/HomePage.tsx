import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform, ImageSourcePropType } from 'react-native';
import ReusableModal, { ReusableModalRef } from '../../component/BottomSheet';
import Loader from '../../component/Loader';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { scaleSizeHeight } from '../../utils/deviceDimensions';
import commentModalStyles from './commentModalStyles';
import images from '../../resources/images';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { storage, StorageKeys } from '../../utils/storage';
import { homeService } from '../../services/homeService';
import moment from "moment";
import { likePost } from '../../store/slices/homeSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

type Post = {
  id: string;
  name: string;
  postImage: ImageSourcePropType;
  profileImage: ImageSourcePropType;
  likes: number;
  comments: number;
  shares: number;
  tokens: number;
  createdAt: string;
  isFollowing: boolean;
  description?: string; // ✅ Add this
};


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


const comments = [
  {
    id: "1",
    username: "John Doe",
    userImage: require("../../resources/images/women.png"),
    comment: "Nice  welcome to my world my people",
    likes: [1, 2],
    createdAt: "2 W",
    date: "5d",
    replies: [
      {
        id: "1-1",
        username: "Jane Wel Smith",
        userImage: require("../../resources/images/preferenceImg.png"),
        comment: "Thanks,To Join our team John!",
        likes: [1],
        createdAt: "Just now",
        replies: [],
        date: "5d"
      },
      {
        id: "1-2",
        username: "Jane Wel Smith",
        userImage: require("../../resources/images/preferenceImg.png"),
        comment: "Thanks,To Join our team John!",
        likes: [1],
        createdAt: "Just now",
        replies: [],
        date: "5d"
      }
    ]
  },
  {
    id: "2",
    username: "Jane Smith",
    userImage: require("../../resources/images/women.png"),
    comment: "Amazing content! 😍",
    likes: [1],
    createdAt: "5 mins ago",
    replies: [],
    date: "5d"
  },
  {
    id: "3",
    username: "Jane Smith",
    userImage: require("../../resources/images/women.png"),
    comment: "Amazing content! 😍",
    likes: [1],
    createdAt: "5 mins ago",
    replies: [],
    date: "5d"
  },
  {
    id: "4",
    username: "Jane Smith",
    userImage: require("../../resources/images/women.png"),
    comment: "Amazing content! 😍",
    likes: [1],
    createdAt: "5 mins ago",
    replies: [],
    date: "5d"
  },
  {
    id: "5",
    username: "Jane Smith",
    userImage: require("../../resources/images/women.png"),
    comment: "Amazing content! 😍",
    likes: [1],
    createdAt: "5 mins ago",
    replies: [],
    date: "5d"
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
        // const mappedFeeds = response?.map((post) => ({
        //   id: post?._id || Math.random().toString(),
        //   username: post?.user?.name || "Unknown",
        //   userImage: post?.user?.profileImage
        //     ? { uri: `${post.user.profileImage}` }
        //     : require("../../resources/images/women.png"),
        //   totalLikesEarning: post?.totalLikesEarning || 0,
        //   totalCommentsEarning: post?.totalCommentsEarning || 0,
        //   totalSharesEarning: post?.totalSharesEarning || 0,
        //   postImage:
        //     post?.media?.length > 0
        //       ? { uri: `${post.media[0]}` }
        //       : require("../../resources/images/bravewallet.png"),
        //   likes: post?.likesCount?.toString() || "0",
        //   comments: post?.commentsCount?.toString() || "0",
        //   shares: post?.sharesCount?.toString() || "0",
        //   hvt: `${post?.totalEarnings || 0} HVT`,
        //   isFollowing: post?.user?.followers?.includes(userId) || false,
        //   isLiked: post?.likes?.includes(userId) || false,
        //   likesCount: post?.likesCount || 0,
        //   commentsCount: post?.commentsCount || 0,
        //   sharesCount: post?.sharesCount || 0,
        //   createdAt: post?.createdAt || new Date().toISOString(),
        //   description: post?.description || "",
        // }));

        const mappedFeeds = response?.map((post) => ({
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
  console.log(feeds, 'png');


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
    <>
      <View style={{ flex: 1 }}>
        <View style={commentModalStyles.commentInputWrapper}>
          <TextInput
            placeholder="Comment"
            placeholderTextColor="#999"
            style={commentModalStyles.commentInput}
          />
          <TouchableOpacity style={commentModalStyles.sendButton}>
            <Image source={require("../../resources/images/send.png")} style={commentModalStyles.sendIcon} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={({ item: comment }) => (
            <View style={[commentModalStyles.commentRow,]}>
              <Image source={comment.userImage} style={commentModalStyles.avatar} />
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
                    <Text style={commentModalStyles.likeCount}>{comment.likes?.length || 0} likes</Text>
                  </TouchableOpacity>
                </View>
                {comment.replies && comment.replies.length > 0 && (
                  <View style={commentModalStyles.innercomment}>
                    {comment.replies.map((reply) => (
                      <>
                        <View key={reply.id} style={commentModalStyles.commentRow}>
                          <Image source={reply.userImage} style={commentModalStyles.avatar} />
                          <View style={commentModalStyles.commentContent}>
                            <View style={commentModalStyles.commentContentHeader}>
                              <View style={commentModalStyles.createdView}>
                                <Text style={commentModalStyles.commentName}>{reply.username || "Anonymous"}</Text>
                                <Text style={commentModalStyles.date}>{reply.date}</Text>
                              </View>
                              <View style={commentModalStyles.CreatedView}>
                                <Text style={commentModalStyles.daytext}>{reply.createdAt}</Text>
                                <Image source={images.IC_DOTS} style={commentModalStyles.dots} />
                              </View>
                            </View>
                            <View style={commentModalStyles.innercreatedView}>
                              <Text style={commentModalStyles.commentText}>{reply.comment}</Text>
                              <Image source={require("../../resources/images/Heart.png")} style={commentModalStyles.HeartIcons} />
                            </View>
                          </View>
                          {/* <View style={commentModalStyles.commentFooter}>
                        <TouchableOpacity style={commentModalStyles.likeButton}>
                          <Text style={commentModalStyles.innerlikeCount}>{comment.likes?.length || 0} likes</Text>
                        </TouchableOpacity>
                      </View> */}
                        </View>

                      </>
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

      </View>
    </>

  )

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
            // onPress={() => toggleFollow(item.id.toString())}
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
                    // source={require("../../resources/images/Heart.png")}
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

                <View style={styles.actionItem}>
                  <Image
                    source={require("../../resources/images/comment.png")}
                    style={styles.actionIcon}
                  />
                  <TouchableOpacity onPress={() => commentModalRef.current?.open()}>
                    <Text style={styles.actionText}>{item.comments}</Text>
                  </TouchableOpacity>
                </View>


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
                    <Text style={styles.actionText}>{item.comments}</Text>
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
