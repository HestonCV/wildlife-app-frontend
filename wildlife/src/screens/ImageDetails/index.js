import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles.js";

const ImageDetails = ({ route }) => {
  const { imageId } = route.params;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>ImageDetails Page</Text>
      <Text>ImageId: {imageId}</Text>
      <Button title="Back" onPress={() => navigation.pop()} />
    </View>
  );
};

export default ImageDetails;
