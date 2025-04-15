import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
} from '../../utils/deviceDimensions';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    // backgroundColor: '#000', // Dark background to match screenshot
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
    paddingHorizontal: 16,
    // paddingTop: 16,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 16,
  },
  commentHeaderTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  commentHeaderCount: {
    color: '#fff',
    fontSize: 16,
  },
  date: {
    fontSize: scaleSize(10),
    fontWeight: '400',
    color: '#999999',
    marginTop: scaleSizeHeight(4),
    marginLeft: scaleSizeHeight(7),
  },
  commentRow: {
    flexDirection: 'row',
    marginHorizontal: scaleSizeWidth(20),
    paddingTop: scaleSizeHeight(10),
    overflow: "scroll"
  },
  createdView: {
    flexDirection: "row",
  },
  dots: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(20),
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  commentContent: {
    flex: 1,
  },
  commentContentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: scaleSizeWidth(5),
  },
  commentName: {
    color: '#fff',
    fontSize: scaleFontSize(16),
    fontWeight: '600',
  },
  moreIcon: {
    width: 16,
    height: 16,
    tintColor: '#fff',
  },
  commentText: {
    color: '#fff',
    fontSize: scaleFontSize(16),
    fontWeight: "400",
    lineHeight: scaleSizeHeight(15),
    width: scaleSizeWidth(250),
    marginLeft: scaleSizeWidth(5),
    zIndex: 1000
  },
  nameView: {
    flexDirection: 'row',
  },
  daytext: {
    fontSize: scaleSize(10),
    fontWeight: '400',
    color: '#999999',
    marginTop: scaleSizeHeight(5),
    marginRight: scaleSizeWidth(7),
  },
  commentFooter: {
    flexDirection: 'row',
    marginLeft: scaleSizeWidth(5)
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeIcon: {
    width: 14,
    height: 14,
    tintColor: '#fff',
    marginRight: 4,
  },
  HeartIcons: {
    width: scaleSizeWidth(18),
    height: scaleSizeHeight(15),
    position: "relative",
    right: scaleSizeWidth(18)
  },
  likeCount: {
    color: '#999999',
    fontSize: scaleFontSize(16),
    fontWeight: "400",
  },
  commentInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scaleSizeWidth(15)
  },
  commentInput: {
    flex: 1,
    width: scaleSizeWidth(200),
    height: scaleSizeHeight(40),
    color: '#fff',
    paddingHorizontal: scaleSizeWidth(15),
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 30,
    marginRight: 8,
  },
  sendButton: {
    width: 45,
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    width: scaleSizeWidth(22),
    height: scaleSizeHeight(18)
  },

  //innercomments styles
  innercomment: {
    position: "relative",
    right: scaleSizeWidth(40),
    marginBottom: 20
  },
  innercommentFooter: {},
  innerlikeCount: {
    width: 14,
    height: 14,
    tintColor: '#fff',
    marginRight: 4,
  },
  innercreatedView: {
    flexDirection: "row",
  },
  CreatedView: {
    flexDirection: "row",
    position: "relative",
    left: scaleSizeWidth(65)
  },
  
});
