import React, { useState } from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import tokenManager from "../../utils/TokenManager";
import styles from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("button pressed");
    const postData = { email, password };

    const response = await fetch("http://192.168.1.140:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      // TODO: handle error
    }

    const data = await response.json();
    const token = await data.data.access_token;
    await tokenManager.storeToken(token);
    navigation.replace("Main");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button title="Submit" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
