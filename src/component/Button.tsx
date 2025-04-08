import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  Keyboard,
  ActivityIndicator,
  TextProps,
  TextStyle,
} from 'react-native';
import {
  fontSizes,
  spacing,
  getResponsiveValue,
  scaleSize,
} from '../utils/deviceDimensions';
import ColorConstants from '../constants/ColorConstants';
import {AppConstants} from '../constants/AppConstants';

interface CommonButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean; // Add loading prop
  titleStyle?: TextStyle;   
}

const Button: React.FC<CommonButtonProps> = ({
  title,
  variant = 'primary',
  style,
  onPress,
  loading = false, // Default loading to false
  titleStyle,
  ...props
}) => {
  const handlePress = (event: any) => {
    if (!loading) {
      Keyboard.dismiss(); // Dismiss keyboard
      onPress && onPress(event); // Call the onPress handler if provided
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, styles[variant], style]}
      disabled={loading} // Disable button when loading
      {...props}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' ? '#007AFF' : 'white'}
        />
      ) : (
        <Text style={[styles.text, styles[`${variant}Text`], titleStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // width: getResponsiveValue(350, 458, 588),
    height: getResponsiveValue(50, 58, 66),
    borderRadius: scaleSize(60),
    alignSelf: 'center',
  },
  primary: {
    backgroundColor: ColorConstants.BUTTON_BACKGROUND,
  },
  secondary: {
    backgroundColor: '#5856D6',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  text: {
    fontSize: fontSizes.medium,
    fontFamily: AppConstants.FONT_DMSANS_MEDIUM,
    textTransform: 'capitalize',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'white',
  },
  outlineText: {
    color: '#007AFF',
  },
});

export default Button;
