import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import images from "../../../resources/images";



const WalletDetails = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={images.IC_BACK} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Wallet</Text>
            </View>

            {/* Connected Wallet Section */}
            <View style={styles.walletContainer}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={images.IC_BACK} style={styles.ConnectedbackIcon} />
                    </TouchableOpacity>
                    <Text style={styles.walletTitle}>Connected Wallet</Text>
                </View>

                <Image source={images.IC_META_MASK} style={styles.walletIcon} />
                <Text style={styles.walletName}>Meta Mask</Text>
            </View>

            {/* Wallet Information */}
            <View style={styles.walletInfoContainer}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Wallet Address</Text>
                    <TouchableOpacity style={styles.copyButton}>
                        <Text style={styles.infoValue}>UQAIO...YhiYZ</Text>
                        <Image source={images.IC_COPY} style={styles.copyIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>HVT Balance</Text>
                    <Text style={[styles.infoValue, styles.blueText]}>10459876.7654 HVT</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Network</Text>
                    <Text style={[styles.infoValue, styles.blueText]}>BSC</Text>
                </View>
            </View>

            {/* Disconnect Button */}
            <TouchableOpacity style={styles.disconnectButton}>
                <Image source={images.IC_DISCONNECT} style={styles.disconnectIcon} />
                <Text style={styles.disconnectText}>Disconnect Wallet</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WalletDetails;
