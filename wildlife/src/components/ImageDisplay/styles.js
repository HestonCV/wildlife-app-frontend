import { StyleSheet } from "react-native";
import { DARKER_GREY } from "../../constants/colors";

const styles = StyleSheet.create({
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
    borderWidth: 5,
    borderColor: DARKER_GREY,
  },
  imageDescription: {
    marginTop: 10,
    marginBottom: 30,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
