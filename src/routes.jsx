import React from "react";

// navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// icon
import FontAwesome from "react-native-vector-icons/FontAwesome";

// components
import AllStudents from "./screens/AllStudents";
import StudentDetails from "./screens/StudentDetails";
import Export from "./screens/Export";
import Profile from "./screens/Profile";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const Routes = () => {
  const language = useSelector((state) => state.language);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Students" || route.name === "学生们")
            iconName = "group";
          else if (route.name === "Details" || route.name === "细节")
            iconName = "vcard";
          else if (route.name === "Export" || route.name === "出口")
            iconName = "share-square-o";
          else if (route.name === "Profile" || route.name === "轮廓")
            iconName = "user-circle";

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        labelStyle: {
          fontWeight: "bold",
          marginVertical: 4,
        },
        style: {
          // backgroundColor: "green",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          boxShadow: "0px 5px 20px gray",
        },
        tabStyle: {
          paddingTop: 10,
          borderTopColor: "#d8d8d8",
        },
      }}
      // initialRouteName="Profile"
    >
      <Tab.Screen
        name={
          language.selectedLanguage === language.languages[0]
            ? "学生们"
            : "Students"
        }
        component={AllStudents}
      />
      <Tab.Screen
        name={
          language.selectedLanguage === language.languages[0]
            ? "细节"
            : "Details"
        }
        component={StudentDetails}
      />
      <Tab.Screen
        name={
          language.selectedLanguage === language.languages[0]
            ? "出口"
            : "Export"
        }
        component={Export}
      />
      <Tab.Screen
        name={
          language.selectedLanguage === language.languages[0]
            ? "轮廓"
            : "Profile"
        }
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Routes;
