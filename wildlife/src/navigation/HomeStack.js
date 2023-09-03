import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ImageDetails from "../screens/ImageDetails";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ImageDetails" component={ImageDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
