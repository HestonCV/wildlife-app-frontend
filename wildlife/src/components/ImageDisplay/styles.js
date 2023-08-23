import { StyleSheet } from "react-native";
import { DARKER_GREY, DARK_GREY } from "../../constants/colors";

import { Dimensions } from "react-native";

screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    backgroundColor: "white",
  },
  image: {
    width: screenWidth / 2,
    aspectRatio: 4 / 3,
    borderRadius: 2,
    resizeMode: "cover",
    opacity: 0.6,
  },
});

export default styles;
