import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button } from "react-native";
import styles from "./styles";

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const postData = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };

    const response = await fetch("http://192.168.1.140:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      navigation.pop();
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
        />
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
        <Button title="Register" onPress={handleRegister} />
      </View>
    </SafeAreaView>
  );
};

export default Register;
