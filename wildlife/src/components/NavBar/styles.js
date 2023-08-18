import { StyleSheet } from "react-native";

import {
  DARK_GREY,
  DARKER_GREY,
  GREEN,
  LIGHT_GREY,
} from "../../constants/colors";

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    height: 75,
    width: "100%",
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: DARKER_GREY,
    borderTopWidth: 2,
    borderColor: DARK_GREY,
  },
  navBarItem: {
    height: "85%",
    flex: 1,
    borderColor: LIGHT_GREY,
    /*     borderLeftWidth: 1,
    borderRightWidth: 1, */
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
