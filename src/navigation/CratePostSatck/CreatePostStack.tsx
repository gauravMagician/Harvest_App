// navigation/CreatePostStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreatePost from '../../screens/CreatePost/Createpost';
import VideoSelection from '../../screens/CreatePost/VideoScreens/VideoSelection';
import ReelsRecording from '../../screens/CreatePost/ReelScreens/ReelsRecording';
import LiveScreen from '../../screens/CreatePost/LiveScreens/LiveScreen';
import PostScreen from '../../screens/CreatePost/PostScreens/PostScreen';

export type CreatePostStackParamList = {
    CreatePost: { videoUri?: string };
    Post: { tabTitle: string };
    Reels: { tabTitle: string };
    Live: { tabTitle: string };
    Videos: { tabTitle: string };
};


const Stack = createStackNavigator<CreatePostStackParamList>();

const CreatePostStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CreatePost" component={CreatePost} />
            <Stack.Screen name="Videos" component={VideoSelection} />
            <Stack.Screen name="Reels" component={ReelsRecording} />
            <Stack.Screen name="Live" component={LiveScreen} />
            <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
    );
};

export default CreatePostStack;
