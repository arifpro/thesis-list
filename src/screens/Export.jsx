import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ChakraProvider } from "@chakra-ui/react";
import ArrayToExcelButton from "../components/ArrayToExcelButton";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const Export = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJsonArray = async () => {
    try {
        const response = await fetch("https://jsonfy.com/users");

      let jsonArray = await response.json();
      console.log(jsonArray);
      setUserData(jsonArray);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJsonArray();
  }, []);

  return (
    <ChakraProvider>
      <View style={styles.main}>
        {loading ? (
          <Text>Loading</Text>
        ) : (
          <>
            {/* <Text>Export all data to excel</Text> */}
            <ArrayToExcelButton
              apiArray={userData}
              fileName={"UserData.xls"}
              buttonTitle={"Export Data"}
            />
          </>
        )}
      </View>
    </ChakraProvider>
  );
};

export default Export;
