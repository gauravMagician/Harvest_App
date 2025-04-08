import React, { forwardRef, useImperativeHandle, useState, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { scaleSizeHeight } from '../utils/deviceDimensions';

export interface ReusableModalRef {
  open: () => void;
  close: () => void;
}

interface ReusableModalProps {
  header?: ReactNode; // Custom header
  content?: ReactNode; // Custom content
  closeButton?: boolean; // Show/hide close button
  modalHeight?: number;
}

const ReusableModal = forwardRef<ReusableModalRef, ReusableModalProps>(
  ({ header, content, closeButton = true, modalHeight }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsVisible(true),
      close: () => setIsVisible(false),
    }));

    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        onSwipeComplete={() => setIsVisible(false)}
        swipeDirection="down"
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        backdropOpacity={0.3} // ⚡ Remove opacity completely
        style={styles.modal}
      >
        <View style={[
          styles.modalContent,
          // If modalHeight is provided, override the default
          { height: modalHeight || "auto" },
        ]}>
          {/* Custom Header */}
          {header && <View style={styles.header}>{header}</View>}

          {/* Custom Content */}
          <View style={styles.contentWrapper}>
            {content}
          </View>
        </View>
      </Modal>
    );
  }
);

export default ReusableModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  contentWrapper: {
    flex: 1,
    // paddingBottom: scaleSizeHeight(10),
  },
  modalContent: {
    // backgroundColor: '#01081AE5',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // alignItems: 'center',
    // height: scaleSizeHeight(250)
    backgroundColor: '#01081AE5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // height: scaleSizeHeight(450), // Increase if needed
    overflow: 'hidden',
  },
  header: {
    paddingBottom: 10,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  closeText: {
    color: 'white',
    fontWeight: 'bold',
  },


});
