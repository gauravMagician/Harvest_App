import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import images from "../../resources/images";

const WalletConnectedScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../resources/images/Gold_Wallet.png")}
            style={styles.walletIcon}
          />
        </View>
        <View style={styles.innerView}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={require("../../resources/images/backicon.png")}
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Wallet Connected</Text>
          </View>

          <TouchableOpacity
            style={styles.walletInfoContainer}
            onPress={() => navigation.navigate("WalletConnectedDone")}
          >
            <Image
              source={require("../../resources/images/metamask.png")}
              style={styles.metamaskIcon}
            />
            <Text style={styles.metamaskText}>MetaMask</Text>
          </TouchableOpacity>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Wallet Address</Text>
            <TouchableOpacity style={styles.row}>
              <Text style={styles.linkText}>UQAIO...YhiYZ</Text>
              <Image
                source={images.IC_COPY} // Replace with actual copy icon image
                style={styles.copyIcon}
              />
              {/* <AntDesign name="copy1" size={16} color="white" /> */}
            </TouchableOpacity>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Balance</Text>
            <Text style={styles.linkText}>2534.4564 HVT</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Network</Text>
            <Text style={styles.linkText}>BNB</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default WalletConnectedScreen;
