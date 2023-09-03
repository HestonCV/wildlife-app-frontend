import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ImageDetails from "../screens/ImageDetails";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ImageDetails"
        component={ImageDetails}
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
