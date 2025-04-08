// navigation/CreatePostStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreatePost from '../../screens/CreatePost/Createpost';
import VideoSelection from '../../screens/CreatePost/VideoScreens/VideoSelection';
import ReelsRecording from '../../screens/CreatePost/ReelScreens/ReelsRecording';
import LiveScreen from '../../screens/CreatePost/LiveScreens/LiveScreen';

export type CreatePostStackParamList = {
    CreatePost: { videoUri?: string };
    Videos: undefined;
    Reels: undefined;
    Live: undefined;
};


const Stack = createStackNavigator<CreatePostStackParamList>();

const CreatePostStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CreatePost" component={CreatePost} />
            <Stack.Screen name="Videos" component={VideoSelection} />
            <Stack.Screen name="Reels" component={ReelsRecording} />
            <Stack.Screen name="Live" component={LiveScreen} />
        </Stack.Navigator>
    );
};

export default CreatePostStack;
