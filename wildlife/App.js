import React from "react";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  // TODO: real authentication call to server will go here
  const isAuthenticated = true;

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
