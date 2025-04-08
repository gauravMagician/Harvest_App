import { StyleSheet } from "react-native";
import { scaleSizeHeight } from "../utils/deviceDimensions";


export default StyleSheet.create({
    tabBar: {
        backgroundColor: '#000',
        borderTopWidth: 0,
        height: scaleSizeHeight(50),
    },
    icon: {
        width: 19,
        height: 18,
        tintColor: '#888',
        marginTop: 10
    },
    iconFocused: {
        tintColor: '#0360D2',
    },
    addButtonContainer: {
        backgroundColor: '#007AFF',
        width: 40,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaleSizeHeight(14)
        // marginBottom: 10,
    },
    addButtonIcon: {
        width: 19,
        height: 18,
        tintColor: '#fff',
    },
    profileicon: {
        width: 30,
        height: 30,
        tintColor: '#888',
        marginTop: 10
    }
});
