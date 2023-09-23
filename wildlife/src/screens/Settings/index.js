import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import tokenManager from "../../utils/TokenManager";

const Settings = ({ navigation }) => {
  const handleLogout = async () => {
    await tokenManager.removeToken();
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default Settings;
