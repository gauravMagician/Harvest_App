import { StyleSheet } from 'react-native';
import { scaleFontSize, scaleSizeHeight, scaleSizeWidth } from '../../../../utils/deviceDimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#051121',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    backIcon: {
        width: scaleSizeWidth(18),
        height: scaleSizeHeight(12),
        marginRight: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white',
        marginLeft: scaleSizeWidth(20)
    },
    optionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scaleFontSize(15)
    },
    optionText: {
        fontSize: 16,
        color: 'white',
    },
    toggleContainer: {
        width: scaleSizeWidth(40),
        height: scaleSizeHeight(13),
        borderRadius: 15,
        backgroundColor: "#333",
        // padding: 2,
    },
    toggleButton: {
        width: scaleSizeWidth(21),
        height: scaleSizeHeight(13),
        borderRadius: 15,
        backgroundColor: "white",
    },
    // toggleContainer: {
    //     width: 40,
    //     height: 20,
    //     borderRadius: 10,
    //     padding: 2,
    //     justifyContent: 'center',
    // },
    // toggleButton: {
    //     width: 18,
    //     height: 18,
    //     borderRadius: 9,
    //     backgroundColor: 'white',
    // },
    // checkboxContainer: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginVertical: 20,
    // },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkedBox: {
        backgroundColor: 'white',
    },
    checkboxGroup: {
        marginVertical: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scaleSizeHeight(30),
    },
    checkboxImage: {
        width: scaleSizeWidth(22),
        height: scaleSizeHeight(22),
        marginRight: scaleSizeWidth(12),
        tintColor: '#FFFFFF',
        position: "relative",
        bottom: scaleSizeHeight(4)
    },
    checkboxText: {
        flex: 1,
        fontSize: scaleFontSize(20),
        fontWeight: "400",
        color: 'white',
        marginTop: scaleSizeHeight(15)
    },
    applyButton: {
        backgroundColor: '#0360D2',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    applyButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default styles;
