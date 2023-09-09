import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import MainTabs from "./src/navigation/MainTabs";
import AuthStack from "./src/navigation/AuthStack";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // TODO: real authentication call to server will go here
  useEffect(() => {
    const fetchTokenAndValidate = async () => {
      try {
        const token = await SecureStore.getItemAsync("user_token");
        if (token) {
          const response = await fetch(
            "http://192.168.1.145:5000/validate_token",
            {
              method: "POST",
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const data = await response.json();
          setIsAuthenticated(data.data.authorized);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTokenAndValidate();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
