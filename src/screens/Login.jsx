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
// import AsyncStorage from "@react-native-community/async-storage";

// component
import Loader from "../components/Loader";
import axios from "axios";
import { studentGet } from "../redux/actions/studentActions";
import { login } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "#307ecc",
    backgroundColor: "#fefefe",
    alignContent: "center",
    position: "relative",
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
    backgroundColor: "#00913a",
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
    fontWeight: "bold",
    fontFamily: "LongCang-Regular",
  },
  inputStyle: {
    flex: 1,
    // color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
    fontSize: 18,
    width: '100%',
    fontFamily: "LongCang-Regular",
  },
  registerTextStyle: {
    // color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  React.useEffect(() => {
    dispatch(studentGet());
  }, []);

  React.useEffect(() => {
    setLoading(auth.loading);
  }, [auth]);

  React.useEffect(() => {
    if (auth.authData?.name?.length > 0) {
      navigation.replace("Home");
    }
  }, [auth.authData]);

  React.useEffect(() => {
    if (auth.error.length > 0) {
      setErrorText("Id or password wrong");
    } else {
      setErrorText("");
    }
  }, [auth.error]);

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrorText("");
    if (!userId) {
      alert("Please fill Id");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }

    let dataToSend = { jobId: userId, password: userPassword };

    dispatch(login(dataToSend));
  };

  return (
    <View style={styles.mainBody}>
      <View
        style={{
          justifyContent: "center",
          position: "absolute",
          width: "100%",
          flexDirection: "row",
          display: !loading && "none",
        }}
      >
        <Loader loading={loading} />
      </View>
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
            <View style={{ alignItems: "center", marginBottom: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "rgb(123, 123, 123)",
                  fontFamily: "MaShanZheng-Regular",
                }}
              >
                西南林业大学
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "rgb(123, 123, 123)",
                  fontFamily: "MaShanZheng-Regular",
                }}
              >
                毕业答辩打分系统
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../../icon.png")}
                style={{
                  width: "50%",
                  height: 100,
                  resizeMode: "contain",
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserId) => setUserId(UserId)}
                placeholder="Enter Id"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errorText !== "" ? (
              <Text style={styles.errorTextStyle}>{errorText}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            {/* <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate("Home")}
            >
              New Here ? Register
            </Text> */}
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
