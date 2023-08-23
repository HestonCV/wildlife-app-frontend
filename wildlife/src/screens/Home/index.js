import { View, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";

import ImageGallery from "../../components/ImageGallery/index.js";
import SelectButton from "../../components/SelectButton/index.js";
import TopBar from "../../components/TopBar/index.js";
import styles from "./styles.js";
import SERVER_URL from "../../constants/serverURL.js";

const Home = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const fetchData = () => {
    return fetch(`${SERVER_URL}/images`)
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
      <SelectButton
        setSelectedImages={setSelectedImages}
        setSelectionMode={setSelectionMode}
        selectionMode={selectionMode}
      />
      <ScrollView
        alwaysBounceHorizontal={false}
        horizontal={false}
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ImageGallery
          selectionMode={selectionMode}
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
          images={images}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

{
  /*         {images.map((image) => (
          <TouchableOpacity
            key={image.id}
            onPress={() =>
              navigation.navigate("ImageDetails", { imageId: image.id })
            }
          >
            <ImageDisplay {...image} />
          </TouchableOpacity>
        ))} */
}

export default Home;
