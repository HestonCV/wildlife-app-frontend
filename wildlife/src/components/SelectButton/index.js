import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const SelectButton = ({
  setSelectedImages,
  selectionMode,
  setSelectionMode,
}) => {
  const handlePress = () => {
    setSelectionMode(!selectionMode);
    setSelectedImages([]);
  };

  return (
    <View style={styles.selectButtonContainer}>
      {!selectionMode && (
        <TouchableOpacity
          onPress={() => handlePress()}
          style={styles.selectButton}
        >
          <Text style={styles.text}>Select</Text>
        </TouchableOpacity>
      )}
      {selectionMode && (
        <TouchableOpacity
          onPress={() => handlePress()}
          style={styles.selectButton}
        >
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SelectButton;
