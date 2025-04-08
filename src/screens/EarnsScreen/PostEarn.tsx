import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image } from 'react-native';
import { StringConstants } from '../../constants/StringConstants';
import styles from './styles';
import images from '../../resources/images';
import Button from '../../component/Button';

const PostEarn: React.FC<any> = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('SignUp');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Full-screen background image */}
      <ImageBackground
        source={images.BG_IMAGE}
        style={styles.backgroundImage}>
        {/* Fixed plane/asset image near the top */}
        <View style={styles.ImageView}>
          <Image source={require('../../resources/images/Group.png')}
            style={styles.newlogo} />
        </View>

        {/* Main content container for text + button */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Post to Earn</Text>

          <Text style={styles.subTitle}>
            Get rewards for sharing photos and videos.
          </Text>

          {/* Use your custom Button with text from StringConstants */}
          <Button
            title={StringConstants.GET_START}
            onPress={handleGetStarted}
            // You can pass extra style if needed
            style={styles.button}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PostEarn;
