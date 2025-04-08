import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import SplashScreen from '../screens/SplashScreens/SplashScreen';
import EarnScreen from '../screens/EarnsScreen/EarnScreen';
import PostEarn from '../screens/EarnsScreen/PostEarn';
import PostToEarnScreen from '../screens/EarnsScreen/PostToEarnScreen';
import SignUp from '../screens/SingUpScreen';
import VerifyOTP from '../screens/OTPScreen/VerifyOTP';
import Profile from '../screens/ProfileScreens/Profile';
import WalletPreferenceScreen from '../screens/WalletPreferenceScreen/WalletPreferenceScreen';
import BottomTabNavigator from './bottomNavigations';
import WalletDetails from '../screens/WalletScreens/walletDetailsScreen/WalletDetails';
import WithdrawalScreen from '../screens/WalletScreens/WithDrawScreen';
import WithdrawSuccess from '../screens/WalletScreens/WithdrawalDoneScreen/WithdrawSuccess';
import NotificationPage from '../screens/Notification/NotificationPage';
import SettingPage from '../screens/SettingScreen/SettingPage';
import NotificationThreedots from '../screens/Notification/NotificationThreedots';
import AccountSettingScreen from '../screens/SettingScreen/AccountSettingScreen/AccountSettingScreen';
import BlockListScreen from '../screens/SettingScreen/BlockScreen/BlockPage';
import UserWalletScreen from '../screens/WalletScreens/UserWalletScreen';
import SettingNotification from '../screens/SettingScreen/SettingNotificationScreen/SettingNotifiction';
import MainEarningPage from '../screens/SettingScreen/EarningsStatus/MainEarningPage';
import BuyMembershipPayment from '../screens/BuyMember/BuyMembershipPayment/BuyMembershipPayment';
import BuyMembershipScreen from '../screens/BuyMember/BuyMemberShip';
import PaymentDone from '../screens/BuyMember/PaymentDonePage/PaymentDone';
import HistoryScreen from '../screens/SettingScreen/History/HistoryScreen';
import FaqsScreen from '../screens/SettingScreen/FAQs/FAQsScreen';
import HelpScreen from '../screens/SettingScreen/HelpScreens/HelpScreen';
import PrivacyPolicy from '../screens/SettingScreen/Privacy/PrivacyPolicy';
import BackUpScreens from '../screens/SettingScreen/AccountSettingScreen/BackUpScreens/BackUpScreens';
import PhoneNumberChange from '../screens/SettingScreen/AccountSettingScreen/VerifyPhoneNumber/PhoneNumberChange';
import PrivacySetting from '../screens/SettingScreen/AccountSettingScreen/ SettingPrivacy/PrivacySetting';
import MyRewards from '../screens/WalletScreens/myRewardScreen/MyRewards';
import UserViewProfilePage from '../screens/UserProfilePages/UserViewProfile/UserViewProfilePage';
import FollowersFollowingScreen from '../screens/FollowerFollowingScreens/FollowersFollowingScreen';
import PublicProfileScreen from '../screens/PublicProfile/PublicProfileScreen';
import PostDetails from '../screens/UserProfilePages/PostFullDetalis/PostDetails';


const Stack = createStackNavigator<RootStackParamList>();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EarnScreen" component={EarnScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PostEarn" component={PostEarn} options={{ headerShown: false }} />
        <Stack.Screen name="PostToEarnScreen" component={PostToEarnScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTP} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="WalletPreferenceScreen" component={WalletPreferenceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="WithdrawalScreen" component={WithdrawalScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WalletDetails" component={WalletDetails} options={{ headerShown: false }} />
        <Stack.Screen name="WithdrawSuccess" component={WithdrawSuccess} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationPage" component={NotificationPage} options={{ headerShown: false }} />
        <Stack.Screen name="SettingPage" component={SettingPage} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationThreedots" component={NotificationThreedots} options={{ headerShown: false }} />
        <Stack.Screen name="AccountSettingScreen" component={AccountSettingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BlockListScreen" component={BlockListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserWalletScreen" component={UserWalletScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SettingNotification" component={SettingNotification} options={{ headerShown: false }} />
        <Stack.Screen name="MainEarningPage" component={MainEarningPage} options={{ headerShown: false }} />
        <Stack.Screen name="BuyMembershipPayment" component={BuyMembershipPayment} options={{ headerShown: false }} />
        <Stack.Screen name="BuyMembershipScreen" component={BuyMembershipScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentDone" component={PaymentDone} options={{ headerShown: false }} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FaqScreen" component={FaqsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: false }} />
        <Stack.Screen name="BackUpScreens" component={BackUpScreens} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneNumberChange" component={PhoneNumberChange} options={{ headerShown: false }} />
        <Stack.Screen name="PrivacySetting" component={PrivacySetting} options={{ headerShown: false }} />
        <Stack.Screen name="MyRewards" component={MyRewards} options={{ headerShown: false }} />
        <Stack.Screen name="UserViewProfilePage" component={UserViewProfilePage} options={{ headerShown: false }} />
        <Stack.Screen name="FollowersFollowingScreen" component={FollowersFollowingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PublicProfileScreen" component={PublicProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PostDetails" component={PostDetails} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;