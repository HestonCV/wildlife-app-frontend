import React from "react";
import { SafeAreaView, Button, Text } from "react-native";
import styles from "./styles";

const Home = ({ navigation }) => {
  const goToImageDetails = () => {
    navigation.navigate("ImageDetails");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Text onPress={goToImageDetails}>Image Details</Text>
    </SafeAreaView>
  );
};

export default Home;
