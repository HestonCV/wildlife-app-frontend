import { StyleSheet } from "react-native";
import { DARK_GREY } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: "33.33%",
    aspectRatio: 1,
  },
});

export default styles;
