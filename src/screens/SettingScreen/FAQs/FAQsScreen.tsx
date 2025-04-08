import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import images from '../../../resources/images';


const faqData = [
  {
    id: '1',
    question: 'What Is Cineflix?',
    answer:
      'Cineflix is your go-to streaming platform, offering a wide variety of movies, TV shows, documentaries, and exclusive content. Enjoy on-demand entertainment anytime, anywhere, and experience an uninterrupted viewing experience.',
  },
  { id: '2', question: 'How Do I Create An Account?', answer: 'You can create an account by signing up on our website or mobile app.' },
  { id: '3', question: 'How Do I Reset My Password?', answer: 'Go to the login page, click on "Forgot Password," and follow the instructions.' },
  { id: '4', question: 'How Can I Cancel My Subscription?', answer: 'You can cancel your subscription from the account settings in the app.' },
  { id: '5', question: 'How Do I Delete My Cineflix Account?', answer: 'To delete your account, please contact our support team.' },
  { id: '6', question: 'What Content Is Available On Cineflix?', answer: 'Cineflix offers a variety of movies, shows, and documentaries.' },
  { id: '7', question: 'Can I Download Content For Offline Viewing?', answer: 'Yes, you can download select content for offline viewing.' },
  { id: '8', question: 'How Do I Update My Payment Method?', answer: 'You can update your payment method in the billing section.' },
];

const FaqsScreen = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const navigation = useNavigation()
  const toggleFAQ = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
        <Image source={images.IC_BACK}
          style={styles.backIcon} />
        <Text style={styles.headerText}>FAQs</Text>
      </TouchableOpacity>

      {/* Description */}
      <Text style={styles.description}>
        Have questions? We've got answers! Browse through our FAQs to find quick solutions.
      </Text>

      {/* FAQ List */}
      <FlatList
        data={faqData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.faqItem}>
            <TouchableOpacity style={styles.faqHeader} onPress={() => toggleFAQ(item.id)}>
              <Text style={styles.faqQuestion}>{item.question}</Text>
              <Image
                source={
                  expandedId === item.id
                    ? require('../../../resources/images/down.png')
                    : require('../../../resources/images/down.png')
                }
                style={styles.icon}
              />
            </TouchableOpacity>
            {expandedId === item.id && <Text style={styles.faqAnswer}>{item.answer}</Text>}
          </View>
        )}
      />
    </View>
  );
};

export default FaqsScreen;
