import { StyleSheet } from "react-native";
import { DARK_GREY, DARKER_GREY, PALE_BLUE } from "../../constants/colors";

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#1B1B1B",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    height: 50,
    width: "100%",
  },
  topBarRight: {
    flexDirection: "row",
  },
  notifications: {
    marginRight: 12,
  },
});

export default styles;
