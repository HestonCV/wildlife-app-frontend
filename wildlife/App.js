import {
  Image,
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import React, { useState, useEffect } from "react";

export default function App() {
  const [imageURL, setImageURL] = useState(null);
  const [reload, setReload] = useState(false);

  const fetchData = () => {
    fetch("http://192.168.1.145:5000/image")
      .then((response) => {
        setImageURL(response.url);
      })
      .catch((error) => console.error(error));
    console.log("test");
  };

  useEffect(() => {
    fetchData();
  }, [reload]);

  return (
    <SafeAreaView style={styles.container}>
      {imageURL && <Image source={{ uri: imageURL }} style={styles.image} />}
      {/*       <Button
        title="Reload"
        onPress={() => {
          fetchData();
          setReload(!reload);
        }}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#97B9C8",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  topView: {
    height: "30%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginText: {
    fontSize: 20,
  },
  buttonContainer: {
    paddingTop: 50,
  },
  loginButton: {},
  image: {
    width: 400,
    height: 400,
  },
});
