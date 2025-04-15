import React from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import commentModalStyles from '../commentModalStyles';
import images from '../../../resources/images';


interface CommentModalContentProps {
    comments: any[];
    commentsLoading: boolean;
    selectedPostId: string | null;
    commentText: string;
    setCommentText: (text: string) => void;
    handleSendComment: () => void;
}

const CommentModalContent: React.FC<CommentModalContentProps> = ({
    comments,
    commentsLoading,
    selectedPostId,
    commentText,
    setCommentText,
    handleSendComment,
}) => {
    return (
        <View style={styles.container}>
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
                        source={require("../../../resources/images/send.png")}
                        style={commentModalStyles.sendIcon}
                    />
                </TouchableOpacity>
            </View>

            {commentsLoading ? (
                <ActivityIndicator size="small" color="#0000ff" />
            ) : comments[selectedPostId] && comments[selectedPostId].length > 0 ? (
                <FlatList
                    data={comments[selectedPostId]}
                    keyExtractor={(item) => item._id || Math.random().toString()}
                    renderItem={({ item: comment }) => (
                        <View style={commentModalStyles.commentRow}>
                            <Image
                                source={
                                    comment.userImage
                                        ? { uri: comment.userImage }
                                        : require("../../../resources/images/women.png")
                                }
                                style={commentModalStyles.avatar}
                            />
                            <View style={commentModalStyles.commentContent}>
                                <View style={commentModalStyles.commentContentHeader}>
                                    <View style={commentModalStyles.createdView}>
                                        <Text style={commentModalStyles.commentName}>
                                            {comment.username || "Anonymous"}
                                        </Text>
                                        <Text style={commentModalStyles.date}>{comment.date}</Text>
                                    </View>
                                    <View style={commentModalStyles.createdView}>
                                        <Text style={commentModalStyles.daytext}>{comment.createdAt}</Text>
                                        <Image source={images.IC_DOTS} style={commentModalStyles.dots} />
                                    </View>
                                </View>

                                <View style={commentModalStyles.createdView}>
                                    <Text style={commentModalStyles.commentText}>{comment.comment}</Text>
                                    <Image
                                        source={require("../../../resources/images/Heart.png")}
                                        style={commentModalStyles.HeartIcons}
                                    />
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
                                                            <Text style={commentModalStyles.commentName}>
                                                                {reply.username || "Anonymous"}
                                                            </Text>
                                                            <Text style={commentModalStyles.date}>{reply.date}</Text>
                                                        </View>
                                                        <View style={commentModalStyles.createdView}>
                                                            <Text style={commentModalStyles.daytext}>{reply.createdAt}</Text>
                                                            <Image source={images.IC_DOTS} style={commentModalStyles.dots} />
                                                        </View>
                                                    </View>
                                                    <View style={commentModalStyles.innercreatedView}>
                                                        <Text style={commentModalStyles.commentText}>{reply.comment}</Text>
                                                        <Image
                                                            source={require("../../../resources/images/Heart.png")}
                                                            style={commentModalStyles.HeartIcons}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        ))}
                                    </View>
                                )}
                            </View>
                        </View>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                />
            ) : (
                <Text style={{ padding: 15, color: "#888" }}>No comments available.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CommentModalContent;