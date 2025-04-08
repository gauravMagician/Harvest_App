import { StyleSheet } from 'react-native';
import { scaleFontSize, scaleSizeHeight, scaleSizeWidth } from '../../../utils/deviceDimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050C1C',
        paddingHorizontal: scaleSizeWidth(20),
        paddingTop: scaleSizeHeight(35),
    },
    header: {
        flexDirection: 'row',
        marginBottom: scaleSizeHeight(20)
    },
    backIcon: {
        width: scaleSizeWidth(20),
        height: scaleSizeHeight(20),
        resizeMode: 'contain',
    },
    title: {
        color: '#FFFFFF',
        fontSize: scaleFontSize(28),
        fontWeight: '700',
        position: "relative",
        left: scaleSizeWidth(80)
    },
    balanceSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    balanceValue: {
        color: '#FFFFFF',
        fontSize: scaleFontSize(36),
        fontWeight: '700',
    },
    balanceLabel: {
        color: '#FFFFFF',
        fontSize: scaleFontSize(14),
    },
    separator: {
        borderBottomColor: '#0360D2',
        borderBottomWidth: 1,
        marginVertical: scaleSizeHeight(10),
    },
    historyLabel: {
        color: '#FFFFFF',
        fontSize: scaleFontSize(24),
        fontWeight: "700",
        marginTop: scaleSizeHeight(13),
        marginBottom: scaleSizeHeight(10),
    },
    listContainer: {
        paddingBottom: 30,
    },
    rewardItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#1F2937',
        borderBottomWidth: 1,
        paddingVertical: scaleSizeHeight(12),
    },
    rewardDate: {
        color: '#8596A2',
        fontSize: scaleFontSize(14),
        fontWeight: "400"
    },
    rewardTitle: {
        color: '#FFFFFF',
        fontSize: scaleFontSize(16),
        fontWeight: "400",
    },
    rewardValue: {
        color: '#FFFFFF',
        fontSize: scaleFontSize(20),
        fontWeight: '700',
    },
});

export default styles;
