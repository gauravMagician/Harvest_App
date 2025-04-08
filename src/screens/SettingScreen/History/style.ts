import { StyleSheet } from 'react-native';
import { fontSizes, scaleFontSize, scaleSize, scaleSizeHeight, scaleSizeWidth, spacing } from '../../../utils/deviceDimensions';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01081A',
    padding: spacing.medium,
  },
  backButton: {
    position: 'absolute',
    top: spacing.large,
    left: spacing.medium,
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scaleSize(10)
    // marginBottom: spacing.medium,
  },
  backIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(24),
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: scaleFontSize(28),
    fontWeight: "700",
    color: 'white',
    position: "relative",
    left: scaleSizeWidth(130)
  },
  sectionTitle: {
    fontSize: scaleFontSize(23),
    fontWeight: '700',
    color: 'white',
  },
  transactionItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E2E',
    paddingVertical: scaleSizeHeight(10),
  },
  dateText: {
    fontSize: fontSizes.small,
    color: '#B0B0B0',
    marginBottom: 2,
  },
  transactionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionTitle: {
    fontSize: fontSizes.medium,
    color: 'white',
    flex: 1,
    fontWeight: "400"
  },
  amount: {
    fontSize: scaleFontSize(20),
    fontWeight: '700',
    color: 'white',
    position: "relative",
    bottom: 10
  },
  headerView: {
    marginTop: scaleSizeHeight(10)
  },
  innerView: {
    marginTop: scaleSizeHeight(10),
    marginHorizontal: scaleSizeWidth(10)
  }
});

export default styles;
