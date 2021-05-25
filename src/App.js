import React from "react";
import { useFonts } from "expo-font";

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
  const [loaded] = useFonts({
    "LongCang-Regular": require("../assets/fonts/LongCang-Regular.ttf"),
    "MaShanZheng-Regular": require("../assets/fonts/MaShanZheng-Regular.ttf"),
    "Pattaya-Regular": require("../assets/fonts/Pattaya-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Routes} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
