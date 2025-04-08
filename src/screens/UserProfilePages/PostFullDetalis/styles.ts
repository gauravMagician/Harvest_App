import { StyleSheet } from 'react-native';
import { getResponsiveValue, scaleFontSize, scaleSize, scaleSizeHeight, scaleSizeWidth, spacing } from '../../../utils/deviceDimensions';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        // paddingBottom: scaleSize(60),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing.medium,
        marginTop: scaleSizeHeight(10)
    },
    profileImage: {
        width: scaleSize(34),
        height: scaleSize(34),
        borderRadius: scaleSize(22.5),
    },
    profileImageContainer: {
        width: scaleSizeWidth(38),
        height: scaleSizeHeight(30),
        borderRadius: getResponsiveValue(50, 60, 65),
        // backgroundColor: ColorConstants.COLOR_YELLOW,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#1C60DD',
    },
    nameTimeWrapper: {
        flex: 1,
        marginHorizontal: spacing.small,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        color: '#fff',
        fontSize: scaleFontSize(14),
        fontWeight: 'bold',
    },
    verifiedIcon: {
        width: scaleSize(9),
        height: scaleSize(9),
        marginHorizontal: spacing.small,
    },
    followButton: {
        width: scaleSizeWidth(53),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#1E5EFF',
        paddingVertical: scaleSize(5),
        borderRadius: scaleSize(4),
        marginLeft: spacing.small,
    },
    followText: {
        color: '#fff',
        fontSize: scaleFontSize(11),
        fontWeight: "400"
    },
    timeText: {
        color: '#9BBEFE',
        fontSize: scaleFontSize(10),
        fontWeight: "500"
    },
    moreIcon: {
        width: scaleSize(18),
        height: scaleSize(18),
        tintColor: '#fff',
    },
    videoContainer: {
        width: '100%',
        // aspectRatio: 9 / 16,
        marginBottom: spacing.small,
    },
    postImage: {
        width: scaleSizeWidth(389),
        height: scaleSizeHeight(300),
        // resizeMode: 'cover',
    },
    playIconWrapper: {
        position: 'absolute',
        alignSelf: 'center',
        top: '45%',
    },
    playIcon: {
        width: scaleSize(50),
        height: scaleSize(50),
    },
    actionsRow: {
        paddingHorizontal: spacing.medium,
        // paddingBottom: spacing.small,
        marginVertical: scaleSizeHeight(5)
    },
    reactionsRow: {
        flexDirection: 'row',
        // marginLeft:scaleSizeWidth(10)
        width: scaleSizeWidth(260),
        justifyContent: 'space-between',
        marginBottom: spacing.small,
    },
    iconTextRow: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: spacing.medium,
        // marginLeft:scaleSizeWidth(10)
    },
    icon: {
        width: scaleSize(20),
        height: scaleSize(20),
        marginRight: scaleSize(6),
    },
    iconText: {
        color: '#9BBEFE',
        fontSize: scaleFontSize(12),
        marginRight: spacing.medium,
    },
    postTitle: {
        color: '#fff',
        fontWeight: '500',
        fontSize: scaleFontSize(18),
    },
    postDescription: {
        color: '#fff',
        fontSize: scaleFontSize(14),
    },
    secondaryImage: {
        width: '100%',
        height: scaleSize(220),
        resizeMode: 'cover',
        marginBottom: spacing.medium,
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#000',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.medium,
        paddingVertical: spacing.small,
    },
    bottomIcon: {
        width: scaleSize(16),
        height: scaleSize(16),
        marginRight: spacing.medium,
        tintColor: '#fff',
    },
    seekBar: {
        flex: 1,
        height: scaleSize(2),
        backgroundColor: '#fff',
        borderRadius: scaleSize(1),
    },
    duration: {
        color: '#fff',
        fontSize: scaleFontSize(10),
        marginLeft: spacing.medium,
    },
    readMoreText: {
        color: '#3B82F6', // You can customize the color
        fontWeight: '600',

    },
    descriptionWrapper: {
        marginTop: 4,
    },
    modalContent: {
        position: "absolute",
        backgroundColor: '#010B1F', // Dark background
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 12,
        width: 100,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 1000,
    },
    modalItem: {
        paddingVertical: 4,
    },
    modalText: {
        color: '#FFFFFF',
        fontSize: scaleFontSize(15),
        fontWeight: "400"
    },

});
