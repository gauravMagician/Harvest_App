import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import EarningsCard from './EarningsStatsComponent/EarningsCard';
import ActivityStatus from './EarningsStatsComponent/ActivityStatus';

const MainEarningPage = () => {
  return (
    <ScrollView style={styles.container}>
      <EarningsCard />
      <ActivityStatus />
      {/* Check Reward History Button */}
      <TouchableOpacity style={styles.rewardHistoryButton}>
        <Text style={styles.rewardHistoryText}>Check Reward History</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MainEarningPage;