import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import CustomInput from "../components/CustomInput";


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
    boxShadow: "0px 5px 20px 0px white",
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
    marginTop: 20,
    marginBottom: 25,
    fontWeight: "bold",
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
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


const StudentDetails = () => {
    

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Student Details</Text>
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
                <CustomInput placeholder="学生姓名" placeholderTextColor="#fff" textColor="white" />
                <CustomInput placeholder="论文主题" placeholderTextColor="#fff" textColor="white" />
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* <=============== item section ===============> */}
      <View style={styles.item}>
        <View style={styles.container}>
          {/* <Text style={{ color: "#5a89ea", fontFamily: "LongCang-Regular" }}>研究水平与实际能力</Text>
          <Text style={{ color: "#5a89ea", fontFamily: "MaShanZheng-Regular" }}>研究水平与实际能力</Text>
          <Text style={{ color: "#5a89ea", fontFamily: "Pattaya-Regular" }}>研究水平与实际能力</Text>

          <Text style={{ color: "#5a89ea", fontFamily: "LongCang-Regular" }}>Student Details</Text>
          <Text style={{ color: "#5a89ea", fontFamily: "MaShanZheng-Regular" }}>Student Details</Text>
          <Text style={{ color: "#5a89ea", fontFamily: "Pattaya-Regular" }}>Student Details</Text> */}

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
                <CustomInput placeholder="选题质量" />
                <CustomInput placeholder="研究水平与实际能力" />
                <CustomInput placeholder="论文撰写质量" />
                <CustomInput placeholder="学术水平与创新" />
                <CustomInput placeholder="答辩" />

                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  //   onPress={handleSubmitPress}
                >
                  <Text style={styles.buttonTextStyle}>SUBMIT</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default StudentDetails;
