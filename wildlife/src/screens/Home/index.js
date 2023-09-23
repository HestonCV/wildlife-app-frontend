import React, { useEffect, useState } from "react";
import { SafeAreaView, Button, Text, Image } from "react-native";
import styles from "./styles";
import tokenManager from "../../utils/TokenManager";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const [imageDetails, setImageDetails] = useState([]);
  const [imageBlobs, setImageBlobs] = useState([]);

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
      const imageData = data.data.image_data;
      setImageDetails(imageData);

      const blobs = await Promise.all(
        imageData.map(async (image) => {
          const response = await fetch(
            `http://192.168.1.140:5000/images/${image.id}/thumbnail`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const blob = await response.blob();
          return URL.createObjectURL(blob);
        })
      );
      setImageBlobs(blobs);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Text onPress={goToImageDetails}>Image Details</Text>
      <ScrollView>
        {imageBlobs.map((blob, index) => {
          return (
            <Image
              key={index}
              source={{ uri: blob }}
              style={{ width: 200, height: 200 }}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
