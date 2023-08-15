import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const NavBar = () => {
  const navigation = useNavigation();

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        onPress={() => navigateTo("Home")}
        style={[styles.navBarItem, { borderLeftWidth: 0 }]}
      >
        <Ionicons name="home-outline" size={35} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateTo("Images")}
        style={styles.navBarItem}
      >
        <Ionicons name="images-outline" size={35} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateTo("Settings")}
        style={[styles.navBarItem, { borderRightWidth: 0 }]}
      >
        <Ionicons name="settings-outline" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
