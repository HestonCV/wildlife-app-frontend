import { View, Text, Image } from "react-native";
import styles from "./styles";

const ImageDisplay = (props) => {
  const { classification, date, url, camera } = props;
  console.log(url);
  return (
    <>
      <Image source={{ uri: url }} style={styles.image} />
    </>
  );
};

export default ImageDisplay;
