// EarningsCard.tsx
import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

const EarningsCard = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Total Earning</Text>
      <View style={styles.cardContainer}>
        <View style={styles.earningRow}>
          <Text style={styles.earningText}>Like</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, {width: '40%'}]} />
          </View>
          <Text style={styles.hvtText}>5.5HVT</Text>
        </View>
        <View style={styles.earningRow}>
          <Text style={styles.earningText}>Share</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, {width: '60%'}]} />
          </View>
          <Text style={styles.hvtText}>60HVT</Text>
        </View>
        <View style={styles.earningRow}>
          <Text style={styles.earningText}>Comment</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, {width: '50%'}]} />
          </View>
          <Text style={styles.hvtText}>17k HVT</Text>
        </View>
        <View style={styles.earningRow}>
          <Text style={styles.earningText}>Post</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, {width: '50%'}]} />
          </View>
          <Text style={styles.hvtText}>17k HVT</Text>
        </View>
        <View style={styles.earningRow}>
          <Text style={styles.earningText}>App Share</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, {width: '50%'}]} />
          </View>
          <Text style={styles.hvtText}>17k HVT</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalValue}>186400.00 HVT</Text>
        </View>
      </View>
    </>
  );
};

export default EarningsCard;
