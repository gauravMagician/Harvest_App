// ActivityStats.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles';
const activities = [
  {
    icon: require('../../../../resources/images/PlanHeart.png'),
    label: 'Like',
    likes: '10k likes',
    hvt: '120 HVT',
  },
  {
    icon: require('../../../../resources/images/send.png'),
    label: 'Share',
    likes: '10k likes',
    hvt: '120 HVT',
  },
  {
    icon: require('../../../../resources/images/comment.png'),
    label: 'Comment',
    likes: '10k likes',
    hvt: '120 HVT',
  },
];

const Post = [
  {
    icon: require('../../../../resources/images/PlanHeart.png'),
    label: 'Like',
    likes: '10k likes',
    hvt: '120 HVT',
  },
  {
    icon: require('../../../../resources/images/send.png'),
    label: 'Share',
    likes: '10k likes',
    hvt: '120 HVT',
  },
  {
    icon: require('../../../../resources/images/comment.png'),
    label: 'Comment',
    likes: '10k likes',
    hvt: '120 HVT',
  },
];

const ActivityStatus = () => {
  return (
    <>
      <View>
        <Text style={styles.ActivityTitle}>Activity By Me</Text>
        <View>
          {activities.map((activity, index) => (
            <View key={index} style={styles.activityRow}>
              <Image source={activity.icon} style={[styles.activityIcon, { width: 20, height: 20, resizeMode: 'contain' }]} />
              <Text style={styles.activityText}>{activity.label}</Text>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{activity.likes}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{activity.hvt}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View>
        <Text style={styles.ActivityTitle}>My Post Status</Text>
        <View>
          {activities.map((activity, index) => (
            <View key={index} style={styles.activityRow}>
              <Image source={activity.icon} style={[styles.activityIcon, { width: 20, height: 20, resizeMode: 'contain' }]} />
              <Text style={styles.activityText}>{activity.label}</Text>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{activity.likes}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{activity.hvt}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default ActivityStatus;
