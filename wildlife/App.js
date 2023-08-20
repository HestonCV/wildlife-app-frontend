import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home/index.js";
import Images from "./src/screens/Images/index.js";
import ImageDetails from "./src/screens/ImageDetails/index.js";
import Settings from "./src/screens/Settings/index.js";
import Camera from "./src/screens/Camera/index.js";
import Share from "./src/screens/Share/index.js";
import NavBar from "./src/components/NavBar/index.js";
import { PALE_BLUE, GREEN, DARKER_GREY } from "./src/constants/colors.js";

import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ImageDetails" component={ImageDetails} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={() => <NavBar />}
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "600",
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="Images" component={Images} />
        <Tab.Screen name="Share" component={Share} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
