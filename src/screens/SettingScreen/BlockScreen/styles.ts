import {StyleSheet} from 'react-native';
import { fontSizes, scaleSize, scaleSizeHeight, scaleSizeWidth } from '../../../utils/deviceDimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F1D',
    paddingHorizontal: 20,
  },
 header: {
    fontSize: fontSizes.extraLarge,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flexDirection: 'row',
    marginVertical: scaleSizeHeight(15),
  },
  backIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(24),
    resizeMode: 'contain',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft:scaleSizeWidth(20)
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  profileImage: {
    width: scaleSizeWidth(40),
    height: scaleSizeHeight(30),
    borderRadius: 50,
  },
  username: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
    marginLeft: 15,
  },
  button: {
    borderRadius: scaleSize(5),
    paddingVertical: scaleSizeHeight(5),
    paddingHorizontal: scaleSizeWidth(13),
  },
  blockedButton: {
    backgroundColor: '#1D4ED8',
  },
  unblockButton: {
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
