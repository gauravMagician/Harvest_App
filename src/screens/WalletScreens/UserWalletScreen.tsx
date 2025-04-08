import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import images from "../../resources/images";

const UserWalletScreen = () => {
  const navigation = useNavigation();

  const transactions = [
    {
      id: '1',
      titel: 'success',
      time: 'Oct 7 2024 at 6:00 PM',
      HVT: "449.4 HVT",
    },
    {
      id: '2',
      titel: 'Failed',
      time: 'Oct 7 2024 at 6:00 PM',
      HVT: "449.4 HVT",
    },
    {
      id: '3',
      titel: 'success',
      time: 'Oct 7 2024 at 6:00 PM',
      HVT: "449.4 HVT",
    },
    {
      id: '4',
      titel: 'processing',
      time: 'Oct 7 2024 at 6:00 PM',
      HVT: "449.4 HVT",
    },
    {
      id: '5',
      titel: 'Withdrawal',
      time: 'Oct 7 2024 at 6:00 PM',
      HVT: "449.4 HVT",
    },
    {
      id: '6',
      titel: 'Failed',
      time: 'Oct 7 2024 at 6:00 PM',
      HVT: "449.4 HVT",
    },
    {
      id: '7',
      titel: 'success',
      time: 'Oct 7 2024 at 6:00 PM',
      HVT: "449.4 HVT",
    },
    {
      id: '8',
      titel: 'success',
      time: 'Oct 7 2024 at 6:00 PM',
      HVT: "449.4 HVT",
    },
  ]; // Placeholder for transactions



  const getStatusColor = (title: string) => {
    switch (title.toLowerCase()) {
      case "failed":
        return "#AC3B47";
      case "processing":
        return "#F2AA4C";
      default:
        return "#00C48C";
    }
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={images.IC_BACK}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wallet</Text>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Total Balance :</Text>
        <Text style={styles.balanceAmount}>1098.7555 HVT</Text>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("WithdrawalScreen")}>
            <Image
              source={require("../../resources/images/withdraw.png")}
              style={styles.icon}
            />
            <Text style={styles.actionText}>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("MyRewards")}>
            <Image
              source={require("../../resources/images/reward.png")}
              style={styles.icon}
            />
            <Text style={styles.actionText}>My Rewards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("WalletDetails")}>
            <Image
              source={require("../../resources/images/wallet.png")}
              style={styles.icon}
            />
            <Text style={styles.actionText}>Wallet Details</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Transactions */}
      <View style={styles.transactionsView}>
        <Text style={styles.transactionTitle}>Transactions</Text>
        <FlatList
          data={transactions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text style={styles.transactionDate}>{item.time}</Text>
              <Text style={[styles.transactionStatus, { color: "white" }]}>
                {item.titel}
              </Text>
              <Text style={[styles.transactionAmount, { color: getStatusColor(item.titel) }]}>
                {item.HVT}
              </Text>
            </View>
          )}
          ListEmptyComponent={() => (
            <View style={styles.noDataContainer}>
              <Text style={styles.noDataText}>No transactions found</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          style={{ flex: 1 }} // Ensure FlatList takes up space
        />
      </View>

    </View>
  );
};

export default UserWalletScreen;
