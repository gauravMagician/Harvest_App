import { StyleSheet } from 'react-native';
import { scaleFontSize, scaleSizeHeight, scaleSizeWidth } from '../../../utils/deviceDimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000920',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scaleSizeHeight(2)
  },
  backIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(20),
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: scaleFontSize(20),
    fontWeight: '600',
    color: 'white',
    marginLeft: scaleSizeWidth(25),
  },
  optionContainer: {
    backgroundColor: '#0D1321',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    marginTop: scaleSizeHeight(10),
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: scaleSizeWidth(300),
    // marginLeft:scaleSizeWidth(50)
    gap: 1,
    // marginTop: 10,
  },
  iconImage: {
    width: scaleSizeWidth(70),
    height: scaleSizeHeight(30),
    resizeMode: 'contain',
  },
  walletText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
    position: "relative",
    right: scaleSizeWidth(65)
    // marginLeft:scaleSizeWidth(40)
  },
  proceedButton: {
    backgroundColor: '#1A73E8',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: scaleSizeHeight(270)
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3070E8',
    backgroundColor: '#1A73E8',
    marginTop: 3,
  },
  radioUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3070E8',
    backgroundColor: 'transparent',
    marginTop: 3,
  },
  radioView: {
    flexDirection: 'row',
    marginRight: scaleSizeWidth(70),
  },
  radio: {
    flexDirection: 'row',
    marginRight: scaleSizeWidth(180)
  },
});

export default styles;
