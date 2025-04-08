import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import images from '../../../resources/images';

const PrivacyPolicy = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={images.IC_BACK}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>Privacy Policy</Text>
      </View>
      <View style={styles.innerView}>
        <Text style={styles.description}>
          At Cineflix, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy outlines how we
          collect, use, and protect the data you provide when using our app or
          website.
        </Text>

        <Text style={styles.sectionHeader}>Information We Collect</Text>
        <Text style={styles.text}>
          We may collect the following types of information:
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.boldText}>Personal Information:</Text> When you
          sign up for an account, we collect details such as your name, email
          address, and payment information.
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.boldText}>Usage Data:</Text> We gather
          information on how you interact with Cineflix, including device
          details, browsing history, and viewing preferences.
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.boldText}>Cookies:</Text> We use cookies to
          enhance your experience, track usage patterns, and improve our
          service. You can manage cookie preferences through your browser
          settings.
        </Text>

        <Text style={styles.sectionHeader}>How We Use Your Information</Text>
        <Text style={styles.listItem}>
          • To provide and personalize our streaming service.
        </Text>
        <Text style={styles.listItem}>
          • To process payments and manage your subscription.
        </Text>
        <Text style={styles.listItem}>
          • To improve app performance and fix issues.
        </Text>
        <Text style={styles.listItem}>
          • To send updates, notifications, and promotional content (you can opt
          out at any time).
        </Text>

        <Text style={styles.sectionHeader}>Data Protection</Text>
        <Text style={styles.text}>
          We implement industry-standard security measures to safeguard your
          personal data, including encryption and secure storage. However,
          please note that no method of data transmission is 100% secure.
        </Text>

        <Text style={styles.sectionHeader}>Sharing Your Information</Text>
        <Text style={styles.text}>
          We do not sell, rent, or lease your personal data to third parties. We
          may share information with trusted service providers who help us
          deliver our services, but only under strict confidentiality
          agreements.
        </Text>

        <Text style={styles.sectionHeader}>Changes to This Privacy Policy</Text>
        <Text style={styles.text}>
          We may update this policy from time to time. Any changes will be
          posted on this page, and the date of the most recent update will be
          indicated at the bottom of the page.
        </Text>
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicy;
