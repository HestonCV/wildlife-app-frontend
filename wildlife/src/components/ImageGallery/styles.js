import { StyleSheet } from "react-native";
import { DARKER_GREY, DARK_GREY } from "../../constants/colors";

import { Dimensions } from "react-native";

screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: {
    position: "relative",
    backgroundColor: "white",
  },
  image: {
    width: screenWidth / 2,
    aspectRatio: 4 / 3,
    resizeMode: "cover",
  },
  selectedImage: {
    opacity: 0.6,
  },
});

export default styles;
