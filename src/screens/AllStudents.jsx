import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import SingleStudent from "../components/SingleStudent";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  headerText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: "Comic Sans MS",
    // color: "#f9c2ff",
    color: "#519e9e",
  },
  inputSection: {
    // flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    borderColor: "#519e9e",
    color: "gray",
    fontSize: 12,
    // fontWeight: "bold",
    // fontFamily: "Comic Sans MS",
    borderRadius: 25,
    paddingLeft: 20,
    outline: "none",
  },
  addBtn: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#519e9e",
    backgroundColor: "#519e9e",
    // fontFamily: "Comic Sans MS",
    borderRadius: 25,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
  },
});

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  studentGet,
  studentAdd,
  studentUpdate,
  studentDelete,
} from "../redux/actions/studentActions";

const AllStudents = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const [data, setData] = React.useState(students?.studentsData);
  const [text, onChangeText] = React.useState("");
  const [isUpdateOn, setIsUpdateOn] = React.useState(false);
  const [textUpdate, setTextUpdate] = React.useState({
    id: "",
    isDone: false,
  });


  React.useEffect(() => {
    dispatch(studentGet());
  }, []);

  React.useEffect(() => {
    setData(students?.studentsData);
  }, [students?.studentsData]);

  const handleAddTodo = () => {
    dispatch(studentAdd(text));
    onChangeText("");
  };

  const handleDoneTodo = ({ id, title, isDone }) => {
    dispatch(studentUpdate({ id, title, isDone }));
  };

  const handleUpdateTodo = () => {
    dispatch(studentUpdate({ ...textUpdate, title: text }));
    onChangeText("");
    setIsUpdateOn(false);
  };

  const handleDeleteTodo = (id) => {
    dispatch(studentDelete(id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, marginTop: 20 }}>
        {/* <View style={{ flex: 1, marginTop: 50 }}> */}
        <Text style={styles.headerText}>All Todo List</Text>
        <View style={styles.inputSection}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            // defaultValue={text}
            placeholder="What needs to be done?"
          />
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => (isUpdateOn ? handleUpdateTodo() : handleAddTodo())}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              {isUpdateOn ? "Update" : "Add"}
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <SingleStudent
              item={item}
              setIsUpdateOn={setIsUpdateOn}
              handleDoneTodo={handleDoneTodo}
              handleUpdateTodo={handleUpdateTodo}
              handleDeleteTodo={handleDeleteTodo}
              onChangeText={onChangeText}
              setTextUpdate={setTextUpdate}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllStudents;
