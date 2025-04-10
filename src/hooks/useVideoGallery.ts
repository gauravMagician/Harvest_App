import { useState, useEffect } from 'react';
import { CameraRoll, PhotoIdentifier } from '@react-native-camera-roll/camera-roll';
import { AppState } from 'react-native';

interface UseVideoGalleryResult {
    videos: { uri: string; original: PhotoIdentifier }[];
    isLoading: boolean;
    reloadVideos: () => void;
}

export const useVideoGallery = (options?: { pageSize?: number }): UseVideoGalleryResult => {
    const [videos, setVideos] = useState<{ uri: string; original: PhotoIdentifier }[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const pageSize = options?.pageSize ?? 100;

    const fetchVideos = async () => {
        try {
            setIsLoading(true);
            const result = await CameraRoll.getPhotos({
                first: pageSize,
                assetType: 'Videos',
            });
            const videoList = result.edges.map(item => ({
                uri: item.node.image.uri,
                original: item,
            }));
            setVideos(videoList);
        } catch (error) {
            console.log('Error fetching videos:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchVideos();

        const appStateListener = AppState.addEventListener('change', nextState => {
            if (nextState === 'active') {
                fetchVideos(); // Refresh when returning to app
            }
        });

        return () => {
            appStateListener.remove();
        };
    }, []);

    return {
        videos,
        isLoading,
        reloadVideos: fetchVideos,
    };
};
