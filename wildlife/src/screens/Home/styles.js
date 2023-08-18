import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { PALE_BLUE, LIGHT_GREY, DARKER_GREY } from "../../constants/colors";
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: LIGHT_GREY,
    height: "100%",
  },
  statusBar: {
    backgroundColor: DARKER_GREY,
  },
  scrollView: {
    width: screenWidth,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    flexDirection: "column",
    backgroundColor: DARKER_GREY,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});

export default styles;
