import React from "react";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// components
import Routes from "./Routes";
import Login from "./screens/Login";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Routes} />
        </Stack.Navigator>

        {/* <Routes /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
