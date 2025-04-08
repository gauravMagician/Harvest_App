import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  Text,
  ViewStyle,
} from 'react-native';
import {
  fontSizes,
  spacing,
  getResponsiveValue,
  scaleSize,
} from '../utils/deviceDimensions';
import ColorConstants from '../constants/ColorConstants';
import {AppConstants} from '../constants/AppConstants';
import ImageButton from './ImageButton';

interface CommonInputProps extends TextInputProps {
  label?: string;
  error?: string;
  children?: React.ReactNode;
  containerStyle?: ViewStyle;
  inputWrapperStyles?: ViewStyle;
  isPasswordField?: boolean;
  rightComponent?: React.ReactNode; 
}

const TextInputField: React.FC<CommonInputProps> = ({
  label,
  error,
  style,
  children,
  isPasswordField,
  containerStyle,
  inputWrapperStyles,
  rightComponent,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputWrapper, inputWrapperStyles]}>
        <TextInput
          style={[
            styles.input,
            error && styles.inputError,
            isFocused && styles.inputFocused, // Apply focused styles
            style,
          ]}
          placeholderTextColor={
            isFocused
              ? ColorConstants.APP_TEXT_COLOR
              : ColorConstants.INPUT_FIELD_PLACEHODER_COLOR
          }
          secureTextEntry={isPasswordField && !isPasswordVisible}
          onFocus={() => setIsFocused(true)} // Handle focus
          onBlur={() => setIsFocused(false)} // Handle blur
          {...props}
        />
          {/* Right Component */}
          {rightComponent && <View style={styles.rightComponent}>{rightComponent}</View>}

        {isPasswordField && (
          <ImageButton
            containerStyle={{
              zIndex: 999,
              // backgroundColor: 'red',
              height: getResponsiveValue(50, 42, 52),
              width: getResponsiveValue(50, 42, 52),
              position: 'absolute',
              right: 0,
              alignItems: 'center',
            }}
            onPress={togglePasswordVisibility}
            // image={
            //   isPasswordVisible
            //     ? images.IC_SHOW_PASSWORD
            //     : images.IC_HIDE_PASSWORD
            // }
            imageStyle={styles.iconContainer}
          />
        )}
        {children}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: spacing.medium,
    alignSelf: 'center',
    // alignItems: 'center',
  },
  label: {
    marginBottom: spacing.small,
    fontFamily: AppConstants.FONT_POPPINS_REGULAR,
    fontSize: fontSizes.small,
    color: ColorConstants.APP_TEXT_LIGHT_COLOR,
  },
  inputWrapper: {
    position: 'relative',
    // width: getResponsiveValue(350, 458, 588),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  input: {
    height: getResponsiveValue(50, 58, 66),
    width: '100%',
    borderRadius: getResponsiveValue(50, 58, 66),
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: spacing.large,
    paddingRight: scaleSize(50),
    fontSize: fontSizes.medium,
    color: '#333',
    backgroundColor: ColorConstants.INPUT_FIELD_IN_ACTIVE_BG_COLOR,
    fontFamily: AppConstants.FONT_POPPINS_REGULAR,
  },
  inputFocused: {
    backgroundColor: ColorConstants.INPUT_FIELD_ACTIVE_BG_COLOR, // Replace with your desired focus color
    borderColor: ColorConstants.COLOR_YELLOW, // Optional: Change border color when focused
  },
  inputError: {
    // borderColor: ColorConstants.ERROR_TEXT_COLOR,
  },
  iconContainer: {
    position: 'absolute',
    // right: scaleSize(20),
    transform: [{translateY: 15}],
    zIndex: 999,
  },
  errorText: {
    color: ColorConstants.ERROR_TEXT_COLOR,
    fontSize: fontSizes.small,
    marginTop: spacing.small,
    alignSelf: 'flex-start',
    paddingHorizontal: getResponsiveValue(15, 31, 42),
  },
  rightComponent: {
    position: 'absolute',
    right: scaleSize(20),
  },
});

export default TextInputField;
