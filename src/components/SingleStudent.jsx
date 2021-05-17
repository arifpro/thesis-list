import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

// icon
// import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 8,
    borderRadius: 12,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    color: "black",
  },
  btns: {
    flexDirection: "row",
  },
  btn: {
    marginHorizontal: 10,
  },
});

const SingleStudent = ({
  item,
  setIsUpdateOn,
  setTextUpdate,
  handleDoneTodo,
  handleDeleteTodo,
  onChangeText,
}) => (
  <View style={styles.item}>
    <Text
      style={styles.title}
    >
      {item.name}
    </Text>
    <View style={styles.btns}>
      <TouchableOpacity
        style={styles.btn}
        // onPress={() =>
        //   handleDoneTodo && handleDoneTodo({ id, title, isDone: true })
        // }
      >
        <MaterialIcons
          name="done-all"
          size={25}
          color={"#0ec70e"}
        ></MaterialIcons>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        // onPress={() => {
        //   setIsUpdateOn && setIsUpdateOn(true);
        //   onChangeText && onChangeText(title);
        //   setTextUpdate && setTextUpdate({ id, isDone });
        // }}
      >
        {/* <Entypo name="edit" size={25} color={isDone ? "gray" : "blue"}></Entypo> */}
        {/* <Feather name="edit" size={25} color="skyblue"></Feather> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        // onPress={() => handleDeleteTodo && handleDeleteTodo(id)}
      >
        <MaterialIcons
          name="delete"
          size={25}
          // color={isDone ? "gray" : "tomato"}
        ></MaterialIcons>
      </TouchableOpacity>
    </View>
  </View>
);

export default SingleStudent;
