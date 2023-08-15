import { StyleSheet } from "react-native";
import { DARK_GREY } from "../../constants/colors";

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: DARK_GREY,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    height: 50,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "white",
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
});

export default styles;
