import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import images from '../../resources/images';

const DATA = [
    { id: '1', username: 'noor.designer3', image: require('../../resources/images/women.png'), status: 'Follow' },
    { id: '2', username: 'hatithuide', image: require('../../resources/images/preferenceImg.png'), status: 'Follow' },
    { id: '3', username: 'zamaeva_1302', image: require('../../resources/images/women.png'), status: 'Follow' },
    { id: '4', username: 'averil.yeven', image: require('../../resources/images/preferenceImg.png'), status: 'Following' },
    { id: '5', username: 'zigstarco', image: require('../../resources/images/women.png'), status: 'Follow' },
    { id: '6', username: 'itsmai.777', image: require('../../resources/images/preferenceImg.png'), status: 'Follow' },
    { id: '7', username: 'jessbloom_studio', image: require('../../resources/images/women.png'), status: 'Follow' },
    { id: '8', username: 'dcarter.ux', image: require('../../resources/images/women.png'), status: 'Follow' },
    { id: '9', username: 'djboybruno', image: require('../../resources/images/preferenceImg.png'), status: 'Follow' },
];

const FollowersFollowingScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const initialTab = route.params?.initialTab ?? 'Followers'; // receive from route
    const [selectedTab, setSelectedTab] = useState<'Followers' | 'Following'>(initialTab); // set based on route param

    const renderItem = ({ item }: any) => (
        <TouchableOpacity 
        onPress={()=>navigation.navigate("PublicProfileScreen")}
        style={styles.itemContainer}>
            <View style={styles.userInfo}>
                <Image source={item.image} style={styles.avatar} />
                <Text style={styles.username}>{item.username}</Text>
            </View>
            <TouchableOpacity
                style={[
                    styles.button,
                    selectedTab === 'Followers' && item.status === 'Following' && styles.followingButton,
                ]}
            >
                <Text
                    style={[
                        styles.buttonText,
                        selectedTab === 'Followers' && item.status === 'Following' && styles.followingText,
                    ]}
                >
                    {selectedTab === 'Following' ? 'Unfollow' : item.status}
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.backButton}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={images.IC_BACK} style={styles.backIcon} />
                    </TouchableOpacity>
                    <View style={styles.headerTabContainer}>
                        <TouchableOpacity onPress={() => setSelectedTab('Followers')}>
                            <Text style={[styles.headerTabText, selectedTab === 'Followers' && styles.activeTab]}>
                                Followers
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelectedTab('Following')}>
                            <Text style={[styles.headerTabText, selectedTab === 'Following' && styles.activeTab]}>
                                Following
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.searchButton}>
                    <Image source={images.IC_SEARCH_ICONS} style={styles.searchIcon} />
                </TouchableOpacity>
            </View>

            {/* List */}
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default FollowersFollowingScreen;
