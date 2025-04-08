// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import images from "../../../resources/images";
// import ImageButton from "../../../component/ImageButton";
// import { useNavigation } from "@react-navigation/native";
// import styles from "./styles";

// const WithDrawScreen = () => {
//   const navigation = useNavigation()
//   const [amount, setAmount] = useState("");
//   const [isLoading, setIsLoading] = useState(false);


//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.content}>
//         {/* Header */}
//         <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
//           <ImageButton onPress={() => navigation.goBack()} image={images.IC_BACK} />
//           <Text style={styles.title}>Withdrawal</Text>
//         </View>
//         <Text style={styles.subtitle}>Withdraw HVT to your wallet</Text>

//         {/* Balance */}
//         <Text style={styles.balance}>
//           {/* {earnings?.activityEarnings?.totalEarnedPoints} Points */}
//           1098.750 HVT
//         </Text>

//         {/* Wallet Address Input */}
//         {/* <View style={styles.inputContainer}>
//           <Text style={styles.label}>Wallet Address</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter wallet address"
//             placeholderTextColor="#666"
//             value={walletAddress}
//             onChangeText={setWalletAddress}
//           />
//         </View> */}

//         {/* Amount */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Amount</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter amount"
//             keyboardType="numeric"
//             placeholderTextColor="#666"
//             value={amount}
//             onChangeText={setAmount}
//           />
//         </View>

//         {/* Withdraw Button */}
//         <View>
//           <TouchableOpacity
//             style={[styles.button, isLoading && styles.buttonDisabled]}
//             // onPress={handleWithdraw}
//             disabled={isLoading}
//           >
//             <Text style={styles.buttonText}>
//               {isLoading ? "Processing..." : "Withdraw"}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };



// export default WithDrawScreen;


import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import images from "../../../resources/images";
import TextInputField from "../../../component/TextInputField";
import { scaleSizeHeight, scaleSizeWidth } from "../../../utils/deviceDimensions";


const WithdrawalScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.IC_BACK} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Withdrawal</Text>
      </View>

      <View style={styles.inneview}>
        {/* Subtitle */}
        <Text style={styles.subtitle}>Withdraw HVT to your wallet.</Text>

        {/* Balance Section */}
        <Text style={styles.balanceText}>1098.765 HVT</Text>

        {/* Input Fields */}
        <TextInputField
          placeholder="Wallet Address"
          rightComponent={
            <Text style={styles.linkText}>UQAIO...YhiYZ</Text>
          }
          inputWrapperStyles={styles.inputWrapperStyles}
          style={{
            backgroundColor: '#01081A',
            color: 'white',
            borderColor: '#242424',
            borderRadius: 17,
            borderWidth:0.5,
            marginTop:scaleSizeHeight(25)
          }}
        />

        <TextInputField
          placeholder="Amount"
          rightComponent={
            <View style={styles.minMaxContainer}>
              <Text style={styles.minMaxText}>Min</Text>
              <Text style={styles.minMaxText}>Max</Text>
            </View>
          }
          inputWrapperStyles={styles.inputWrapperStyles}
          style={{
            backgroundColor: '#01081A',
            color: 'white',
            borderColor: '#242424',
            borderRadius: 17,
            borderWidth:0.5,
            marginTop:scaleSizeHeight(25)
            
          }}
        />
      </View>


      {/* Withdraw Button */}
      <TouchableOpacity style={styles.withdrawButton} onPress={()=>navigation.navigate("WithdrawSuccess")}>
        <Text style={styles.withdrawButtonText}>Withdraw</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WithdrawalScreen;
