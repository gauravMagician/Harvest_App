import { StyleSheet } from 'react-native';
import { scaleSize, scaleSizeHeight, scaleSizeWidth } from '../../../utils/deviceDimensions';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010924',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: scaleSize(16),
    },
    backIcon: {
        width: scaleSize(20),
        height: scaleSize(20),
        resizeMode: 'contain',
        marginRight: scaleSize(10),
    },
    headerText: {
        color: 'white',
        fontSize: scaleSize(18),
        fontWeight: '600',
    },
    slider: {
        // height: scaleSizeHeight(200),
    },
    mediaItem: {
        marginLeft: scaleSize(8),
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "cover"
    },
    mediaImage: {
        width: scaleSize(300),
        height: scaleSizeHeight(250),
        // borderRadius: scaleSize(8),
        resizeMode: "cover"
    },
    videoIcon: {
        position: 'absolute',
        bottom: scaleSize(10),
        right: scaleSize(10),
        width: scaleSize(24),
        height: scaleSize(24),
    },
    inputContainer: {
        paddingHorizontal: scaleSize(16),
    },
    label: {
        color: '#ccc',
        marginTop: scaleSize(10),
        marginBottom: scaleSize(4),
        fontSize: scaleSize(12),
    },
    input: {
        backgroundColor: '#010B1F',
        color: 'white',
        borderRadius: scaleSize(10),
        borderColor: "#27303F",
        borderWidth: 1,
        padding: scaleSize(12),
        fontSize: scaleSize(14),
    },
    textArea: {
        height: scaleSizeHeight(100),
        textAlignVertical: 'top',
    },

    charCount: {
        position: "relative",
        top: scaleSizeHeight(14),
        // right: 12,
        fontSize: 12,
        alignSelf: 'flex-end',
        color: "#666",
    },
    titleCount: {
        position: "relative",
        top: scaleSizeHeight(5),
        // right: 12,
        fontSize: 12,
        alignSelf: 'flex-end',
        color: "#666",
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: scaleSize(6),
        marginTop: scaleSize(6),
    },
    tag: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#1A2B48',
        paddingVertical: scaleSize(6),
        paddingHorizontal: scaleSize(10),
        borderRadius: scaleSize(8),
        marginLeft: scaleSizeHeight(5)
    },
    tagText: {
        color: '#fff',
        fontSize: scaleSize(10),
    },
    scheduleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#07142D',
        borderRadius: scaleSize(10),
        padding: scaleSize(12),
        marginTop: scaleSize(4),
    },
    scheduleText: {
        color: '#fff',
        fontSize: scaleSize(14),
    },
    visibilityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#07142D',
        borderRadius: scaleSize(10),
        padding: scaleSize(12),
        marginTop: scaleSize(4),
    },
    friendIcon: {
        width: scaleSize(18),
        height: scaleSize(18),
        marginRight: scaleSize(8),
    },
    visibilityText: {
        color: '#fff',
        fontSize: scaleSize(14),
        flex: 1,
    },
    dropdownIcon: {
        width: scaleSize(20),
        height: scaleSize(20),
        tintColor: "white",
        position: "relative",
        right: 10
    },
    uploadBtn: {
        marginTop: scaleSize(20),
        backgroundColor: '#0062FF',
        marginHorizontal: scaleSize(16),
        paddingVertical: scaleSize(14),
        borderRadius: scaleSize(10),
        alignItems: 'center',
        marginBottom: scaleSizeHeight(20)
    },
    uploadText: {
        color: '#fff',
        fontSize: scaleSize(16),
        fontWeight: 'bold',
    },
    fieldContainer: {
        marginBottom: 24,
    },
    visibilitySelector: {
        backgroundColor: "#010B1F",
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 8,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    visibilityContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "flex-end",
    },
    modalContent: {
        backgroundColor: "#0f1123",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 16,
    },
    visibilityModalContent: {
        backgroundColor: "#0f1123",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 16,
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "500",
        color: "#fff",
    },
    mediaTypeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
    },
    visibilityOption: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#222",
    },
    visibilityOptionText: {
        color: "#fff",
        fontSize: 16,
    },
    tagInputContainer: {
        marginTop: 4,
    },
    tagInput: {
        color: "#fff",
        padding: 0,
        height: 32,
    },
    tagsContainer: {
        backgroundColor: "#010B1F",
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 8,
        padding: 12,
    },
    tagsList: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 8,
    },
    tagRemove: {
        color: "#999",
        fontSize: 16,
        marginLeft: 4,
    },
    textareaContainer: {
        position: "relative",
        backgroundColor: "#010B1F",
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 8,
        minHeight: 100,
    },
    textarea: {
        color: "#fff",
        padding: 12,
        paddingRight: 50,
        textAlignVertical: "top",
        minHeight: 100,
    },
    mediaContainer: {
        width: "100%",
        height: 250,
        resizeMode:"cover",
        backgroundColor: "#111",
        position: "relative",
      },
      scrollView: {
        flex: 1,
      },
});
