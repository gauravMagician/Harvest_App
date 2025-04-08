// PaymentComponent.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import images from '../../../resources/images';

const paymentIcons = [
  require('../../../resources/images/visa.png'),
  require('../../../resources/images/masterCard.png'),
  require('../../../resources/images/visa.png'),
  require('../../../resources/images/masterCard.png'),
  require('../../../resources/images/visa.png'),
  require('../../../resources/images/masterCard.png'),
  require('../../../resources/images/visa.png'),
  require('../../../resources/images/masterCard.png'),
  require('../../../resources/images/visa.png'),
  require('../../../resources/images/masterCard.png'),
];

const BuyMembershipPayment = () => {
  const [selectedOption, setSelectedOption] = useState('card');
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
        <Image
          source={images.IC_BACK

          }
          style={styles.backIcon}
        />
        <Text style={styles.headerText}>Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => setSelectedOption('card')}>
        <View style={styles.radioView}>
          <View
            style={selectedOption === 'card' ? styles.radioSelected : styles.radioUnselected
            }
          />
          <Text style={styles.optionText}>Pay with other payment modes</Text>
        </View>
        <View style={styles.iconRow}>
          {paymentIcons.map((icon, index) => (
            <Image key={index} source={icon} style={styles.iconImage} />
          ))}
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => setSelectedOption('wallet')}>
        <View style={styles.radio}>
          <View
            style={
              selectedOption === 'wallet'
                ? styles.radioSelected
                : styles.radioUnselected
            }
          />
          <Text style={styles.optionText}>Pay with Wallet</Text>
        </View>

        <Text style={styles.walletText}>1098.765 HVT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.proceedButton} onPress={() => navigation.navigate("PaymentDone")}>
        <Text style={styles.proceedButtonText}>Payment proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyMembershipPayment;
