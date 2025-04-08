

import { StyleSheet } from 'react-native';
import { scaleSizeHeight, scaleSizeWidth } from '../../../utils/deviceDimensions';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#01081A',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleSizeHeight(15)
  },
  backIcon: {
    width: scaleSizeWidth(20),
    height: scaleSizeHeight(15),
    tintColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: scaleSizeWidth(30),
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
    paddingVertical: 10,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: scaleSizeWidth(10)
  },
  checkboxText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  },
  checkboxImage: {
    width: 22,
    height: 22,
    // marginRight: 10,
    tintColor: "white"
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  yesButton: {
    backgroundColor: '#2F80ED',
    marginRight: 10,
    width: scaleSizeWidth(100),
    height: scaleSizeHeight(30),
  },
  cancelButton: {
    backgroundColor: '#2F80ED',
    width: scaleSizeWidth(100),
    height: scaleSizeHeight(30),
  },
  cancelButtonText: {
    color: '#2F80ED',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
