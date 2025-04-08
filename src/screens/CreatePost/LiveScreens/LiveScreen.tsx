import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import images from '../../../resources/images';
// import LinearGradient from 'react-native-linear-gradient';
const comments = [
    { id: '1', user: 'maxjacobson', text: 'joined' },
    { id: '2', user: 'maxjacobson', text: 'Hi there' },
    { id: '3', user: 'maxjacobson', text: '👋' },
];

const LiveScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            {/* Background */}
            <Image source={images.IC_LIVE_IMAGE} style={styles.backgroundImage} />
            {/* <LinearGradient
                colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.2)', 'transparent']}
                style={styles.gradientOverlay}
            /> */}
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={images.IC_BACK} style={styles.icon} />
                </TouchableOpacity>
                <View style={styles.liveBadgeContainer}>
                    <Text style={styles.liveText}>LIVE</Text>
                    <View style={styles.viewCountContainer}>
                        <Image source={images.IC_EYE} style={styles.eyeIcon} />
                        <Text style={styles.viewerCount}>52</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={styles.endText}>End</Text>
                </TouchableOpacity>
            </View>

            {/* Comments */}
            <View style={styles.commentList}>
                <FlatList
                    data={comments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Text style={styles.commentText}>
                            <Text style={styles.username}>{item.user} </Text>
                            {item.text}
                        </Text>
                    )}
                />
            </View>

            {/* Bottom Bar */}
            <View style={styles.bottomBar}>
                <TextInput
                    placeholder="Comment"
                    placeholderTextColor="#ccc"
                    style={styles.commentInput}
                />
                <View style={styles.actionIcons}>
                    <TouchableOpacity><Image source={images.IC_SEND} style={styles.iconSmall} /></TouchableOpacity>
                    <TouchableOpacity><Image source={images.IC_LIKE} style={styles.iconSmall} /></TouchableOpacity>
                    <TouchableOpacity><Image source={images.IC_LIKE} style={styles.iconSmall} /></TouchableOpacity>
                    <TouchableOpacity><Image source={images.IC_GALLERY} style={styles.iconSmall} /></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LiveScreen;
