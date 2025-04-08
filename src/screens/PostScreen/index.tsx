import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const PostScreen = () => {
  const navigation = useNavigation();
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    tags: ["@shorts", "@lorem", "@loreml"],
    scheduleDate: "Friday 05 Mar",
    scheduleTime: "12:00",
    amPm: "AM",
    visibility: "Friends only",
    mediaFile: null,
    mediaType: null,
  });

  const [mediaModalVisible, setMediaModalVisible] = useState(false);
  const [sourceModalVisible, setSourceModalVisible] = useState(false);
  const [selectedMediaType, setSelectedMediaType] = useState(null);
  const [visibilityModalVisible, setVisibilityModalVisible] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Icon name="chevron-left" size={24} color="#fff" /> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Post</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.formContainer}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter text here..."
              placeholderTextColor="#666"
              value={postData.title}
              // onChangeText={(text) => handleInputChange("title", text)}
              maxLength={80}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.textarea}
              placeholder="Enter text here..."
              placeholderTextColor="#666"
              value={postData.description}
              // onChangeText={(text) => handleInputChange("description", text)}
              multiline
              maxLength={250}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PostScreen;
