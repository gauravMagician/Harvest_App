import { StyleSheet } from 'react-native';
import { fontSizes, scaleSize, scaleSizeHeight, scaleSizeWidth, spacing } from '../../../utils/deviceDimensions';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F1D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: scaleSizeWidth(320),
    height: scaleSizeHeight(320),
    backgroundColor: '#0A0F1D',
    borderRadius: scaleSize(16),
    padding: spacing.extraLarge,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    borderWidth:1,
    borderColor: '#27303F',
    
  },
  iconContainer: {
    width: scaleSize(120),
    height: scaleSize(120),
    borderRadius: scaleSize(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleSizeHeight(30),
    marginBottom: scaleSizeHeight(30),
  },
  icon: {
    width: scaleSize(120),
    height: scaleSize(120),
    // tintColor: "#fff",
  },
  title: {
    fontSize: fontSizes.extraLarge,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: scaleSizeHeight(5),
  },
  subtitle: {
    fontSize: fontSizes.medium,
    color: '#9CA3AF',
    textAlign: 'center',
    // marginBottom: spacing.medium,
    fontWeight: '400',
    marginTop: scaleSizeHeight(5),
    marginBottom: scaleSizeHeight(20),
  },
  button: {
    backgroundColor: '#2563EB',
    width: '100%',
    paddingVertical: scaleSizeHeight(12),
    borderRadius: scaleSize(17),
    alignItems: 'center',
    marginTop: scaleSizeHeight(30)
  },
  buttonText: {
    color: '#fff',
    fontSize: fontSizes.medium,
    fontWeight: '600',
  },
});
