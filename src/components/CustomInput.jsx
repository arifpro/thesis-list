import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
});

const CustomInput = ({
  cnPlaceholder,
  enPlaceholder,
  placeholderTextColor,
  textColor,
  value,
}) => {
  const language = useSelector((state) => state.language);

  return (
    <View style={styles.sectionStyle}>
      <TextInput
        style={{
          flex: 1,
          paddingLeft: 15,
          paddingRight: 15,
          borderWidth: 1,
          borderRadius: 30,
          borderColor: "#dadae8",
          fontSize:
            language.selectedLanguage === language.languages[0] ? 15 : 18,
          fontFamily:
            language.selectedLanguage === language.languages[0]
              ? "MaShanZheng-Regular"
              : "LongCang-Regular",
          width: "100%",
          color: textColor || "black",
        }}
        // onChangeText={(UserId) => setUserId(UserId)}
        value={value}
        placeholder={language.selectedLanguage === language.languages[0] ? cnPlaceholder : enPlaceholder}
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
