import { StyleSheet } from 'react-native';
import { scaleFontSize, scaleSize, scaleSizeHeight, scaleSizeWidth, spacing } from '../../../utils/deviceDimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0F1A',
    padding: spacing.medium,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scaleSize(10),
    marginBottom: scaleSizeHeight(10),
  },
  backIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(24),
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: scaleFontSize(28),
    fontWeight: '700',
    color: 'white',
    position: "relative",
    left: scaleSizeWidth(120)
  },
  description: {
    fontSize: scaleFontSize(20),
    fontWeight: "400",
    color: 'white',
    marginHorizontal: scaleSizeWidth(20),
    marginVertical: scaleSizeHeight(10)
  },
  faqItem: {
    borderRadius: scaleSizeWidth(8),
    padding: spacing.medium,
    marginVertical: scaleSizeHeight(10),
    marginHorizontal: scaleSizeWidth(7)
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: scaleFontSize(16),
    fontWeight: '600',
    color: 'white',
  },
  icon: {
    width: scaleSizeWidth(12),
    height: scaleSizeHeight(7),
    resizeMode: 'contain',
  },
  faqAnswer: {
    fontSize: scaleFontSize(16),
    fontWeight: '400',
    color: "white",
    // color: 'gray',
    marginTop: spacing.small,
  },
});
