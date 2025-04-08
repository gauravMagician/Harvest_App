import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./styles";
import { StringConstants } from "../../constants/StringConstants";
import { useNavigation } from "@react-navigation/native";
import Button from "../../component/Button";

const interests = [
  "Science",
  "Technology",
  "AI",
  "Technology",
  "Information Tech",
];
const users = [
  {
    id: "1",
    name: "Lorem ipsum dolor",
    isFollowing: false,
    avatar: require("../../resources/images/preferenceImg.png"),
  },
  {
    id: "2",
    name: "Lorem ipsum",
    isFollowing: true,
    avatar: require("../../resources/images/preferenceImg.png"),
  },
  {
    id: "3",
    name: "Lorem ipsum dolor",
    isFollowing: false,
    avatar: require("../../resources/images/preferenceImg.png"),
  },
];

const WalletPreferenceScreen = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [userList, setUserList] = useState(users);
  const navigation = useNavigation();
  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const toggleFollow = (id: string) => {
    setUserList((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Ionicons name="arrow-back" size={24} color="white" /> */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image
            source={require("../../resources/images/backicon.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Preference</Text>
      </View>
      {/* Interests Section */}
      <View style={styles.interestView}>
        <Text style={styles.sectionTitle}>Interest</Text>
        <View style={styles.interestContainer}>
          {interests.map((interest, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.interestButton,
                selectedInterests.includes(interest) &&
                styles.selectedInterestButton,
              ]}
              onPress={() => toggleInterest(interest)}
            >
              <Text
                style={[
                  styles.interestText,
                  selectedInterests.includes(interest) &&
                  styles.selectedInterestText,
                ]}
              >
                {interest}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Follow Section */}
      <View style={styles.followView}>
        <Text style={styles.sectionTitle}>Follow</Text>
        <FlatList
          data={userList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.userCard}>
              <Image source={item.avatar} style={styles.avatar} />
              <Text style={styles.userName}>{item.name}</Text>
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
            </View>
          )}
        />
      </View>

      {/* Save & Skip Buttons */}
      <View style={styles.buttonView}>
        <Button
          title={StringConstants.SAVA_PREFERENCE}
          onPress={() => navigation.navigate("HomePage")}
          style={styles.button}
        />
        <TouchableOpacity
          style={styles.skipView}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WalletPreferenceScreen;
