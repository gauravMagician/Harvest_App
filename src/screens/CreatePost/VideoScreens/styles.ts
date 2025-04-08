import { StyleSheet } from 'react-native';
import {
    scaleSize,
    scaleSizeHeight,
    scaleSizeWidth,
} from '../../../utils/deviceDimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000D1A',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: scaleSize(16),
        paddingVertical: scaleSizeHeight(14),
    },
    backIcon: {
        width: scaleSize(24),
        height: scaleSize(24),
        tintColor: 'white',
    },
    selectText: {
        fontSize: scaleSize(16),
        color: 'white',
        fontWeight: '600',
    },
    checkIcon: {
        width: scaleSize(24),
        height: scaleSize(24),
        tintColor: 'white',
    },
    grid: {
        paddingHorizontal: scaleSize(1),
    },
    videoItem: {
        width: '33.33%',
        aspectRatio: 1,
        padding: scaleSize(1),
    },
    thumbnail: {
        width: '100%',
        height: '100%',
    },
    playIcon: {
        width: scaleSize(18),
        height: scaleSize(18),
        position: 'absolute',
        top: scaleSize(6),
        right: scaleSize(6),
        tintColor: 'white',
    },
    overlay: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    selectedTick: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    selectedItem: {
        borderWidth: 2,
        borderColor: '#00BFFF',
    },
    checkMarkContainer: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'dodgerblue',
        borderRadius: 12,
        padding: 2,
    },
    checkMarkIcon: {
        width: 16,
        height: 16,
        tintColor: 'white',
    },
    selectButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 8,
    },
    selectButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
    },
    previewContainer: {
        height: '45%',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    previewVideo: {
        width: '100%',
        height: '100%',
    },
    noPreviewText: {
        color: '#aaa',
        fontSize: 16,
    },
    previewThumbnail: {
        width: scaleSize(100),
        height: scaleSize(100),
        marginRight: scaleSize(10),
        borderRadius: scaleSize(8),
    },

    // New styles for the updated video selection screen
    durationText: {
        position: 'absolute',
        right: scaleSize(5),
        bottom: scaleSize(5),
        color: 'white',
        fontSize: scaleSize(12),
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: scaleSize(4),
        borderRadius: scaleSize(3),
    },
    galleryContainer: {
        flex: 1,
        backgroundColor: '#000D1A',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyGallery: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: scaleSize(20),
    },
    emptyText: {
        fontSize: scaleSize(16),
        color: '#666',
        marginBottom: scaleSizeHeight(20),
        textAlign: 'center',
    },
    refreshButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: scaleSize(20),
        paddingVertical: scaleSizeHeight(10),
        borderRadius: scaleSize(5),
    },
    refreshText: {
        color: 'white',
        fontSize: scaleSize(16),
    },
    noPreview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoControls: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: scaleSizeHeight(40),
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scaleSize(10),
    },
    timeText: {
        color: 'white',
        fontSize: scaleSize(12),
        marginHorizontal: scaleSize(5),
    },
    progressBar: {
        flex: 1,
        height: scaleSizeHeight(2),
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginHorizontal: scaleSize(5),
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#00BFFF',
    },
});

export default styles;


