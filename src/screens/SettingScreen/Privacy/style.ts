import { StyleSheet } from 'react-native';
import {
  fontSizes,
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
  spacing,
} from '../../../utils/deviceDimensions';

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
    justifyContent: "space-between",
    flexDirection: "row",
    width: scaleSizeWidth(250),
    // marginVertical: scaleSizeHeight(15),
    marginTop: scaleSizeHeight(15),
    marginBottom: scaleSizeHeight(20)
  },
  description: {
    fontSize: scaleFontSize(20),
    fontWeight: "400",
    color: 'white',
    // textAlign: 'left',
    marginBottom: spacing.large,
    // lineHeight: fontSizes.large,
  },
  sectionHeader: {
    fontSize: scaleFontSize(24),
    fontWeight: '700',
    color: '#0F67B1',
    marginTop: spacing.large,
    marginBottom: spacing.small,
  },
  text: {
    fontSize: scaleFontSize(20),
    fontWeight: "400",
    color: 'white',
  },
  listItem: {
    fontSize: scaleFontSize(20),
    fontWeight: "400",
    color: 'white',
    marginBottom: spacing.small,
    marginHorizontal: scaleSizeWidth(10)
  },
  boldText: {
    fontSize: scaleFontSize(20),
    fontWeight: "400",
    // color: 'white',
  },
  backIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(24),
    resizeMode: 'contain',
    marginLeft: scaleSizeHeight(10)
  },
  headerText: {
    fontSize: scaleFontSize(28),
    fontWeight: '700',
    color: 'white',
    marginLeft: scaleSizeWidth(20),
    // position: 'relative',
  },
  innerView: {
    marginHorizontal: scaleSizeWidth(10)
  }
});

export default styles;
