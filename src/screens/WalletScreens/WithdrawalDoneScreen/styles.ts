import { StyleSheet } from "react-native";
import { fontSizes, scaleFontSize, scaleSize, scaleSizeHeight, scaleSizeWidth } from "../../../utils/deviceDimensions";

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        backgroundColor: "#01081A", // Dark blue gradient background
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(14, 14, 14, 0.3)", // Dark overlay effect
        // alignItems: "center",
        // justifyContent: "center",
    },
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: scaleSizeWidth(10),
        marginTop: scaleSizeHeight(100),
    },
    iconContainer: {
        backgroundColor: "#1533D5",
        borderRadius: 100,
        padding: scaleSizeHeight(25),
        marginBottom: scaleSizeHeight(20),
        shadowColor: "#1533D5",
        shadowOffset: { width: 100, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
    },
    icon: {
        width: scaleSizeWidth(60),
        height: scaleSizeWidth(60),
        resizeMode: "contain",
    },
    title: {
        fontSize: scaleFontSize(24),
        fontWeight: "700",
        color: "#fff",
        textAlign: "center",
        marginBottom: scaleSizeHeight(10),
    },
    subtitle: {
        width:337,
        fontSize: scaleFontSize(20),
        fontWeight: "400",
        color: "#CCCCCC",
        textAlign: "center",
        marginBottom: scaleSizeHeight(30),
    },
    detailsContainer: {
        width: "90%",
        backgroundColor: "#081B40",
        borderRadius: 12,
        padding: scaleSizeHeight(20),
        marginBottom: scaleSizeHeight(30),
    },
    detailRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: scaleSizeHeight(15),
    },
    label: {
        fontSize: scaleFontSize(fontSizes.medium),
        color: "#A8A8A8",
    },
    value: {
        fontSize: scaleFontSize(fontSizes.medium),
        color: "#3FA9F5",
        fontWeight: "bold",
    },
    transactionId: {
        fontSize: scaleFontSize(fontSizes.medium),
        color: "#3FA9F5",
        fontWeight: "bold",
        marginRight: scaleSizeWidth(10),
    },
    linkIcon: {
        width: scaleSizeWidth(20),
        height: scaleSizeWidth(20),
        resizeMode: "contain",
    },
    button: {
        width: "90%",
        backgroundColor: "#0360D2",
        paddingVertical: scaleSizeHeight(15),
        borderRadius: 10,
        alignItems: "center",
        marginTop:scaleSizeHeight(130),
    },
    buttonText: {
        fontSize: scaleFontSize(14),
        color: "#fff",
        fontWeight: "700",
    },
    walletInfoContainer: {
        marginTop: scaleSizeHeight(20),
    },
    infoRow: {
        width:scaleSizeWidth(320),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: scaleSizeHeight(8),
    },
    infoLabel: {
        fontSize: scaleFontSize(20),
        fontWeight: "400",
        color: "#D1D5DB",
    },
    infoValue: {
        fontSize: 16,
        color: "#3093F0",
        fontWeight: "600",
    },
    blueText: {
        color: "#3093F0",
    },
    copyButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    copyIcon: {
        width: scaleSize(14),
        height: scaleSize(18),
        marginLeft: 5,
        tintColor: "#FFFFFF",
    },
    disconnectButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0057FF",
        borderRadius: 16,
        paddingVertical: scaleSizeHeight(12),
        marginTop: scaleSizeHeight(90),
    },
    disconnectIcon: {
        width: scaleSize(18),
        height: scaleSize(18),
        tintColor: "#FFFFFF",
        marginRight: 8,
    },
    disconnectText: {
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: "600",
    },
});
