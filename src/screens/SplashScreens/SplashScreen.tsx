// screens/SplashScreen.tsx
import React, { useEffect } from 'react';
import { Text, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import images from '../../resources/images';
import { StringConstants } from '../../constants/StringConstants';
import styles from './styles';

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('EarnScreen');
        }, 2000);
    }, []);

    return (
        <ImageBackground source={images.BG_IMAGE} style={styles.container}>
            <Image source={images.IC_LOGO} style={styles.imageAppIcon} />
            <Text style={styles.appText}>{StringConstants.HARVEST_HUB}</Text>
        </ImageBackground>
    );
};

export default SplashScreen;