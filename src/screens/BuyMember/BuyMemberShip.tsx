import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { StringConstants } from '../../constants/StringConstants';
import { useNavigation } from '@react-navigation/native';
import images from '../../resources/images';
import TextInputField from '../../component/TextInputField';
import Button from '../../component/Button';

const BuyMembershipScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={images.IC_BACK}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Buy Membership</Text>
        </View>
        <Text style={styles.premiumText}>Get Premium</Text>
        <Text style={styles.description}>
          Unlock all the power of this tool and enjoy digital experience like
          never before!
        </Text>

        <Image
          source={require('../../resources/images/gift.png')}
          style={styles.image}
        />
        {/* Card Section */}
        <View style={styles.cardContainer}>
          <View style={styles.innerText}>
            <Text style={styles.freeText}>Free</Text>
            <Text style={styles.price}>$ 00.0</Text>
            <Text style={styles.info}>No bluetick</Text>
            <Text style={styles.info}>Not verified</Text>
            <Text style={styles.freePack}>Free pack</Text>
          </View>
          <View style={styles.imgView}>
            <Image
              source={require('../../resources/images/free.png')}
              style={styles.cardIcon}
            />
            <TouchableOpacity style={styles.activeButton}>
              <Text style={styles.activeText}>Active</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card Section without backgroundcolor */}
        <TouchableOpacity style={styles.cardSecondContainer}>
          <View style={styles.innerText}>
            <Text style={styles.startText}>Starter</Text>
            <Text style={styles.price}>$ 20.0</Text>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.bluetick}> bluetick</Text>
              <Text style={styles.bluetick}> bluetick</Text>
              <Text style={styles.bluetick}> bluetick</Text>
              <Text style={styles.bluetick}> bluetick</Text>
              <Text style={styles.bluetick}> bluetick</Text>
            </View>

            <Text style={styles.startPack}>Starter pack</Text>
          </View>
          <View style={styles.imgView}>
            <Image
              source={require('../../resources/images/Starterimg.png')}
              style={styles.NocardIcon}
            />
            <TouchableOpacity style={styles.noactiveButton}>
              <Text style={styles.noactiveText}>No Active</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Card Section without backgroundcolor */}
        <TouchableOpacity
          style={styles.cardthirdContainer}
          onPress={() => navigation.navigate('BuyMembershipPayment')}>
          <View style={styles.innerText}>
            <Text style={styles.startText}>Starter</Text>
            <Text style={styles.price}>$ 20.0</Text>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.bluetick}> bluetick</Text>
              <Text style={styles.bluetick}> bluetick</Text>
            </View>

            <Text style={styles.startPack}>Starter pack</Text>
          </View>
          <View style={styles.imgView}>
            <Image
              source={require('../../resources/images/king.png')}
              style={styles.NocardIcon}
            />
            <TouchableOpacity style={styles.noactiveButton}>
              <Text style={styles.noactiveText}>No Active</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Card Section without backgroundcolor */}
        <TouchableOpacity
          style={styles.cardthirdContainer}
          onPress={() => navigation.navigate('BuyMembershipPayment')}>
          <View style={styles.innerText}>
            <Text style={styles.startText}>Starter</Text>
            <Text style={styles.price}>$ 200.0</Text>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.bluetick}> bluetick</Text>
              <Text style={styles.bluetick}> bluetick</Text>
            </View>

            <Text style={styles.startPack}>Starter pack</Text>
          </View>
          <View style={styles.imgView}>
            <Image
              source={require('../../resources/images/premium.png')}
              style={styles.NocardIcon}
            />
            <TouchableOpacity style={styles.noactiveButton}>
              <Text style={styles.noactiveText}>No Active</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Card Section without backgroundcolor */}
        <TouchableOpacity
          style={styles.cardthirdContainer}
          onPress={() => navigation.navigate('BuyMembershipPayment')}>
          <View style={styles.innerText}>
            <Text style={styles.startText}>Starter</Text>
            <Text style={styles.price}>$ 20.0</Text>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.bluetick}> bluetick</Text>
              <Text style={styles.bluetick}> bluetick</Text>
            </View>

            <Text style={styles.startPack}>Starter pack</Text>
          </View>
          <View style={styles.imgView}>
            <Image
              source={require('../../resources/images/meddle.png')}
              style={styles.NocardIcon}
            />
            <TouchableOpacity style={styles.noactiveButton}>
              <Text style={styles.noactiveText}>No Active</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <Text style={styles.label}>Coupon Code</Text>
        <TextInputField
          value="qcgadHt12359"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          containerStyle={{ marginBottom: 0 }}
          inputWrapperStyles={{ width: '100%' }}
          style={{
            backgroundColor: '#0D1B2A',
            color: 'white',
            borderColor: '#27303F',
            borderRadius: 17,
            marginTop: 10,
            marginBottom: 10,
          }}
        />
        <Button
          title={StringConstants.GET_PRO}
          // onPress={handleGetStarted}
          style={styles.button}
        />
        {/* Terms & Conditions Section */}
        <Text style={styles.termsText}>
          By placing this order, you agree to the <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>. Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period.
        </Text>
      </View>
    </ScrollView>
  );
};

export default BuyMembershipScreen;
