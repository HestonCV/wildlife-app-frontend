import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../navigation/HomeStack";
import Images from "../screens/Images";
import Camera from "../screens/Camera";
import Stats from "../screens/Stats";
import Settings from "../screens/Settings";
import { Ionicons } from "@expo/vector-icons";
import { DARKER_GREY, LIGHT_GREY } from "../constants/colors";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerStyle: {
          backgroundColor: DARKER_GREY,
        },
        headerTitleStyle: {
          color: "white",
        },
        tabBarInactiveTintColor: LIGHT_GREY,
        tabBarStyle: {
          backgroundColor: DARKER_GREY,
          borderTopWidth: 1,
          borderTopColor: LIGHT_GREY,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Images"
        component={Images}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
