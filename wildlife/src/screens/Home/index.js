import React, { useEffect, useState } from "react";
import { SafeAreaView, Button, Text } from "react-native";
import styles from "./styles";
import tokenManager from "../../utils/TokenManager";

const Home = ({ navigation }) => {
  const [imageDetails, setImageDetails] = useState("");

  const goToImageDetails = () => {
    navigation.navigate("ImageDetails");
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = await tokenManager.getToken();
      const response = await fetch("http://192.168.1.140:5000/images/data", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      return JSON.stringify(data);
    };
    fetchData().then((dataAsString) => {
      setImageDetails(dataAsString);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Text onPress={goToImageDetails}>Image Details</Text>
      <Text>{imageDetails}</Text>
    </SafeAreaView>
  );
};

export default Home;
