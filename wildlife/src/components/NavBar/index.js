import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { DARK_GREY, LIGHT_GREY } from "../../constants/colors";

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
        <Ionicons name="home-outline" size={30} color={LIGHT_GREY} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateTo("Camera")}
        style={styles.navBarItem}
      >
        <Ionicons name="camera-outline" size={30} color={LIGHT_GREY} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateTo("Images")}
        style={styles.navBarItem}
      >
        <Ionicons name="images-outline" size={34} color={LIGHT_GREY} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateTo("Share")}
        style={styles.navBarItem}
      >
        <Ionicons name="share-outline" size={30} color={LIGHT_GREY} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateTo("Settings")}
        style={[styles.navBarItem, { borderRightWidth: 0 }]}
      >
        <Ionicons name="settings-outline" size={28} color={LIGHT_GREY} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
