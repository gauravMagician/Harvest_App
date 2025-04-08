import { StyleSheet } from 'react-native';
import {
    scaleSize,
    scaleSizeHeight,
    scaleSizeWidth,
} from '../../../utils/deviceDimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',

    },

    header: {
        marginTop: scaleSizeHeight(50),
        paddingHorizontal: scaleSizeWidth(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: scaleSize(20),
        height: scaleSize(20),
    },
    liveBadgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scaleSizeWidth(10),
    },
    liveText: {
        backgroundColor: '#0F4BBD',
        color: 'white',
        paddingHorizontal: scaleSize(8),
        paddingVertical: scaleSize(4),
        borderRadius: scaleSize(4),
        fontSize: scaleSize(12),
        fontWeight: 'bold',
    },
    viewCountContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(48, 43, 43, 0.4)',
        paddingHorizontal: scaleSize(6),
        paddingVertical: scaleSize(2),
        borderRadius: scaleSize(4),
        alignItems: 'center',
    },
    eyeIcon: {
        width: scaleSize(12),
        height: scaleSize(12),
        marginRight: scaleSize(4),
    },
    viewerCount: {
        color: 'white',
        fontSize: scaleSize(12),
    },
    endText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: scaleSize(14),
    },
    commentList: {
        position: 'absolute',
        bottom: scaleSizeHeight(100),
        left: scaleSizeWidth(16),
        right: scaleSizeWidth(16),
        maxHeight: scaleSizeHeight(200),
    },
    commentText: {
        color: 'white',
        fontSize: scaleSize(14),
        marginBottom: scaleSizeHeight(4),
    },
    username: {
        fontWeight: 'bold',
        color: 'white',
    },
    bottomBar: {
        // backgroundColor:"#00000000",
        position: 'absolute',
        bottom: scaleSizeHeight(20),
        left: scaleSizeWidth(16),
        right: scaleSizeWidth(16),
        flexDirection: 'row',
        alignItems: 'center',
    },
    commentInput: {
        flex: 1,
        // backgroundColor: 'rgba(255,255,255,0.2)',
        backgroundColor: '#01081A',
        color: 'white',
        borderRadius: scaleSize(20),
        paddingHorizontal: scaleSize(16),
        paddingVertical: scaleSizeHeight(8),
        marginRight: scaleSizeWidth(10),
    },
    actionIcons: {
        flexDirection: 'row',
        gap: scaleSize(8),
    },
    iconSmall: {
        width: scaleSize(20),
        height: scaleSize(20),
    },
});

export default styles;
