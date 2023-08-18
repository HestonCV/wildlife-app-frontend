import { StyleSheet } from "react-native";
import { DARKER_GREY, DARK_GREY } from "../../constants/colors";

const styles = StyleSheet.create({
  imageContainer: {
    opacity: 1,
    /*     padding: 10, */
    paddingBottom: 0,
    marginTop: 8,
    backgroundColor: "#1B1B1B",
    borderRadius: 2,
    /*shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 2, */
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderRadius: 2,
    resizeMode: "cover",
    /*     borderWidth: 5,
    borderColor: DARKER_GREY, */
  },
  imageDescription: {
    marginBottom: 7,
    marginTop: 7,
    marginLeft: 7,
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default styles;
