import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native"; // adjust path as needed
import { storage } from "../utils/storage";

const AuthLoader: React.FC = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const token = await storage.getToken();

        if (token) {
          // ✅ Token exists, user is logged in
          navigation.reset({
            index: 0,
            routes: [{ name: "BottomTab" }],
          });
        } else {
          // ❌ No token found
          navigation.reset({
            index: 0,
            routes: [{ name: "SignUp" }],
          });
        }
      } catch (error) {
        console.error("Session check failed:", error);
        navigation.reset({
          index: 0,
          routes: [{ name: "SignUp" }],
        });
      }
    };

    checkSession();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

export default AuthLoader;
