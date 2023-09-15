import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View, Button } from "react-native";
import styles from "./styles";
import tokenManager from "../../utils/TokenManager";

const Camera = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cameraToken, setCameraToken] = useState("");

  const handleSubmit = async () => {
    const postData = {
      name: name,
      description: description,
      token: cameraToken,
    };
    const response = await fetch("http://192.168.1.140:5000/cameras", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await tokenManager.getToken()}`,
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    console.log(JSON.stringify(data));
  };

  return (
    <SafeAreaView>
      <View styles={styles.container}>
        <Text>Camera</Text>
        <TextInput
          placeholder="Camera Name"
          onChangeText={(text) => setName(text)}
          value={name}
          style={styles.input}
        />
        <TextInput
          placeholder="Camera Description"
          onChangeText={(text) => setDescription(text)}
          value={description}
          style={styles.input}
        />
        <TextInput
          placeholder="Camera Pair Token"
          onChangeText={(text) => setCameraToken(text)}
          value={cameraToken}
          style={styles.input}
        />
        <Button title="Pair" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default Camera;
