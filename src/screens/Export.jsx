import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ChakraProvider } from "@chakra-ui/react";
import ArrayToExcelButton from "../components/ArrayToExcelButton";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Export = () => {
  const students = useSelector((state) => state.students);
  const language = useSelector((state) => state.language);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  //   const fetchJsonArray = async () => {
  //     try {
  //         const response = await fetch("https://jsonfy.com/users");

  //       let jsonArray = await response.json();
  //       console.log(jsonArray);
  //       setUserData(jsonArray);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error.message);
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchJsonArray();
  //   }, []);

  useEffect(() => {
    const exportedData = students.studentsData?.map((student) => {
      const {
        studentId,
        name,
        选题质量,
        研究水平与实际能力,
        论文撰写质量,
        学术水平与创新,
        答辩,
        instructorId,
        instructorName,
        judgeName,
        scoreUpdatedBy,
      } = student;
      return {
        studentId,
        name,
        选题质量,
        研究水平与实际能力,
        论文撰写质量,
        学术水平与创新,
        答辩,
        instructorId,
        instructorName,
        judgeName,
        scoreUpdatedBy,
      };
    });

    setUserData(exportedData);
  }, [students]);

  return (
    <ChakraProvider>
      <View style={styles.main}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <ArrayToExcelButton
              apiArray={userData}
              fileName={"ThesisResult.xls"}
              buttonTitle={language.selectedLanguage === language.languages[0] ? "汇出资料" : "Export Data"}
            />
          </>
        )}
      </View>
    </ChakraProvider>
  );
};

export default Export;
