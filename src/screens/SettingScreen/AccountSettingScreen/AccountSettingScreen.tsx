import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, StyleSheet } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import images from "../../../resources/images";
import Button from "../../../component/Button";
import { StringConstants } from "../../../constants/StringConstants";
import { scaleFontSize, scaleSizeHeight, scaleSizeWidth } from "../../../utils/deviceDimensions";

const settingsOptions = [
  { name: "Privacy", route: "PrivacySetting" },
  { name: "Delete account", route: "DeleteAccountScreen" },
  { name: "Backup", route: "BackUpScreens" },
  { name: "Update Phone Number", route: "PhoneNumberChange" },
];

const AccountSettingScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleNavigation = (route: string) => {
    if (route === "DeleteAccountScreen") {
      setIsModalVisible(true);
    } else {
      navigation.navigate(route as never);
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={images.IC_BACK} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Account Setting</Text>
          </View>

          <View style={styles.optionsContainer}>
            {settingsOptions.map((option, index) => (
              <TouchableOpacity key={index} onPress={() => handleNavigation(option.route)}>
                <Text style={styles.optionText}>{option.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Delete Account Modal */}
      <Modal animationType="fade" transparent={true} visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalTitle}>Confirm Account Deletion?</Text>

            {/* Checkbox */}
            <View style={modalStyles.checkboxContainer} >
              <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                <Image
                  source={isChecked ? images.IC_CHECK_BOX : images.IC_UNCHECK_BOX}
                  style={modalStyles.checkboxImage}
                />
              </TouchableOpacity>
              <Text style={modalStyles.checkboxText}>
                Before deleting your account, you can take a backup of the database
              </Text>
            </View>


            {/* Buttons */}
            <View style={modalStyles.buttonContainer}>
              <Button title={StringConstants.YES} style={modalStyles.yesButton} />
              <Button title={StringConstants.CANCEL} onPress={() => setIsModalVisible(false)} style={modalStyles.cancelButton} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "#01081A",
    borderRadius: 10,
    padding: 40,
    width: scaleSizeWidth(336),
    height: scaleSizeHeight(185),
    alignItems: "center",
  },
  modalTitle: {
    fontSize: scaleFontSize(24),
    fontWeight: "700",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxImage: {
    width: scaleSizeWidth(24),
    height: scaleSizeHeight(20),
    marginRight: 10,
    tintColor: "white",
    position: "relative",
    bottom: 2,
  },
  checkboxText: {
    color: "#fff",
    fontSize: scaleFontSize(18),
    fontWeight: "400"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  yesButton: {
    backgroundColor: "#0360D2",
    width: scaleSizeWidth(100),
    height: scaleSizeHeight(30),
    borderRadius: 10,
  },
  cancelButton: {
    backgroundColor: "#0360D2",
    width: scaleSizeWidth(100),
    height: scaleSizeHeight(30),
    borderRadius: 10,
    marginLeft: scaleSizeWidth(10)
  },
});

export default AccountSettingScreen;
