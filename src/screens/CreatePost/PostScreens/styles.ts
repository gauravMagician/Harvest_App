import { StyleSheet } from 'react-native';
import { scaleSize, scaleSizeHeight } from '../../../utils/deviceDimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001033',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scaleSize(16),
  },
  backIcon: {
    width: scaleSize(18),
    height: scaleSize(18),
    tintColor: '#fff',
  },
  selectText: {
    fontSize: scaleSize(11),
    color: '#fff',
    fontWeight: '600',
  },
  checkIcon: {
    width: scaleSize(20),
    height: scaleSize(20),
    tintColor: '#fff',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderWidth: 2,
    borderColor: '#00f',
    borderRadius: 8,
  },
  grid: {
    paddingHorizontal: scaleSize(1),
  },
  mediaItem: {
    width: '33.3%',
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: '#1e1e1e',
  },
  mediaImage: {
    width: '100%',
    height: '100%',
  },
  videoIcon: {
    position: 'absolute',
    right: scaleSize(5),
    top: scaleSize(5),
    width: scaleSize(20),
    height: scaleSize(20),
  },
  moreView: {
    backgroundColor: "#0F4BBD",
    width: scaleSizeHeight(55),
    height: scaleSizeHeight(20),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: '#00f',
  },
  selectedOverlay: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 12,
    padding: 2,
  },

  checkmark: {
    width: 20,
    height: 20,
  },
  selectedMediaList: {
    paddingVertical: scaleSize(10),
    paddingHorizontal: scaleSize(8),
},

selectedMediaItem: {
    marginRight: scaleSize(10),
    position: 'relative',
},

selectedMediaImage: {
    width: scaleSize(80),
    height: scaleSize(80),
    borderRadius: scaleSize(10),
},

selectedVideoIcon: {
    position: 'absolute',
    bottom: scaleSize(5),
    right: scaleSize(5),
    width: scaleSize(16),
    height: scaleSize(16),
    tintColor: 'white',
},

});
