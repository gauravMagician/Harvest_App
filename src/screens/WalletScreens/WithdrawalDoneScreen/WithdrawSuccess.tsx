import React from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import images from "../../../resources/images";
import { useNavigation } from "@react-navigation/native";

const WithdrawSuccess = () => {
    const navigation=useNavigation()
    return (
        <ImageBackground
            source={require("../../../resources/images/backimg.png")}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Image source={images.CHECKED_ICON} style={styles.icon} />
                    </View>
                    <Text style={styles.title}>Withdrawal Successful!</Text>
                    <Text style={styles.subtitle}>
                        Your funds have been successfully withdrawn to your Web3 wallet.
                    </Text>
                    {/* Wallet Information */}
                    <View style={styles.walletInfoContainer}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Amount</Text>
                            <TouchableOpacity style={styles.copyButton}>
                                <Text style={styles.infoValue}>9990.8760 HVT</Text>
                                {/* <Image source={images.IC_COPY} style={styles.copyIcon} /> */}
                            </TouchableOpacity>
                        </View>

                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Wallet Address</Text>
                            <Text style={[styles.infoValue, styles.blueText]}>UQAIO...YhiYZ</Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Transaction ID</Text>
                            <Text style={[styles.infoValue, styles.blueText]}>HVT98765432</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("HomePage")}>
                        <Text style={styles.buttonText}>Back To Homepage</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ImageBackground>
    );
};

export default WithdrawSuccess;
