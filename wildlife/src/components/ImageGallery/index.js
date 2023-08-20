import { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";

const ImageGallery = ({ images, navigation }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectionMode, setSelectionMode] = useState(false);

  const toggleSelection = (image) => {
    <Image source={{ uri: url }} style={styles.image} />;
  };
};
