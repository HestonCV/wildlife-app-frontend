import { View, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";

import ImageDisplay from "./src/components/ImageDisplay/index.js";
import NavBar from "./src/components/NavBar/index.js";
import TopBar from "./src/components/TopBar/index.js";
import styles from "./styles.js";

const Home = () => {
  const [images, setImages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = () => {
    return fetch("http://192.168.1.145:5000/images")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  return (
    <View style={styles.homeContainer}>
      <SafeAreaView style={styles.statusBar}></SafeAreaView>
      <TopBar />
      <ScrollView
        alwaysBounceHorizontal={false}
        horizontal={false}
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {images.map((image) => (
          <ImageDisplay key={image.id} {...image} />
        ))}
      </ScrollView>
      <NavBar />
    </View>
  );
};

export default Home;
