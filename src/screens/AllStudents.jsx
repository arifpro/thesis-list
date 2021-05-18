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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  headerText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Pattaya-Regular",
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
  tableSection: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 8,
    borderRadius: 12,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    boxShadow: "0px 5px 8px lightgray",
  },
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
});

const styles2 = {
  tableHead: {
    fontSize: 20,
    // fontWeight: "bold",
    // fontFamily: "LongCang-Regular",
    // fontFamily: "MaShanZheng-Regular",
    // fontFamily: "Pattaya-Regular",
    color: "black",
    textAlign: "center",
  },
  title: {
    fontSize: 16,
    color: "rgb(125, 125, 125)",
    fontFamily: "LongCang-Regular",
    textAlign: "center",
  },
};

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  studentGet,
  studentAdd,
  studentUpdate,
  studentDelete,
} from "../redux/actions/studentActions";

const AllStudents = ({ navigation }) => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const language = useSelector((state) => state.language);
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
        <Text style={styles.headerText}>
          {language.selectedLanguage === language.languages[0]
            ? "全体学生"
            : "All Students"}
        </Text>
        <View style={styles.inputSection}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            // defaultValue={text}
            placeholder={
              language.selectedLanguage === language.languages[0]
                ? "新增学生"
                : "Add new student..."
            }
          />
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => (isUpdateOn ? handleUpdateTodo() : handleAddTodo())}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              {isUpdateOn
                ? language.selectedLanguage === language.languages[0]
                  ? "更新"
                  : "Update"
                : language.selectedLanguage === language.languages[0]
                ? "新增"
                : "Add"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* table head */}
        <View style={styles.tableSection}>
          <CustomText width="15%" cnName="#" enName="#" language={language} />
          <CustomText
            width="35%"
            cnName="学号"
            enName="ID"
            language={language}
          />
          <CustomText
            width="50%"
            cnName="姓名"
            enName="Name"
            language={language}
          />
          <CustomText
            width="50%"
            cnName="指导"
            enName="Instructor"
            language={language}
          />
          <CustomText
            width="50%"
            cnName="评"
            enName="Judge"
            language={language}
          />
        </View>

        {/* table body */}
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Details", { item })}
            >
              <Text style={{ ...styles2.title, width: "15%" }}>
                {index + 1}
              </Text>
              <Text style={{ ...styles2.title, width: "35%" }}>
                {item.studentId}
              </Text>
              <Text style={{ ...styles2.title, width: "50%" }}>
                {item.name}
              </Text>
              <Text style={{ ...styles2.title, width: "50%" }}>
                {item.instructorName}
              </Text>
              <Text style={{ ...styles2.title, width: "50%" }}>
                {item.judgeName}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    </SafeAreaView>
  );
};

const CustomText = ({ width, cnName, enName, language }) => (
  <Text
    style={{
      ...styles2.tableHead,
      width: width,
      fontFamily:
        language.selectedLanguage === language.languages[0]
          ? "MaShanZheng-Regular"
          : "LongCang-Regular",
    }}
  >
    {language.selectedLanguage === language.languages[0] ? cnName : enName}
  </Text>
);

export default AllStudents;
