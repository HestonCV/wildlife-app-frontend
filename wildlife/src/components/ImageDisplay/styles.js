import { StyleSheet } from "react-native";
import { DARKER_GREY, DARK_GREY } from "../../constants/colors";

import { Dimensions } from "react-native";

screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  image: {
    width: screenWidth / 2,
    aspectRatio: 4 / 3,
    borderRadius: 2,
    resizeMode: "cover",
  },
});

export default styles;
