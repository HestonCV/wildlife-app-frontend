import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <View>
        <Ionicons name="logo-amplify" size={35} color="white" />
      </View>
      <View style={styles.topBarRight}>
        <Ionicons
          name="notifications"
          size={28}
          color="white"
          style={styles.notifications}
        />
        <Ionicons name="person-circle" size={30} color="white" />
      </View>
    </View>
  );
};

export default TopBar;
