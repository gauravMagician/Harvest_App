import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const PaymentDone = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.iconContainer}>
          <Image source={require("../../../resources/images/checkmark.png")}
            style={styles.icon} />
        </View>
        <Text style={styles.title}>Payment Successfully</Text>
        <Text style={styles.subtitle}>Your Payment successfully</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentDone;
