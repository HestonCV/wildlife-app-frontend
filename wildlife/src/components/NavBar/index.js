import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <View style={[styles.navBarItem, { borderLeftWidth: 0 }]}>
        <Ionicons name="home-outline" size={35} color="white" />
      </View>
      <View style={styles.navBarItem}>
        <Ionicons name="images-outline" size={35} color="white" />
      </View>
      <View style={[styles.navBarItem, { borderRightWidth: 0 }]}>
        <Ionicons name="settings-outline" size={35} color="white" />
      </View>
    </View>
  );
};

export default NavBar;
