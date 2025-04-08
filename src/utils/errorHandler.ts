import {Alert} from 'react-native';

export const handleApiError = (error: any) => {
  if (error.response?.status === 401) {
    Alert.alert(
      'Session Expired',
      'Your session has expired. Please login again.',
      [{text: 'OK'}],
    );
    // You can dispatch logout action here if needed
    return true;
  }

  const errorMessage = error.response?.data?.message || 'Something went wrong';
  Alert.alert('Error', errorMessage, [{text: 'OK'}]);
  return false;
};
