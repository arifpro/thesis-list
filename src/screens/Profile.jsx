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
import CustomDropdown from "../components/CustomDropdown";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/actions/languageActions";
import CustomInput from "../components/CustomInput";

const styles = StyleSheet.create({
  main: {
    // backgroundColor: '#fff'
    backgroundColor: "#5a89ea",
  },
  info: {
    height: "30vh",
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
    marginTop: 20,
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

const styles2 = {
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
};

const Profile = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const data = [[language.languages[0], language.languages[1]]];

  return (
    // <View style={{ marginTop: 150 }}>

    // </View>
    <View style={styles.main}>
      <View style={styles.info}>
        <View style={styles.container}>
          <Text style={styles2.title}>
            {language.selectedLanguage === language.languages[0]
              ? "选择语言"
              : "Select Language"}
          </Text>

          <View style={{ marginVertical: 20, paddingHorizontal: 120 }}>
            <CustomDropdown
            selectedLanguageIndex={language.selectedLanguage === language.languages[0] ? 0 : 1}
              style={{ borderRadius: 35, backgroundColor: "black !important" }}
              bgColor={"white"}
              tintColor={"#666666"}
              activityTintColor={"green"}
              // arrowImg={}
              // checkImage={}
              optionTextStyle={{
                color: "#333333",
                paddingVertical: 10,
              }}
              // titleStyle={{color: '#333333'}}
              //   maxHeight={300}
              handler={(selection, row) =>
                dispatch(changeLanguage(data[selection][row]))
              }
              data={data}
            />
          </View>
        </View>
      </View>

      {/* <=============== password section ===============> */}
      <View style={styles.item}>
        <View style={styles.container}>
          <Text style={{ ...styles2.title, color: "#5a89ea" }}>
            {language.selectedLanguage === language.languages[0]
              ? "更改密码"
              : "Change your password"}
          </Text>

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
                  cnPlaceholder="旧密码"
                  enPlaceholder="Old Password"
                />
                <CustomInput
                  cnPlaceholder="新密码"
                  enPlaceholder="New Password"
                />
                <CustomInput
                  cnPlaceholder="确认新密码"
                  enPlaceholder="Confirm New Password"
                />

                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  //   onPress={handleSubmitPress}
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
    </View>
  );
};

export default Profile;
