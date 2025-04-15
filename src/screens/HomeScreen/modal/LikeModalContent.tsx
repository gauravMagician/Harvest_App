import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles'; // Adjust path to your styles file

interface LikeModalContentProps {
  users: any[];
  toggleFollow: (id: string) => void;
}

const LikeModalContent: React.FC<LikeModalContentProps> = ({ users, toggleFollow }) => {
  return (
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
                  item.isFollowing && styles.followingTextbottom,
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
  );
};

export default LikeModalContent;