import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import images from '../../../../resources/images';
import { useNavigation } from '@react-navigation/native';

const PrivacySetting = () => {
  const navigation = useNavigation()
  const [toggleStates, setToggleStates] = useState([true, false, true]);
  const [isChecked, setIsChecked] = useState(true);

  const togglePublic = (index: number) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
  };




  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.IC_BACK} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Privacy</Text>
      </View>

      <ScrollView>
        {/* Toggle Options */}
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Comment Off</Text>
          <TouchableOpacity
            style={[styles.toggleContainer, { backgroundColor: toggleStates[0] ? '#0360D2' : '#D9D9D980' }]}
            onPress={() => togglePublic(0)}>
            <View style={[styles.toggleButton, toggleStates[0] ? { marginLeft: 18 } : { marginLeft: 0 }]} />
          </TouchableOpacity>
        </View>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Reaction</Text>
          <TouchableOpacity
            style={[styles.toggleContainer, { backgroundColor: toggleStates[1] ? '#0360D2' : '#D9D9D980' }]}
            onPress={() => togglePublic(1)}>
            <View style={[styles.toggleButton, toggleStates[1] ? { marginLeft: 18 } : { marginLeft: 0 }]} />
          </TouchableOpacity>
        </View>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Share</Text>
          <TouchableOpacity
            style={[styles.toggleContainer, { backgroundColor: toggleStates[2] ? '#0360D2' : '#D9D9D980' }]}
            onPress={() => togglePublic(2)}>
            <View style={[styles.toggleButton, toggleStates[2] ? { marginLeft: 18 } : { marginLeft: 0 }]} />
          </TouchableOpacity>
        </View>

        {/* Checkbox with Text */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
            <Image
              source={
                isChecked
                  ? require('../../../../resources/images/check-box.png')
                  : require('../../../../resources/images/unchecked.png')
              }
              style={styles.checkboxImage}
            />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            If you want to apply same setting on Shorts, and Live videos check this and apply.
          </Text>
        </View>


        {/* Apply Button */}
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PrivacySetting;
