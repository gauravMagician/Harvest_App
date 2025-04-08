import { StyleSheet } from 'react-native';
import { fontSizes, scaleFontSize, scaleSizeHeight, scaleSizeWidth, spacing } from '../../../utils/deviceDimensions';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E21',
    padding: spacing.medium,
  },
  backButton: {
    marginBottom: spacing.medium,
  },
  header: {
    fontSize: fontSizes.extraLarge,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: "row",
    width: scaleSizeWidth(328),
    marginHorizontal: scaleSizeWidth(20)
  },
  description: {
    fontSize: fontSizes.medium,
    color: 'white',
    textAlign: 'left',
    marginBottom: spacing.medium,
  },
  sectionHeader: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    color: '#0F67B1',
    marginTop: spacing.large,
    marginBottom: spacing.small,
  },
  text: {
    fontSize: fontSizes.medium,
    color: 'white',
    marginBottom: spacing.medium,
  },
  boldText: {
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: spacing.small,
  },
  link: {
    color: '#0F67B1',
  },
  headerText: {
    fontSize: scaleFontSize(28),
    fontWeight: '700',
    color: 'white',
    alignItems: "center",
    textAlign: "center",
    marginLeft: scaleSizeWidth(20),
  },
  backIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(24),
    resizeMode: 'contain',
  },
  innerView: {
    marginHorizontal: scaleSizeWidth(10),
    marginTop: scaleSizeHeight(10)
  },
  rewardHistoryButton: {
    alignSelf: "center",
    marginVertical: 20,
  },
  rewardHistoryText: {
    color: "#FFFFFF",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default styles;
