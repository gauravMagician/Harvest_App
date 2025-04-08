

import {StyleSheet, Dimensions} from 'react-native';
import {
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
} from '../../utils/deviceDimensions';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    marginTop: scaleSizeHeight(4),
    alignItems:"center",
    marginLeft:scaleSizeWidth(30)
  },
  tabButton: {
    paddingVertical: scaleSizeHeight(3),
    paddingHorizontal: scaleSizeWidth(12),
    borderRadius: scaleSize(10),
    marginHorizontal:scaleSizeWidth(10)
  },
  activeTab: {
    // borderBottomWidth: 2,
    // borderBottomColor: 'white',
    backgroundColor: '#0360D2CC',
  },
  tabText: {
    color: 'gray',
    fontSize: 16,
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  camera: {
    width: '100%',
    height: height * 0.75,
  },
  preview: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: height * 0.75,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: scaleSizeHeight(10),
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  transparentTab: {
    backgroundColor: 'transparent',
  },
  iconButton: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  recordButton: {
    width: scaleSizeWidth(75),
    height: scaleSizeHeight(60),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // color:"white",
    borderRadius: scaleSize(50),
    // borderWidth:10
  },
  recordCircle: {
    width: scaleSizeWidth(50),
    height: scaleSizeHeight(40),
    borderRadius: 35,
    backgroundColor: 'white',
  },
  recording: {
    backgroundColor: 'darkred',
  },
});

export default styles;
