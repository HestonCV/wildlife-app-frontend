import {
  Image,
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";

import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

const PALE_BLUE = "#8196A5";
const LIGHT_GREY = "#8D8D8D";
const DARK_GREY = "#626262";
const GREEN = "#969A86";

export default function App() {
  const [images, setImages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = () => {
    return fetch("http://192.168.1.145:5000/images")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImages(data);
      })
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

  const ImageDisplay = (props) => {
    const { classification, date, url, camera } = props;
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

  const NavBar = () => {
    return (
      <View style={styles.navBar}>
        <View style={[styles.navBarItem, { borderLeftWidth: 0 }]}>
          <Ionicons name="home-outline" size={35} color="white" />
        </View>
        <View style={styles.navBarItem}>
          <Ionicons name="images-outline" size={35} color="white" />
        </View>
        <View style={[styles.navBarItem, { borderRightWidth: 0 }]}>
          <Ionicons name="settings-outline" size={35} color="white" />
        </View>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: LIGHT_GREY, height: "100%" }}>
      <SafeAreaView style={styles.statusBar}></SafeAreaView>
      <View style={styles.topBar}>
        <View>
          <Ionicons name="logo-amplify" size={35} color="white" />
        </View>
        <View style={styles.topBarRight}>
          <Ionicons
            name="notifications"
            size={28}
            color="white"
            style={styles.notifications}
          />
          <Ionicons name="person-circle" size={30} color="white" />
        </View>
      </View>
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
}

import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: PALE_BLUE,
  },
  topBar: {
    backgroundColor: DARK_GREY,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    height: 50,
    width: "100%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    marginBottom: 1,
  },
  topBarRight: {
    flexDirection: "row",
  },
  notifications: {
    marginRight: 12,
  },
  scrollView: {
    width: screenWidth,
    paddingLeft: 45,
    paddingRight: 45,
    flex: 1,
    backgroundColor: LIGHT_GREY,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  imageContainer: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    opacity: 1,
    /*     shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 2, */
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    marginTop: 20,
    borderRadius: 10,
    resizeMode: "cover",
    borderWidth: 4,
    borderColor: DARK_GREY,
  },
  imageDescription: {
    marginTop: 10,
    marginBottom: 30,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  navBar: {
    flexDirection: "row",
    height: 75,
    width: "100%",
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: GREEN,
    borderTopWidth: 2,
    borderColor: "white",
  },
  navBarItem: {
    height: "85%",
    flex: 1,
    borderColor: "white",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
