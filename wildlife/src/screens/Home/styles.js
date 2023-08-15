import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { PALE_BLUE, LIGHT_GREY } from "../../constants/colors";
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: LIGHT_GREY,
    height: "100%",
  },
  statusBar: {
    backgroundColor: PALE_BLUE,
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
});

export default styles;
