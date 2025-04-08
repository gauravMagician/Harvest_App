import { StyleSheet } from "react-native";
import { scaleFontSize, scaleSize, scaleSizeHeight, scaleSizeWidth } from "../../../utils/deviceDimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#01081A",
        paddingHorizontal: scaleSizeWidth(20),
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: scaleSizeHeight(15),
        marginBottom: scaleSizeHeight(20),
    },
    backIcon: {
        width: scaleSize(20),
        height: scaleSize(15),
        tintColor: "#FFFFFF",
    },
    ConnectedbackIcon: {
        width: scaleSize(20),
        height: scaleSize(15),
        tintColor: "#FFFFFF",
        marginTop: scaleSizeHeight(7),
        marginRight: scaleSizeWidth(10)
    },
    headerTitle: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: "600",
        marginLeft: scaleSizeWidth(10),
    },
    walletContainer: {
        // alignItems: "center",
        marginTop: scaleSizeHeight(170),
    },
    walletTitle: {
        fontSize: scaleFontSize(28),
        fontWeight: "700",
        color: "#FFFFFF",
        marginBottom: scaleSizeHeight(10),
    },
    walletIcon: {
        width: scaleSize(82),
        height: scaleSize(82),
        marginTop: scaleSizeHeight(10),
    },
    walletName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#3093F0",
        marginTop: scaleSizeHeight(5),
    },
    walletInfoContainer: {
        marginTop: scaleSizeHeight(20),
    },
    infoRow: {
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
