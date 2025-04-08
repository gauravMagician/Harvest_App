import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import images from '../../../resources/images';
import { useNavigation } from '@react-navigation/native';

const rewardData = [
    { id: '1', date: 'Oct 8, 2024 At 06:11AM', title: 'Post Title – Like', value: '53.4 HVT' },
    { id: '2', date: 'Oct 8, 2024 At 04:31AM', title: 'Post Title – Comment', value: '26.8 HVT' },
    { id: '3', date: 'Oct 7, 2024 At 11:59PM', title: 'Post Title – Share', value: '9.3 HVT' },
    { id: '4', date: 'Oct 6, 2024 At 09:32AM', title: 'App Share – Share', value: '490.4 HVT' },
    { id: '5', date: 'Oct 6, 2024 At 06:15AM', title: 'Username – Post Title', value: '54.2 HVT' },
    { id: '6', date: 'Oct 6, 2024 At 04:53AM', title: 'Username – Post Title', value: '54.2 HVT' },
    { id: '7', date: 'Oct 6, 2024 At 02:13AM', title: 'Username – Post Title', value: '54.2 HVT' },
    { id: '8', date: 'Oct 8, 2024 At 06:11AM', title: 'Post Title – Like', value: '53.4 HVT' },
    { id: '9', date: 'Oct 8, 2024 At 04:31AM', title: 'Post Title – Comment', value: '26.8 HVT' },
    { id: '10', date: 'Oct 7, 2024 At 11:59PM', title: 'Post Title – Share', value: '9.3 HVT' },
    { id: '11', date: 'Oct 6, 2024 At 09:32AM', title: 'App Share – Share', value: '490.4 HVT' },
    { id: '12', date: 'Oct 6, 2024 At 06:15AM', title: 'Username – Post Title', value: '54.2 HVT' },
    { id: '13', date: 'Oct 6, 2024 At 04:53AM', title: 'Username – Post Title', value: '54.2 HVT' },
    { id: '14', date: 'Oct 6, 2024 At 02:13AM', title: 'Username – Post Title', value: '54.2 HVT' },
];

const MyRewards = () => {
    const navigation = useNavigation()
    const renderItem = ({ item }: any) => (
        <View style={styles.rewardItem}>
            <View>
                <Text style={styles.rewardDate}>{item.date}</Text>
                <Text style={styles.rewardTitle}>{item.title}</Text>
            </View>
            <Text style={styles.rewardValue}>{item.value}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={images.IC_BACK} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>My Rewards</Text>
            </View>
            <View style={styles.balanceSection}>
                <Text style={styles.balanceValue}>1098.7652 HVT</Text>
                <Text style={styles.balanceLabel}>Current Balance</Text>
            </View>

            <View style={styles.separator} />

            <Text style={styles.historyLabel}>Rewards History</Text>

            <FlatList
                data={rewardData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default MyRewards;
