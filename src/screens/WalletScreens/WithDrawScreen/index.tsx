// import React from "react";
// import { View, Text, TouchableOpacity, Image } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { styles } from "./styles";
// import images from "../../../resources/images";
// import TextInputField from "../../../component/TextInputField";
// import { scaleSizeHeight, scaleSizeWidth } from "../../../utils/deviceDimensions";


// const WithdrawalScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image source={images.IC_BACK} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Withdrawal</Text>
//       </View>

//       <View style={styles.inneview}>
//         {/* Subtitle */}
//         <Text style={styles.subtitle}>Withdraw HVT to your wallet.</Text>

//         {/* Balance Section */}
//         <Text style={styles.balanceText}>1098.765 HVT</Text>

//         {/* Input Fields */}
//         <TextInputField
//           placeholder="Wallet Address"
//           rightComponent={
//             <Text style={styles.linkText}>UQAIO...YhiYZ</Text>
//           }
//           inputWrapperStyles={styles.inputWrapperStyles}
//           style={{
//             backgroundColor: '#01081A',
//             color: 'white',
//             borderColor: '#242424',
//             borderRadius: 17,
//             borderWidth:0.5,
//             marginTop:scaleSizeHeight(25)
//           }}
//         />

//         <TextInputField
//           placeholder="Amount"
//           rightComponent={
//             <View style={styles.minMaxContainer}>
//               <Text style={styles.minMaxText}>Min</Text>
//               <Text style={styles.minMaxText}>Max</Text>
//             </View>
//           }
//           inputWrapperStyles={styles.inputWrapperStyles}
//           style={{
//             backgroundColor: '#01081A',
//             color: 'white',
//             borderColor: '#242424',
//             borderRadius: 17,
//             borderWidth:0.5,
//             marginTop:scaleSizeHeight(25)

//           }}
//         />
//       </View>


//       {/* Withdraw Button */}
//       <TouchableOpacity style={styles.withdrawButton} onPress={()=>navigation.navigate("WithdrawSuccess")}>
//         <Text style={styles.withdrawButtonText}>Withdraw</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default WithdrawalScreen;


import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { styles } from "./styles";
import images from "../../../resources/images";
import TextInputField from "../../../component/TextInputField";
import { scaleSizeHeight } from "../../../utils/deviceDimensions";
import { AppDispatch } from "../../../store";
import { postWithdraw } from "../../../store/slices/withdrawSlice";

const WithdrawalScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");

  console.log(amount);


  // const handleWithdraw = async () => {
  //   if (!amount) {
  //     Alert.alert("Please enter the amount.");
  //     return;
  //   }
  //   try {
  //     // const resultAction = await withdraw({ amount: amount });
  //     console.log(">>>>>>>>>>>>>>>>.", resultAction);

  //     // if (postWithdraw.fulfilled.match(resultAction)) {
  //     //   navigation.navigate("WithdrawSuccess");
  //     // } 
  //   } catch (err) {
  //     console.log("Withdraw error:", err); 
  //     Alert.alert("Error", "Something went wrong!");
  //   }
  // };

  const handleWithdraw = async () => {
    if (!amount) {
      Alert.alert("Please enter the amount.");
      return;
    }
    try {
      const result = await dispatch(postWithdraw({ amount: String(amount) })).unwrap();
      console.log("Withdraw successful:", result);
      navigation.navigate("WithdrawSuccess");
    } catch (error: any) {
      console.log("Withdraw error:", error);
      Alert.alert("Error", error || "Something went wrong!");
    }
  };


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
        <Text style={styles.subtitle}>Withdraw HVT to your wallet.</Text>
        <Text style={styles.balanceText}>1098.765 HVT</Text>

        <TextInputField
          placeholder="Wallet Address"
          value={walletAddress}
          onChangeText={setWalletAddress}
          rightComponent={
            <Text style={styles.linkText}>UQAIO...YhiYZ</Text>
          }
          inputWrapperStyles={styles.inputWrapperStyles}
          style={{
            backgroundColor: "#01081A",
            color: "white",
            borderColor: "#242424",
            borderRadius: 17,
            borderWidth: 0.5,
            marginTop: scaleSizeHeight(25),
          }}
        />

        <TextInputField
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
          rightComponent={
            <View style={styles.minMaxContainer}>
              <Text style={styles.minMaxText}>Min</Text>
              <Text style={styles.minMaxText}>Max</Text>
            </View>
          }
          inputWrapperStyles={styles.inputWrapperStyles}
          style={{
            backgroundColor: "#01081A",
            color: "white",
            borderColor: "#242424",
            borderRadius: 17,
            borderWidth: 0.5,
            marginTop: scaleSizeHeight(25),
          }}
        />
      </View>

      <TouchableOpacity style={styles.withdrawButton} onPress={handleWithdraw}>
        <Text style={styles.withdrawButtonText}>Withdraw</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WithdrawalScreen;
