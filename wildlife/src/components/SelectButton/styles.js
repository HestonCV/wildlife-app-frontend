import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  selectButtonContainer: {
    position: "absolute",
    top: 105,
    right: 20,
    height: 30,
    width: 70,
    borderRadius: 10,
    backgroundColor: "#1B1B1B",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
    zIndex: 1,
  },
  selectButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});

export default styles;
