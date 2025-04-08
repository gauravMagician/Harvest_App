import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import images from '../../../resources/images';

const transactions = [
  {
    id: '1',
    date: 'Oct 7, 2024 At 06:41PM',
    type: 'Purchase',
    title: 'Suits',
    amount: '305.9 CNF',
  },
  {
    id: '2',
    date: 'Oct 7, 2024 At 06:41PM',
    type: 'Rent',
    title: 'The Big Bang Theory',
    amount: '$3.50',
  },
  {
    id: '3',
    date: 'Oct 7, 2024 At 06:41PM',
    type: 'Rent',
    title: 'Godzilla Vs Kong',
    amount: '$4.00',
  },
  {
    id: '4',
    date: 'Oct 7, 2024 At 06:41PM',
    type: 'Purchase',
    title: 'All Of Us Are Dead',
    amount: '549.4 CNF',
  },
  {
    id: '5',
    date: 'Oct 7, 2024 At 06:41PM',
    type: 'Purchase',
    title: 'Pathaan',
    amount: '749.4 CNF',
  },
  {
    id: '6',
    date: 'Oct 7, 2024 At 06:41PM',
    type: 'Rent',
    title: 'The Old Guard',
    amount: '49.4 CNF',
  },
  {
    id: '7',
    date: 'Oct 7, 2024 At 06:41PM',
    type: 'Rent',
    title: 'Prison Break',
    amount: '94.6 CNF',
  },
];

const HistoryScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={images.IC_BACK}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>History</Text>
      </View>

      <View style={styles.innerView}>
        {/* Transaction Section */}
        <Text style={styles.sectionTitle}>Transaction</Text>
        {/* Transaction List */}
        <FlatList
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text style={styles.dateText}>{item.date}</Text>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>
                  {item.type} - {item.title}
                </Text>
                <Text style={styles.amount}>{item.amount}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HistoryScreen;
