import { StyleSheet } from 'react-native';
import { fontSizes, scaleSize, scaleSizeHeight, scaleSizeWidth, spacing } from '../../utils/deviceDimensions';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a192f',
    paddingTop: spacing.medium,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#010B1F',
    // backgroundColor:"red",
    marginHorizontal: scaleSizeHeight(15),
    borderRadius: scaleSize(30),
    paddingHorizontal: spacing.medium,
    height: scaleSizeHeight(30),
    width:scaleSizeWidth(313),
    marginVertical:scaleSizeHeight(10),
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: fontSizes.medium,
  },
  searchIcon: {
    width: scaleSizeWidth(15),
    height: scaleSizeHeight(15),
    tintColor: 'white',
    marginRight: spacing.medium,
  },
  menuIcon: {
    width: scaleSizeWidth(15),
    height: scaleSizeHeight(15),
    tintColor: 'white',
    position:"relative",
    top:scaleSizeHeight(18),
    right:scaleSizeWidth(5)
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.large,
    borderBottomWidth: 0.5,
    borderBottomColor: '#3070E8',
    position: 'relative',
    marginHorizontal:scaleSizeWidth(10),
  },
  selectedChat: {
    backgroundColor: '#112240',
  },
  avatar: {
    width: scaleSizeWidth(40),
    height: scaleSizeHeight(35),
    borderRadius: scaleSize(25),
    marginRight: spacing.medium,
  },
  chatDetails: {
    flex: 1,
  },
  name: {
    fontSize: fontSizes.large,
    color: 'white',
    fontWeight: 'bold',
  },
  message: {
    fontSize: fontSizes.small,
    color: '#8892b0',
  },
  chatMeta: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: fontSizes.small,
    color: '#ccd6f6',
  },
  unreadBadge: {
    backgroundColor: 'red',
    borderRadius: scaleSize(10),
    paddingVertical: scaleSize(2),
    paddingHorizontal: scaleSize(6),
    marginTop: spacing.small,
  },
  unreadText: {
    color: 'white',
    fontSize: fontSizes.small,
    fontWeight: 'bold',
  },
  optionsMenu: {
    position: 'absolute',
    right: scaleSize(20),
    top: scaleSize(30),
    backgroundColor: '#112240',
    padding: spacing.small,
    borderRadius: scaleSize(5),
  },
  optionText: {
    color: 'white',
    fontSize: fontSizes.medium,
    paddingVertical: scaleSize(5),
  },
  mainSearchView:{
    flexDirection:"row",
    // justifyContent:"space-around"
  }
});
