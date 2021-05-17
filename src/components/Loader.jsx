import React from "react";
import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  activityIndicatorWrapper: {
    backgroundColor: 'rgb(218, 223, 191)',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});

const Loader = (props) => {
//   const { loading, ...attributes } = props;

  return (
    <Modal
      transparent={true}
      animationType={"none"}
    //   visible={loading}
      onRequestClose={() => {
        console.log("close modal");
      }}
      style={{
        borderColor: "transparent",
        // borderRadius: 10,
        // position: "absolute",
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={true}
            color="#000000"
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
