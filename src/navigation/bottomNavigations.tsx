import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomePage';
import images from '../resources/images';
import tabStyles from './tabStyles';
import UserWalletScreen from '../screens/WalletScreens/UserWalletScreen';
import ProfileforUser from '../screens/UserProfilePages/ProfileforUser';
import ChatListScreen from '../screens/ChatScreen/ChatListScreen';
import ReelsScreen from '../screens/Reels/ReelsScreens';
import CreatePost from '../screens/CreatePost/Createpost';
import CreatePostStack from './CratePostSatck/CreatePostStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabStyles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.IC_HOME}
              style={[tabStyles.icon, focused && tabStyles.iconFocused]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={ChatListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.IC_CHAT}
              style={[tabStyles.icon, focused && tabStyles.iconFocused]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={CreatePostStack}
        options={{
          tabBarIcon: () => (
            <View style={tabStyles.addButtonContainer}>
              <Image
                source={require('../resources/images/plus.png')}
                style={tabStyles.addButtonIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={UserWalletScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.IC_WALLET}
              style={[tabStyles.icon, focused && tabStyles.iconFocused]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileforUser}
        options={{
          tabBarIcon: ({ focused }) => (
            // <Image
            //   // source={images.IC_PROFILE}
            //   source={require('../resources/images/women.png')}
            //   style={[tabStyles.profileicon, focused && tabStyles.iconFocused]}
            // />
            <Image
              source={images.IC_PROFILE}
              style={[
                tabStyles.profileicon,
                focused && tabStyles.iconFocused
              ]}
              resizeMode="contain" // optional to avoid cropping
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};



export default BottomTabNavigator;
