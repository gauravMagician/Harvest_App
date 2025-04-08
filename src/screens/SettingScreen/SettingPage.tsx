import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
} from "react-native";
import styles from "./styles";
import images from "../../resources/images";
import { useNavigation } from "@react-navigation/native";
import { storage } from "../../utils/storage";
import { ScreenConstants } from "../../constants/ScreenConstants";

const menuItems = [
  { title: "Manage Profile", screen: "AccountSettingScreen" },
  { title: "My wallet", screen: "UserWalletScreen" },
  { title: "Notification", screen: "SettingNotification" },
  { title: "Blocked account", screen: "BlockListScreen" },
  { title: "My Status", screen: "MainEarningPage" },
  { title: "Premium", screen: "BuyMembershipScreen" },
  { title: "Account setting", screen: "AccountSettingScreen" },
  { title: "History", screen: "HistoryScreen" },
  { title: "FAQ", screen: "FaqScreen" },
  { title: "Support and Help", screen: "HelpScreen" },
  { title: "Privacy policy", screen: "PrivacyPolicy" },
  { title: "Logout", screen: "Logout" },
];

const SettingPage = () => {
  const Navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleMenuPress = (item: any) => {
    if (item.title === "Logout") {
      setModalVisible(true);
    } else {
      Navigation.navigate(item.screen);
    }
  };

  const handleLogout = () => {
    // Add your logout logic here
    setModalVisible(false);
    storage.clear();
    Navigation.navigate(ScreenConstants.SIGN_UP);
    // For example: Navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => Navigation.goBack()}>
            <Image
              source={require("../../resources/images/backicon.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <ScrollView>
          <View style={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => handleMenuPress(item)}>
                <Text style={styles.menuItem}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.referContainer}>
            <Image source={images.REFER_ICON} style={styles.megaPhoneIcon} />
            <Text style={styles.title}>Refer & Earn</Text>
            <Text style={styles.description}>
              For every successful referral, both you and your friend get
              exclusive benefits. Share your link now and start earning!
            </Text>
            <Text style={styles.referralCodeLabel}>Referral Code</Text>
            <View style={styles.referralCodeBox}>
              <Text style={styles.referralCode}>HVTO123D</Text>
              <TouchableOpacity>
                <Image source={images.REFER_COPY_ICON} style={styles.copyIcon} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.referButton}>
              <Text style={styles.referButtonText}>Refer Now</Text>
            </TouchableOpacity>
          </View>

          {/* Logout Modal */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={modalStyles.centeredView}>
              <View style={modalStyles.modalView}>
                <Text style={modalStyles.modalText}>Sign out</Text>
                <Text style={modalStyles.modalText}>
                  Are you sure you want to Sign Out from this device?
                </Text>
                <View style={modalStyles.buttonContainer}>
                  <TouchableOpacity
                    style={[modalStyles.button, modalStyles.cancelButton]}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={modalStyles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[modalStyles.button, modalStyles.logoutButton]}
                    onPress={handleLogout}
                  >
                    <Text style={modalStyles.logoutButtonText}>Logout</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    </View>
  );
};

// Add these styles to your styles.js file or create a new modalStyles object
const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#010B1F",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    minWidth: 100,
  },
  cancelButton: {
    backgroundColor: "#0360D2",
  },
  logoutButton: {
    backgroundColor: "#0360D2",
  },
  cancelButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SettingPage;
