import React from "react";
import { View, Modal, ActivityIndicator, StyleSheet } from "react-native";
import ColorConstants from "../constants/ColorConstants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
type Props = {
  isLoading?: boolean;
};

const Loader: React.FC<Props> = ({ isLoading }) => {
  // const {isLoading} = useSelector((state: RootState) => state.appData);

  if (isLoading)
    return (
      <Modal transparent={true} animationType={"none"} visible={true}>
        <View style={[styles.container]}>
          <ActivityIndicator
            size={"large"}
            color={ColorConstants.APP_TEXT_BLUE_COLOR}
          />
        </View>
      </Modal>
    );
  return null;
};

export default Loader;
