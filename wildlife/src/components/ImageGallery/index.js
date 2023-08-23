import { useState } from "react";
import { View, Image, TouchableOpacity, Button } from "react-native";
import styles from "./styles";
import SERVER_URL from "../../constants/serverURL";

const ImageGallery = ({
  selectionMode,
  selectedImages,
  setSelectedImages,
  images,
  navigation,
}) => {
  const toggleSelection = (image) => {
    const isSelected = selectedImages.includes(image);
    if (isSelected) {
      setSelectedImages(selectedImages.filter((item) => item !== image));
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  };

  const handleImagePress = (image) => {
    if (selectionMode) {
      toggleSelection(image);
    } else {
      navigation.navigate("ImageDetails", { imageId: image.id });
    }
  };

  const deleteImages = () => {
    selectedImages.forEach((selectedImage) => {
      fetch(`${SERVER_URL}/image/${selectedImage.id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            console.log(
              `Image with id: ${selectedImage.id} deleted successfully`
            );
          } else {
            console.log(`Failed to delete Image with id: ${selectedImage.id}`);
          }
        })
        .catch((error) => {
          console.error("Error deleting image:", error);
        });
    });
  };

  return (
    <View style={styles.imagesContainer}>
      {images.map((image) => {
        return (
          <TouchableOpacity
            key={image.id}
            onPress={() => handleImagePress(image)}
          >
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: image.url }}
                style={[
                  styles.image,
                  selectedImages.includes(image) && styles.selectedImage,
                ]}
              />
            </View>
          </TouchableOpacity>
        );
      })}
      {/* <Button title="delete" onPress={() => deleteImages()} /> */}
    </View>
  );
};

export default ImageGallery;
