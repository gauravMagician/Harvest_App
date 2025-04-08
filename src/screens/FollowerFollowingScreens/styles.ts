import { StyleSheet } from 'react-native';
import { scaleFontSize, scaleSize, scaleSizeHeight, scaleSizeWidth, spacing } from '../../utils/deviceDimensions';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01081A',
        paddingHorizontal: spacing.medium,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: scaleSizeWidth(8),
        paddingTop: scaleSizeHeight(19),
        paddingBottom: scaleSizeHeight(20)
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backIcon: {
        width: scaleSize(20),
        height: scaleSize(20),
        resizeMode: 'contain',
        marginRight: spacing.small,
    },
    headerTabContainer: {
        flexDirection: 'row',
        gap: spacing.medium,
        marginLeft: scaleSizeHeight(10)
    },
    headerTabText: {
        fontSize: scaleFontSize(18),
        fontWeight: "700",
        color: '#FFFFFFAA',
        marginHorizontal: spacing.small,
    },
    activeTab: {
        color: '#FFFFFF',
        fontSize: scaleFontSize(18),
        fontWeight: "700",
    },
    searchButton: {
        padding: spacing.small,
    },
    searchIcon: {
        width: scaleSize(18),
        height: scaleSize(18),
        tintColor: '#fff',
        resizeMode: 'contain',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: scaleSizeHeight(5),
        marginHorizontal: scaleSizeWidth(10),
        // marginTop: scaleSizeHeight(5)
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: scaleSize(40),
        height: scaleSize(40),
        borderRadius: scaleSize(20),
        marginRight: spacing.medium,
    },
    username: {
        color: '#fff',
        fontSize: scaleFontSize(14),
        fontWeight: "600"
    },
    button: {
        backgroundColor: '#007BFF',
        paddingHorizontal: spacing.large,
        paddingVertical: spacing.small,
        borderRadius: scaleSize(8),
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    followingButton: {
        backgroundColor: '#fff',
    },
    followingText: {
        color: '#000',
    },
});
