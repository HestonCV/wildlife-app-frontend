import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home/index.js";
import Images from "./src/screens/Images/index.js";
import Settings from "./src/screens/Settings/index.js";
import NavBar from "./src/components/NavBar/index.js";
import { PALE_BLUE, GREEN, DARKER_GREY } from "./src/constants/colors.js";

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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Images" component={Images} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
