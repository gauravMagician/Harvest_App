import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import images from '../../../../resources/images';

const options = ['All', 'Shorts', 'Videos', 'Live', 'Photos', 'Chat'];

const BackUpScreens = () => {
  const navigation = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleCheckbox = (option: string) => {
    if (option === 'All') {
      if (selectedOptions.includes('All')) {
        setSelectedOptions([]);
      } else {
        setSelectedOptions([...options]);
      }
    } else {
      let updatedOptions = [...selectedOptions];
      if (updatedOptions.includes(option)) {
        updatedOptions = updatedOptions.filter(item => item !== option);
      } else {
        updatedOptions.push(option);
      }

      if (updatedOptions.length === options.length - 1) {
        updatedOptions.push('All');
      } else {
        updatedOptions = updatedOptions.filter(item => item !== 'All');
      }

      setSelectedOptions(updatedOptions);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.IC_BACK} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Account Setting</Text>
      </View>

      {/* Checkboxes */}
      <View style={styles.checkboxGroup}>
        {options.map(option => (
          <TouchableOpacity
            key={option}
            style={styles.checkboxContainer}
            onPress={() => toggleCheckbox(option)}
          >
            <Image
              source={
                selectedOptions.includes(option)
                  ? require('../../../../resources/images/check-box.png')
                  : require('../../../../resources/images/unchecked.png')
              }
              style={styles.checkboxImage}
            />
            <Text style={styles.checkboxText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Email Input */}
      <Text style={styles.inputLabel}>Where you want to receive your data backup</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. jhon@gmail.com"
        placeholderTextColor="#888"
      />

      {/* Backup Button */}
      <TouchableOpacity style={styles.backupButton}>
        <Text style={styles.backupButtonText}>Backup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackUpScreens;
