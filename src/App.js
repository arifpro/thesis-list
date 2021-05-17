import React from "react";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// icon
import FontAwesome from "react-native-vector-icons/FontAwesome";

// components
import AllStudents from "./screens/AllStudents";
import StudentDetails from "./screens/StudentDetails";
import Export from "./screens/Export";
import Profile from "./screens/Profile";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Students") iconName = "group";
              else if (route.name === "Details") iconName = "vcard";
              else if (route.name === "Export") iconName = "share-square-o";
              else if (route.name === "Profile") iconName = "user-circle";

              // You can return any component that you like here!
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
            labelStyle: {
              fontWeight: "bold",
              marginBottom: 3,
            },
          }}
        >
          <Tab.Screen name="Students" component={AllStudents} />
          <Tab.Screen name="Details" component={StudentDetails} />
          <Tab.Screen name="Export" component={Export} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;