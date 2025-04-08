import { StyleSheet } from 'react-native';
import {
  getResponsiveValue,
  scaleFontSize,
  scaleSizeHeight,
  scaleSizeWidth,
  spacing,
} from '../../utils/deviceDimensions';
import ColorConstants from '../../constants/ColorConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0E1A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scaleSizeHeight(10),
    marginHorizontal: scaleSizeWidth(10),
  },
  backButton: {
    padding: spacing.small,
  },
  backIcon: {
    width: scaleSizeWidth(17),
    height: scaleSizeHeight(13),
    tintColor: 'white',
  },
  innerIconView: {
    flexDirection: 'row',
  },
  shareIcon: {
    width: scaleSizeWidth(14),
    height: scaleSizeHeight(12),
    tintColor: '#B2BDD0',
  },
  profileImageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  profileName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  editButton: {
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 20,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: scaleSizeHeight(20),
    marginBottom: scaleSizeHeight(20)
  },
  innerStatsContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: scaleSizeWidth(205),
    height: scaleSizeHeight(36)
  },
  secondButton: {
    width: scaleSizeWidth(120),
    height: scaleSizeHeight(28),
    marginTop: scaleSizeHeight(5),
    borderRadius: 8,
    position: 'relative',
    bottom: scaleSizeHeight(6),
    marginRight: scaleSizeWidth(10),
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: scaleSizeWidth(10),
  },
  statNumber: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  statLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 2,
  },
  toggleViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaleSizeWidth(12),
  },
  switchView: {
    flexDirection: 'row',
    marginHorizontal: scaleSizeWidth(10),
  },
  toggleLabel: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(14),
    fontWeight: '700',
    marginHorizontal: scaleSizeWidth(10),
  },
  Label: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    marginHorizontal: scaleSizeWidth(9),
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: scaleSizeWidth(15),
    marginBottom: scaleSizeHeight(10)
  },
  tabButton: {
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  postImage: {
    width: scaleSizeWidth(124),
    height: scaleSizeHeight(100),
    resizeMode: 'cover',
  },
  postContainer: {
    margin: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingVertical: scaleSizeHeight(4),
    paddingHorizontal: scaleSizeWidth(5),
  },

  overlayRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: scaleSizeWidth(12),
    height: scaleSizeHeight(12),
    tintColor: 'white',
  },

  iconText: {
    color: 'white',
    fontSize: scaleFontSize(10),
    marginLeft: scaleSizeWidth(2),
  },

  tabButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  selectedTab: {
    backgroundColor: '#0360D2',
    borderRadius: 5,
  },
  selectedTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  gridList: {
    flex: 1,
  },
  gridListContent: {
    marginTop: scaleSizeHeight(5),
  },
  gridImage: {
    width: '33.333%',
    aspectRatio: 1,
  },
  profileContainer: {
    alignItems: 'center',
    position: 'relative',
    bottom: scaleSizeHeight(10),
  },
  title: {
    fontSize: scaleFontSize(24),
    fontWeight: '400',
    color: '#ffff',
    marginTop: scaleSizeHeight(5),
  },
  profileImageContainer: {
    width: getResponsiveValue(100, 120, 130),
    height: getResponsiveValue(100, 120, 130),
    borderRadius: getResponsiveValue(50, 60, 65),
    backgroundColor: ColorConstants.COLOR_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: getResponsiveValue(50, 60, 65),
  },
  cameraButton: {
    position: 'absolute',
    bottom: 2,
    right: scaleSizeWidth(8),
    backgroundColor: 'white',
    borderRadius: 15,
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    width: scaleSizeWidth(11),
    height: scaleSizeHeight(7),
  },

  /*** MODAL STYLES ***/
  modalContent: {
    position: "absolute",
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

  toggleButton: {
    width: scaleSizeWidth(15),
    height: scaleSizeHeight(12),
    borderRadius: 15,
    backgroundColor: "white",

  },
  toggleContainer: {
    width: scaleSizeWidth(30),
    height: scaleSizeHeight(12),
    borderRadius: 15,
    backgroundColor: "#333",
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleSizeHeight(5),
  },

  nameTickIcon: {
    width: scaleSizeWidth(14),
    height: scaleSizeHeight(14),
    marginLeft: scaleSizeWidth(5),
    resizeMode: 'contain',
    marginTop: scaleSizeHeight(10)
  },
  emptyTabContent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: scaleFontSize(16),
    color: "#888",
  },

});
