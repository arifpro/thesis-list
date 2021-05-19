import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  // Modal,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
} from "react-native";
import {
  ChakraProvider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../components/CustomInput";
import { studentUpdate } from "../redux/actions/studentActions";

const styles = StyleSheet.create({
  main: {
    // backgroundColor: '#fff'
    backgroundColor: "#5a89ea",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    // fontFamily: "LongCang-Regular",
    // fontFamily: "MaShanZheng-Regular",
    fontFamily: "Pattaya-Regular",
  },
  info: {
    height: "20vh",
    color: "#f5f5f5",
  },
  item: {
    backgroundColor: "#f5f5f5",
    height: "70vh",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    // boxShadow: "0px 5px 20px 0px white",
    boxShadow: "0px 3px 24px 0px white",
    padding: 30,
  },
  container: {
    // padding: 30,
  },

  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    // backgroundColor: "#7DE24E",
    // backgroundColor: "#00913a",
    backgroundColor: "#5a89ea",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30,
    marginBottom: 25,
    fontWeight: "bold",
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 20,
    // fontFamily: "LongCang-Regular",
    fontFamily: "MaShanZheng-Regular",
    // fontFamily: "Pattaya-Regular",
  },
  inputStyle: {
    flex: 1,
    // color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
});

const StudentDetails = ({ route }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const language = useSelector((state) => state.language);
  const initialSelectedStudent = {
    课题名称: "",
    学年: "",
    email: "",
    phone: "",
    college: "",
    profession: "",
    year: "",
    instructorId: "",
    instructorName: "",
    judgeName: "",
    judgeTitle: "",
    defenseGroup: "",
    选题质量: "",
    研究水平与实际能力: "",
    论文撰写质量: "",
    学术水平与创新: "",
    答辩: "",
    studentId: "",
    name: "",
    _id: "",
    scoreUpdatedBy: "",
  };
  const [selectedStudent, setSelectedStudent] = React.useState({
    ...initialSelectedStudent,
  });
  const [modalVisible, setModalVisible] = React.useState(false);
  // const [isUpdateOn, setIsUpdateOn] = React.useState(false);
  // const [textUpdate, setTextUpdate] = React.useState({
  //   id: "",
  //   isDone: false,
  // });

  React.useEffect(() => {
    setSelectedStudent(route?.params?.item);
  }, [route?.params?.item]);

  const handleChangeScore = () => {
    // console.log(selectedStudent);
    dispatch(
      studentUpdate({ ...selectedStudent, scoreUpdatedBy: auth.authData.name })
    );

    setSelectedStudent(initialSelectedStudent);
    setModalVisible(true);
    // alert("Submit Success");
  };

  const handleChange = (name, value) => {
    setSelectedStudent({ ...selectedStudent, [name]: value });
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>
        {language.selectedLanguage === language.languages[0]
          ? "学生资料"
          : "Student Details"}
      </Text>
      <View style={styles.info}>
        <View style={styles.container}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <View>
              <KeyboardAvoidingView enabled>
                <CustomInput
                  cnPlaceholder="学生姓名"
                  enPlaceholder="Student name"
                  placeholderTextColor="#fff"
                  textColor="white"
                  value={selectedStudent?.name}
                  onChange={(value) => handleChange("name", value)}
                />
                <CustomInput
                  cnPlaceholder="论文主题"
                  enPlaceholder="Thesis topic"
                  placeholderTextColor="#fff"
                  textColor="white"
                  value={selectedStudent?.课题名称}
                  onChange={(value) => handleChange("课题名称", value)}
                />
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* <=============== item section ===============> */}
      <View style={styles.item}>
        <View style={styles.container}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <View>
              <KeyboardAvoidingView enabled>
                <CustomInput
                  label
                  cnPlaceholder="选题质量"
                  enPlaceholder="Topic quality"
                  value={
                    selectedStudent?.选题质量.length > 0
                      ? selectedStudent?.选题质量
                      : ""
                  }
                  onChange={(value) => handleChange("选题质量", value)}
                />
                <CustomInput
                  label
                  cnPlaceholder="研究水平与实际能力"
                  enPlaceholder="Research level and practical ability"
                  value={
                    selectedStudent?.研究水平与实际能力.length > 0
                      ? selectedStudent?.研究水平与实际能力
                      : ""
                  }
                  onChange={(value) =>
                    handleChange("研究水平与实际能力", value)
                  }
                />
                <CustomInput
                  label
                  cnPlaceholder="论文撰写质量"
                  enPlaceholder="Paper writing quality"
                  value={
                    selectedStudent?.论文撰写质量.length > 0
                      ? selectedStudent?.论文撰写质量
                      : ""
                  }
                  onChange={(value) => handleChange("论文撰写质量", value)}
                />
                <CustomInput
                  label
                  cnPlaceholder="学术水平与创新"
                  enPlaceholder="Academic level and innovation"
                  value={
                    selectedStudent?.学术水平与创新.length > 0
                      ? selectedStudent?.学术水平与创新
                      : ""
                  }
                  onChange={(value) => handleChange("学术水平与创新", value)}
                />
                <CustomInput
                  label
                  cnPlaceholder="答辩"
                  enPlaceholder="Reply"
                  value={
                    selectedStudent?.答辩.length > 0
                      ? selectedStudent?.答辩
                      : ""
                  }
                  onChange={(value) => handleChange("答辩", value)}
                />

                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={handleChangeScore}
                >
                  <Text style={styles.buttonTextStyle}>
                    {language.selectedLanguage === language.languages[0]
                      ? "提交"
                      : "Submit"}
                  </Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Notification Modal */}
      {modalVisible && (
        <ChakraProvider>
          <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader style={{ color: "green" }}>
                Submit success
              </ModalHeader>
              {/* <ModalCloseButton /> */}
              <ModalFooter>
                <Button
                  colorScheme="teal"
                  onClick={() => setModalVisible(false)}
                >
                  OK
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </ChakraProvider>
      )}
    </View>
  );
};

export default StudentDetails;
