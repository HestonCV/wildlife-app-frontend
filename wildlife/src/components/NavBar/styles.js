import { StyleSheet } from "react-native";

import { GREEN } from "../../constants/colors";

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    height: 75,
    width: "100%",
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: GREEN,
    borderTopWidth: 2,
    borderColor: "white",
  },
  navBarItem: {
    height: "85%",
    flex: 1,
    borderColor: "white",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
