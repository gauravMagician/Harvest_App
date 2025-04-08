import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  Image,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import images from '../../../resources/images';


const HelpScreen = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Image
            source={images.IC_BACK}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Help</Text>
        <TouchableOpacity style={styles.rewardHistoryButton}>
          <Text style={styles.rewardHistoryText}>Open Ticket </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.innerView}>
        <Text style={styles.description}>
          We’re here to help! If you have any questions, feedback, or need
          assistance with your Cineflix account, please don’t hesitate to reach
          out to us. Our support team is ready to assist you.
        </Text>

        <Text style={styles.sectionHeader}>Customer Support</Text>
        <Text style={styles.text}>
          For help with account issues, billing, technical support, or content
          recommendations, our support team is ready to assist you.
        </Text>
        <Text style={styles.boldText}>
          Email:{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('mailto:support@harvesthub.com')}>
            support@harvesthub.com
          </Text>
        </Text>
        <Text style={styles.boldText}>
          Phone:{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('tel:+15551234567')}>
            +1 (555) 123-4567
          </Text>
        </Text>

        <Text style={styles.sectionHeader}>Business Inquiries</Text>
        <Text style={styles.text}>
          For partnership opportunities, press inquiries, or other
          business-related questions, please reach out to our team directly.
        </Text>
        <Text style={styles.boldText}>
          Email:{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('mailto:business@harvesthub.com')}>
            business@harvesthub.com
          </Text>
        </Text>

        <Text style={styles.sectionHeader}>Follow Us</Text>
        <Text style={styles.text}>
          Stay updated with the latest releases, news, and announcements by
          following us on social media:
        </Text>
        <Text style={styles.boldText}>
          Facebook: <Text style={styles.link}>@harvesthub</Text>
        </Text>
        <Text style={styles.boldText}>
          Instagram: <Text style={styles.link}>@Harvesthub</Text>
        </Text>
        <Text style={styles.boldText}>
          Twitter: <Text style={styles.link}>@Harvesthub</Text>
        </Text>
        <Text style={styles.boldText}>
          YouTube: <Text style={styles.link}>@harvesthub</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default HelpScreen;
