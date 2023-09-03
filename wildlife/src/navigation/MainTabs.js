import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../navigation/HomeStack";
import Images from "../screens/Images";
import Camera from "../screens/Camera";
import Stats from "../screens/Stats";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Images" component={Images} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MainTabs;
