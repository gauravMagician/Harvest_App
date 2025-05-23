import { StyleSheet } from 'react-native';
import {
  fontSizes,
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
  spacing,
} from '../../utils/deviceDimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010B1F',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: scaleSizeHeight(5),
    paddingBottom: scaleSizeHeight(5),
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'flex-end',
  },
  storitext: {
    marginHorizontal: scaleSizeWidth(20),
    marginBottom: scaleSizeHeight(10),
    color: '#fff',
    fontSize: scaleSize(12),
    fontWeight: '600',
  },
  headerIcon: {
    width: scaleSizeWidth(61),
    height: scaleSizeHeight(40),
  },
  icons: {
    width: scaleSizeWidth(19),
    height: scaleSizeHeight(18),
    marginHorizontal: spacing.medium,
  },

  filterBar: {
    flexDirection: 'row',
    paddingHorizontal: spacing.medium,
  },
  filterButton: {
    width: scaleSizeWidth(60),
    height: scaleSizeHeight(20),
    backgroundColor: '#1A2332',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: scaleSizeWidth(5),
  },
  filterText: {
    width: scaleSizeWidth(60),
    color: 'white',
    fontSize: fontSizes.small,
    textAlign: 'center',
  },
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: spacing.small,
    // height: scaleSizeHeight(90)
  },
  storyImage: {
    width: scaleSize(60),
    height: scaleSize(60),
    borderStyle: "dotted",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#3070E8',

  },
  addStory: {
    position: 'relative',
    bottom: scaleSizeHeight(27),
    left: scaleSizeWidth(14),
    backgroundColor: 'blue',
    width: scaleSizeHeight(17),
    borderRadius: 10,
    alignItems: 'center',
  },
  plusIcon: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  storyName: {
    color: 'white',
    fontSize: fontSizes.small,
    marginTop: spacing.small,
    textAlign: 'center',
  },
  feedContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  feedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.medium,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    color: 'white',
    fontSize: fontSizes.medium,
    marginLeft: spacing.medium,
  },
  bottomname: {
    fontWeight: '600',
    fontSize: scaleSize(14),
    color: 'white',
    marginRight: scaleSizeWidth(100),
  },
  followingButton: {
    backgroundColor: '#3A82F7',
  },
  followingText: {
    color: 'white',
  },
  followButton: {
    backgroundColor: '#010B1F',
    paddingHorizontal: scaleSizeWidth(11),
    paddingVertical: scaleSizeHeight(2),
    borderRadius: scaleSize(8),
    marginLeft: '45%',
    position: 'relative',
    right: scaleSizeWidth(150),
    borderColor: '#27303F',
    borderWidth: 2,
  },

  followText: {
    fontSize: scaleSize(8),
    fontWeight: '400',
    color: 'white',
  },
  nameView: {
    flexDirection: 'column',
  },
  moreIcon: {
    width: scaleSizeWidth(12),
    height: scaleSizeHeight(12),
    marginLeft: scaleSize(42)

  },
  timeText: {
    fontSize: scaleSize(8),
    fontWeight: '500',
    color: '#9BBEFE',
    marginLeft: scaleSizeWidth(12),
    lineHeight: scaleSizeHeight(12),
  },
  postImage: {
    width: scaleSizeWidth(401),
    height: scaleSizeHeight(201),
    resizeMode: 'cover',
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: scaleSizeWidth(270),
    marginLeft: scaleSizeWidth(8),
    paddingTop: scaleSizeHeight(10),
    paddingBottom: scaleSizeHeight(5),
    // paddingVertical: 10,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    position: "relative",
    left: 5

  },
  feedtext: {
    fontSize: scaleSize(12),
    fontWeight: '600',
    color: '#F2F2F2',
    marginHorizontal: scaleSizeWidth(15),
    marginVertical: scaleSizeHeight(10),
  },
  actionIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#788497',
  },
  HartIcon: {
    width: scaleSizeWidth(17),
    height: scaleSizeHeight(15),
    marginRight: scaleSizeWidth(5),
    tintColor: '#788497',
  },
  PlanHartIcon: {
    width: scaleSizeWidth(17),
    height: 15,
    marginRight: 5,
    tintColor: '#788497',
  },
  LikeIcon: {
    width: scaleSizeWidth(23),
    height: 20,
    marginRight: scaleSizeWidth(5),
  },
  modalshareIcon: {
    width: scaleSizeWidth(27),
    height: scaleSizeHeight(20),
    marginRight: scaleSizeWidth(5),
    tintColor: "white"
  },
  VectorIcon: {
    width: scaleSizeWidth(23),
    height: scaleSizeHeight(19),
    marginRight: scaleSizeWidth(5),
    tintColor: "white"
  },
  actionText: {
    color: '#9BBEFE',
    fontSize: scaleFontSize(15),
    fontWeight: '500',
    position: "relative",
    left: 3
  },
  description: {
    color: 'white',
    paddingHorizontal: spacing.medium,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: spacing.medium,
    backgroundColor: '#0B1320',
  },
  bottomIcon: {
    width: 26,
    height: 26,
    tintColor: 'white',
  },
  bottomCenterIcon: {
    width: 32,
    height: 32,
    tintColor: 'blue',
  },
  filterContainer: {
    paddingHorizontal: spacing.medium,
    flexDirection: 'row',
    marginBottom: scaleSizeHeight(20),
  },
  storyListContainer: {
    paddingHorizontal: spacing.medium,
  },
  modalContainer: {
    width: '100%',
    height: "auto",
    padding: scaleSize(15),
    borderRadius: 10,
    marginBottom: scaleSizeHeight(20),
    marginHorizontal: scaleSizeWidth(10)
  },
  myfeedtext: {
    color: 'white',
    marginBottom: scaleSizeHeight(2),
    marginLeft: scaleSizeWidth(10),
    fontSize: scaleFontSize(18),
    fontWeight: "400"
  },
  Toptext: {
    color: 'white',
    fontSize: scaleFontSize(18),
    fontWeight: "400",
    marginLeft: scaleSizeWidth(10),
    marginBottom: scaleSizeHeight(10)
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  userRow: {
    width: scaleSizeWidth(316),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scaleSizeHeight(12),
    borderBottomWidth: 0.5,
    borderColor: '#333',
    justifyContent: 'space-between',
  },
  avatar: {
    width: scaleSizeWidth(56),
    height: scaleSizeHeight(44),
    borderRadius: 25,
    marginRight: 10,
  },
  bottomView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: scaleSizeHeight(15),
  },
  sharebottomView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: scaleSizeHeight(10),
    marginTop: scaleSizeHeight(18),
  },
  commentbottomView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: scaleSizeHeight(10),
    marginTop: scaleSizeHeight(18),
  },

  followButtonbottom: {
    backgroundColor: '#0360D2',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  followTextbottom: {
    color: 'white',
    fontWeight: '600',
  },
  followingButtonbottom: {
    backgroundColor: '#007bff',
  },
  followingTextbottom: {
    color: 'white',
    fontWeight: '600',
  },
  SendButtonbottom: {
    backgroundColor: '#007bff',
    paddingVertical: scaleSizeHeight(6),
    paddingHorizontal: scaleSizeWidth(16),
    borderRadius: 5,
  },
  sendextbottom: {
    color: 'white',
    fontWeight: '600',
    fontSize: scaleSize(14),
  },
  sendAvatar: {
    width: scaleSizeWidth(50),
    height: scaleSizeHeight(40),
  },
  TopContainer: {
    flexDirection: 'row',
    marginHorizontal: scaleSizeWidth(10),
    marginBottom: scaleSizeHeight(10),
    // justifyContent: 'center
    // marginBottom: 16,
  },
  shareIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scaleSizeWidth(12)
    // marginHorizontal: scaleSizeWidth(),
  },
  shareIcon: {
    width: scaleSizeHeight(36),
    height: scaleSizeHeight(40),
    resizeMode: 'contain',
  },
  liveview: {
    marginTop: scaleSizeHeight(10),
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scaleSizeWidth(35),
    marginVertical: scaleSizeHeight(8),
  },
  TextImgView: {
    flexDirection: 'row',
  },

  liveIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(18),
    marginRight: 5,
    tintColor: '#ffff',
  },
  liveshareIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(17),
    marginRight: 5,
    tintColor: '#ffff',
  },
  liveText: {
    color: '#9BBEFE',
    fontSize: fontSizes.medium,
    fontWeight: '500',
    marginLeft: scaleSizeWidth(4),
    marginTop: scaleSizeHeight(2),
  },
  box: {
    // backgroundColor: 'red',
    borderWidth: 1,
    width: 23,
    height: 23,
    borderRadius: scaleSize(60),
    borderColor: 'white',
  },
  boxInner: {
    flexDirection: 'row',
    marginHorizontal: scaleSizeWidth(20),
    marginTop: scaleSizeHeight(10),
  },
  numbertext: {
    color: '#9BBEFE',
    fontSize: scaleSize(12),
    fontWeight: '500',
    marginTop: scaleSizeHeight(2),
    marginLeft: scaleSizeWidth(10)
  },
  input: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 5,
    color: "white",
    padding: 10,
    marginTop: scaleSizeHeight(20),
    width: scaleSizeWidth(180),
    height: scaleSizeHeight(33),
  },
  saveButton: {
    backgroundColor: "#2563eb",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: scaleSizeHeight(10),
    // marginLeft: scaleSizeHeight(10),
    width: scaleSizeWidth(110),
    height: scaleSizeHeight(30)
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  inputView: {
    flexDirection: "row",
    marginHorizontal: scaleSizeHeight(35)
  },

  /// styles for the shareuserRow 
  shareuserRow: {
    width: scaleSizeWidth(316),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scaleSizeHeight(8),
    borderBottomWidth: 0.5,
    borderColor: '#333',
    justifyContent: 'space-between',
    marginHorizontal: scaleSizeWidth(20)
  },
  sharebottomname: {
    fontWeight: '600',
    fontSize: scaleSize(14),
    color: 'white',
    position: "relative",
    right: scaleSizeWidth(60)
  },
  postTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: scaleFontSize(18),
  },
  descriptionWrapper: {
    marginTop: 4,
    marginHorizontal: scaleSizeWidth(10),
    marginVertical: scaleSizeHeight(5)
  },
  postDescription: {
    color: '#fff',
    fontSize: scaleFontSize(14),
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: '#010B1F',
    borderWidth: 1,
    borderColor: "#27303F",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: scaleSizeWidth(221),
    marginRight: scaleSizeHeight(5)
  },
  searchInput: {
    backgroundColor: '#01081A',
    color: 'white',
    borderColor: '#27303F',
    borderRadius: 17,
    paddingLeft: 5,
  },
  searchicons: {
    width: scaleSizeWidth(16),
    height: scaleSizeHeight(16),
    marginRight: scaleSizeWidth(5)
  },

  /*** MODAL STYLES ***/
  modalContent: {
    position: "absolute",
    // right:150,
    backgroundColor: '#010B1F', // Dark background
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 12,
    width: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },
  modalItem: {
    paddingVertical: 5,
  },
  modalText: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(10),
    fontWeight: "500"
  },

  modalOption: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  // save modal sheet styles 

  checkboxGroup: {
    // marginBottom: 20,
    flexDirection: "row"
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleSizeHeight(16),
    marginLeft: scaleSizeWidth(20)
  },
  checkboxImage: {
    width: scaleSizeWidth(20.5),
    height: scaleSizeHeight(16),
    marginRight: scaleSizeWidth(12),
    tintColor: 'white',
  },
  checkboxText: {
    color: '#9BBEFE',
    fontSize: scaleFontSize(15),
    fontWeight: '400',
  },
  SaveModal: {
    marginTop: scaleSizeHeight(15)
  },
  categoryText: {
    fontSize: scaleSize(16),
    color: '#000',
  },
  checkIcon: {
    width: scaleSize(20),
    height: scaleSize(20),
  },
  nameInput: {
    width:200,
    borderWidth: 1,
    borderColor: 'grey',
    padding: scaleSize(10),
    marginVertical: scaleSize(10),
    borderRadius: 5,
  },
  // saveButton: {
  //   backgroundColor: '#125BE4CC',
  //   padding: scaleSize(10),
  //   borderRadius: 5,
  //   alignItems: 'center',
  // },
  // saveButtonText: {
  //   color: '#fff',
  //   fontSize: scaleSize(16),
  // },

});

export default styles;
