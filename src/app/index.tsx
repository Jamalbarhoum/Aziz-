
// import React from "react";
import App from "./App"
// rgb(160,215,235)
import { CartProvider } from "./CartProvider"; 
import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "./LoginAndReg/core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  HomeScreen,
} from "./LoginAndReg/screens";

const Stack = createStackNavigator();

const index = () => {
  return (
      <>
    <CartProvider>
      <Provider theme={theme}>
     
          <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
            />
          </Stack.Navigator>

      </Provider>
    </CartProvider>
      {/* <CartProvider>
        <App/>
        </CartProvider> */}
      </>
  );
};

export default index;
