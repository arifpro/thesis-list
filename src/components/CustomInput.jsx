import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
});

const CustomInput = ({ placeholder, placeholderTextColor, textColor }) => {
  return (
    <View style={styles.sectionStyle}>
      <TextInput
        // style={{ ...styles.inputStyle, color: (textColor || "black") }}
        style={{
          flex: 1,
          paddingLeft: 15,
          paddingRight: 15,
          borderWidth: 1,
          borderRadius: 30,
          borderColor: "#dadae8",
          fontFamily: "MaShanZheng-Regular",
          color: textColor || "black",
        }}
        // onChangeText={(UserId) => setUserId(UserId)}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || "#8b9cb5"}
        autoCapitalize="none"
        keyboardType="text"
        returnKeyType="next"
        // onSubmitEditing={() =>
        //   passwordInputRef.current && passwordInputRef.current.focus()
        // }
        underlineColorAndroid="#f000"
        blurOnSubmit={false}
      />
    </View>
  );
};

export default CustomInput;
