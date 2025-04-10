import { StyleSheet } from 'react-native';
import {
    scaleSize,
    scaleSizeHeight,
    scaleSizeWidth,
} from '../../../utils/deviceDimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000618',
        justifyContent: 'space-between',
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: scaleSizeHeight(25),
        paddingHorizontal: scaleSizeWidth(20),
    },
    iconBack: {
        width: scaleSize(19),
        height: scaleSize(16),
        tintColor: 'white',
    },
    addSoundButton: {
        backgroundColor: '#0F4BBD',
        paddingVertical: scaleSizeHeight(5),
        paddingHorizontal: scaleSizeWidth(10),
        borderRadius: scaleSize(5),
    },
    addSoundText: {
        color: '#FFFFFF',
        fontSize: scaleSize(11),
        fontWeight: "600"
    },
    topRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scaleSizeWidth(10),
    },
    timerText: {
        color: '#FFFFFF',
        fontSize: scaleSize(14),
    },
    checkIcon: {
        width: scaleSize(20),
        height: scaleSize(18),
        tintColor: 'white',
    },
    recordCircleWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: scaleSizeHeight(3),
        paddingHorizontal: scaleSizeWidth(15),
    },
    bottomIcon: {
        width: scaleSize(20),
        height: scaleSize(20),
        tintColor: '#FFFFFF',
    },
    bottomIconWithDot: {
        width: scaleSize(28),
        height: scaleSize(28),
        tintColor: '#FFFFFF',
    },
    captureButton: {
        width: scaleSize(50),
        height: scaleSize(50),
        tintColor: '#1877F2',
    },
    recordButton: {
        width: scaleSizeWidth(75),
        height: scaleSizeHeight(60),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        // color:"white",
        borderRadius: scaleSize(50),
        // borderWidth:10
    },
    recordCircle: {
        width: scaleSizeWidth(50),
        height: scaleSizeHeight(40),
        borderRadius: 35,
        backgroundColor: 'white',
    },
    recording: {
        backgroundColor: 'darkred',
    },
});

export default styles;
