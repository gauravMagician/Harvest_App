// screens/SplashScreen.tsx
import React, { useEffect } from 'react';
import { Text, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import images from '../../resources/images';
import { StringConstants } from '../../constants/StringConstants';
import styles from './styles';
import { storage } from '../../utils/storage';

const SplashScreen = () => {
    const navigation = useNavigation<any>();

    useEffect(() => {
        const checkAuthAndNavigate = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const token = await storage.getToken();
            if (token) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'BottomTab' }],
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'EarnScreen' }],
                });
            }
        };

        checkAuthAndNavigate();
    }, []);

    return (
        <ImageBackground source={images.BG_IMAGE} style={styles.container}>
            <Image source={images.IC_LOGO} style={styles.imageAppIcon} />
            <Text style={styles.appText}>{StringConstants.HARVEST_HUB}</Text>
        </ImageBackground>
    );
};

export default SplashScreen;
