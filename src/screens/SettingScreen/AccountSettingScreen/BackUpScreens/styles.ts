import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
  spacing,
} from '../../../../utils/deviceDimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081024',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleSizeHeight(20),
  },
  backIcon: {
    width: scaleSize(20),
    height: scaleSize(18),
    marginRight: spacing.medium,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(18),
    fontWeight: '700',
    marginLeft: scaleSizeWidth(30),

  },
  checkboxGroup: {
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkboxImage: {
    width: scaleSizeWidth(22),
    height: scaleSizeHeight(22),
    marginRight: scaleSizeWidth(12),
    tintColor: 'white',
  },
  checkboxText: {
    color: '#fff',
    fontSize: scaleFontSize(20),
    fontWeight: '400',
  },
  inputLabel: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    color: '#fff',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: scaleSize(10),
    borderWidth: 1,
    borderColor: '#27303F',
    marginBottom: scaleSizeHeight(10),
  },
  backupButton: {
    backgroundColor: '#0360D2',
    paddingVertical: scaleSizeHeight(10),
    borderRadius: scaleSize(10),
    alignItems: 'center',
    marginTop: scaleSizeHeight(10),
  },
  backupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
