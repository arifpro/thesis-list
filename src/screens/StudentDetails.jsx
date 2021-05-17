import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    // backgroundColor: '#fff'
    backgroundColor: "rgb(90, 137, 234)",
  },
  info: {
    // backgroundColor: "red",
    height: "30vh",
  },
  item: {
    backgroundColor: "#f5f5f5",
    height: "70vh",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    boxShadow: "0px 5px 20px 0px white",
    boxShadow: "0px 3px 24px 0px white",
  },
});

const StudentDetails = () => {
  return (
    <View style={styles.main}>
      {/* <Text>StudentDetails</Text> */}

      <View style={styles.info}></View>
      <View style={styles.item}></View>
    </View>
  );
};

export default StudentDetails;
