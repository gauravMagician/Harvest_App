import { StyleSheet } from 'react-native';
import {
  fontSizes,
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
  spacing,
} from '../../utils/deviceDimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01081A',
    padding: spacing.medium,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
    marginTop: scaleSizeHeight(14)
  },
  headerText: {
    color: 'white',
    fontSize: scaleFontSize(23),
    fontWeight: '700',
    // marginLeft: spacing.medium,
  },
  backIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(10),
    tintColor: '#FFFFFF',
  },
  interestView: {
    padding: scaleSize(10),
    marginTop: scaleSizeHeight(15)
  },
  sectionTitle: {
    color: 'white',
    fontSize: scaleFontSize(20),
    fontWeight: '700',
    // marginBottom: spacing.small,
  },
  interestContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.large,
    marginTop: scaleSizeHeight(10),
  },
  interestButton: {
    borderWidth: 1,
    borderColor: '#27303F',
    paddingHorizontal: scaleSizeWidth(25),
    paddingVertical: scaleSizeHeight(10),
    borderRadius: scaleSizeWidth(10),
    margin: spacing.small,
  },
  followView: {
    padding: scaleSize(10),
    marginTop: scaleSizeHeight(15)
  },
  selectedInterestButton: {
    backgroundColor: '#0360D2',
    // borderColor: '#3A82F7',
  },
  interestText: {
    color: 'white',
    fontSize: scaleSize(14),
    fontWeight: '400',
  },
  selectedInterestText: {
    color: 'white',
    fontWeight: 'bold',
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#092C57',
    borderRadius: scaleSizeWidth(12),
    padding: scaleSize(12),
    marginBottom: spacing.small,
    marginTop: scaleSizeHeight(8),
  },
  avatar: {
    width: scaleSizeWidth(40),
    height: scaleSizeWidth(40),
    borderRadius: scaleSizeWidth(20),
    marginRight: spacing.medium,
    borderWidth: scaleSize(1.5),
    borderColor: '#0360D2',
  },
  userName: {
    color: 'white',
    fontSize: scaleSize(16),
    fontWeight: '400',
    flex: 1,
    paddingHorizontal: scaleSizeWidth(5),
  },
  followButton: {
    borderWidth: 1,
    borderColor: '#3A82F7',
    paddingHorizontal: scaleSizeWidth(16),
    paddingVertical: scaleSizeHeight(6),
    borderRadius: scaleSizeWidth(8),
  },
  followingButton: {
    backgroundColor: '#0360D2',
  },
  followText: {
    color: '#3A82F7',
    fontSize: fontSizes.small,
  },
  followingText: {
    color: 'white',
  },
  skipText: {
    color: '#3A82F7',
    fontSize: scaleSize(16),
    textAlign: 'center',
    fontWeight: '600',
  },
  skipView: {
    marginTop: scaleSizeHeight(40),
  },
  buttonView: {
    marginTop: scaleSizeHeight(50),
  },
  button: {
    backgroundColor: "#0360D2",
    paddingHorizontal: scaleSizeWidth(30),
    width: scaleSizeHeight(270),
    borderRadius: scaleSize(16),
    alignSelf: "center",
    height: scaleSizeHeight(45),
  },
  backButton: {
    padding: scaleSize(8),
  },

});
