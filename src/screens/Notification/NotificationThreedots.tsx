import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./styles";
import { scaleSizeHeight, spacing } from "../../utils/deviceDimensions";
import images from "../../resources/images";
import ImageButton from "../../component/ImageButton";
import { useNavigation } from "@react-navigation/native";

// Example notification data to match your screenshot exactly
const notificationsData = [
    {
        id: "1",
        userName: "Tiffany",
        message: "Liked your post",
        time: "20 sec ago",
        showAccept: false,
        profileImage: require("../../resources/images/preferenceImg.png"),
    },
    {
        id: "2",
        userName: "Denita",
        message: "Send you a friend request",
        time: "54 min ago",
        showAccept: true,
        profileImage: require("../../resources/images/women.png"),
    },
    {
        id: "3",
        userName: "Denita",
        message: "Send you a friend request",
        time: "2 hr ago",
        showAccept: true,
        profileImage: require("../../resources/images/preferenceImg.png"),
    },
    {
        id: "4",
        userName: "Denita",
        message: "Send you a friend request",
        time: "54 min ago",
        showAccept: true,
        profileImage: require("../../resources/images/women.png"),
    },
    {
        id: "5",
        userName: "Denita",
        message: "Send you a friend request",
        time: "2 hr ago",
        showAccept: true,
        profileImage: require("../../resources/images/preferenceImg.png"),
    },
];


const NotificationThreedots = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {/* Top Bar (Header) */}
            <View style={styles.topBar}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ImageButton
                        containerStyle={{ width: 0, marginEnd: spacing.large }}
                        image={images.IC_BACK}
                        onPress={() => navigation.goBack()}
                    />
                    <Image
                        source={require("../../resources/images/Logo.png")}
                        style={styles.headerIcon}
                    />
                </View>
                <TouchableOpacity style={styles.selectContainer}>
                    <Image
                        source={require("../../resources/images/Notification.png")}
                        style={styles.selectIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.innerheader}>
                <Text style={styles.selectText}>Today</Text>
                {/* Right side: "Select" + icon */}
                <View style={styles.rightHeader}>
                    <TouchableOpacity style={styles.selectContainer}>
                        <Text style={styles.selectText}>Select</Text>
                        <Image
                            source={require("../../resources/images/down.png")}
                            style={styles.downIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Content */}
            <ScrollView>
                {notificationsData.map((item) => (
                    <View key={item.id} style={styles.dotsnotificationItem}>
                        <Image source={item.profileImage} style={styles.userImage} />
                        <View style={styles.textContainer}>
                            <Text style={styles.notificationText}>
                                {item.userName} {item.message}
                            </Text>
                            <Text style={styles.timeText}>{item.time}</Text>
                        </View>
                        {item.showAccept && (
                            <TouchableOpacity style={styles.acceptButton}>
                                <Text style={styles.acceptButtonText}>Accept</Text>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity onPress={() => navigation.navigate("NotificationThreedots")}>
                            <Image
                                source={require("../../resources/images/more.png")}
                                style={styles.moreIcon}
                            />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default NotificationThreedots;
