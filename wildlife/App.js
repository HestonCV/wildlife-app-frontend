import React, { useEffect, useState } from "react";
import tokenManager from "./src/utils/TokenManager";
import { NavigationContainer } from "@react-navigation/native";
import MainTabs from "./src/navigation/MainTabs";
import AuthStack from "./src/navigation/AuthStack";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchTokenAndValidate = async () => {
      try {
        setIsAuthenticated(tokenManager.validateToken());
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
