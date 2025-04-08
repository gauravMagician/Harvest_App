import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import images from '../../../resources/images';

const notifications = [
  'System Notification',
  'Mute',
  'Short Notification',
  'Post Notification',
  'Live Notification',
  'Withdrawal Notification',
  'Chat Request Notification',
  'Admin Notification',
  'Follow/unfollow Notification',
];

const SettingNotification = () => {
  const { goBack } = useNavigation();
  const [toggleStates, setToggleStates] = useState(Array(notifications.length).fill(true));

  const togglePublic = (index: number) => {
    const updatedToggles = [...toggleStates];
    updatedToggles[index] = !updatedToggles[index];
    setToggleStates(updatedToggles);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => goBack()}>
            <Image source={images.IC_BACK} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Notification</Text>
        </View>

        {notifications.map((item, index) => (
          <View key={index} style={styles.notificationRow}>
            <Text style={styles.notificationText}>{item}</Text>
            <TouchableOpacity
              style={[styles.toggleContainer, { backgroundColor: toggleStates[index] ? '#D9D9D980' : '#0360D2' }]}
              onPress={() => togglePublic(index)}>
              <View
                style={[styles.toggleButton, toggleStates[index] ? { marginLeft: 18, backgroundColor: 'white' } : { marginLeft: 0, backgroundColor: 'white' }]}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SettingNotification;
