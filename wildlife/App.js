import {
  Image,
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";

import React, { useState, useEffect } from "react";

export default function App() {
  const [images, setImages] = useState([]);

  const fetchData = () => {
    fetch("http://192.168.1.145:5000/images")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  /*   const ReloadButton = () => {
    return (
      <Button
        title="Reload"
        onPress={() => {
          fetchData();
        }}
      />
    );
  }; */

  const ImageDisplay = (props) => {
    const { classification, date, url, camera } = props;
    console.log(url);
    return (
      <>
        <View style={styles.imageContainer}>
          <Image source={{ uri: url }} style={styles.image} />
        </View>
        <Text style={styles.imageDescription}>
          {date} -- {classification} -- {camera}
        </Text>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}></View>
      <ScrollView
        alwaysBounceHorizontal={false}
        horizontal={false}
        style={styles.scrollView}
      >
        {images.map(({ key, ...rest }) => (
          <ImageDisplay key={key} {...rest} />
        ))}
      </ScrollView>
      {/* <ReloadButton /> */}
    </SafeAreaView>
  );
}

import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8196A5",
    height: "100%",
    alignItems: "center",
  },
  topBar: {
    backgroundColor: "#626262",
    height: 50,
    width: "100%",
  },
  scrollView: {
    width: screenWidth,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: "#8D8D8D",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  imageContainer: {
    marginTop: 20,
    backgroundColor: "#3C3C3C",
    padding: 15,
    borderRadius: "5%",
    width: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    height: 250,
    resizeMode: "contain",
  },
  imageDescription: {
    marginTop: 5,
    marginBottom: 30,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
