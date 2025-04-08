// styles.ts
import { StyleSheet } from 'react-native';
import { fontSizes, scaleFontSize, scaleSize, scaleSizeHeight, scaleSizeWidth, spacing } from '../../../utils/deviceDimensions';
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#01081A',
    paddingBottom: spacing.large,
  },
  container: {
    flex: 1,
    backgroundColor: '#01081A',
    paddingHorizontal: spacing.medium,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:scaleSizeHeight(10),
    marginLeft:scaleSizeWidth(7),
    marginBottom:scaleSizeHeight(10)
    // padding:15,
  },
  backIcon: {
    width: scaleSize(20),
    height: scaleSize(15),
    marginRight: spacing.small,
  },
  headerText: {
    fontSize: fontSizes.extraLarge,
    color: '#FFFFFF',
    fontWeight: '700',
    marginLeft:scaleSizeWidth(10)
  },
  notificationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: spacing.small,
    paddingVertical: 2,
    marginHorizontal:scaleSizeWidth(10)
  },
  notificationText: {
    color: '#FFFFFF',
    fontSize:scaleFontSize(16),
    fontWeight: '400',
  },
    toggleContainer: {
      width: scaleSizeWidth(30),
      height: scaleSizeHeight(10),
      borderRadius: 15,
      backgroundColor: "#333",
      // padding: 2,
    },
    toggleButton: {
      width: scaleSizeWidth(12),
      height: scaleSizeHeight(10),
      borderRadius: 15,
      backgroundColor: "white",
    },
});

export default styles;
