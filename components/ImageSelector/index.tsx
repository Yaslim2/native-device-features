import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { primaryColor } from "../../constants";
import * as ImagePicker from "expo-image-picker";

// import { Container } from './styles';

const ImageSelector: React.FC<{ onSelectedImage: (img: string) => void }> = (
  props
) => {
  const [image, setImage] = useState<string>("");

  const handleTakeImage = async () => {
    const permissionCamera = await ImagePicker.requestCameraPermissionsAsync();
    const permissionMedia =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionCamera.granted && permissionMedia.granted) {
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });
      if (!image.cancelled) {
        setImage(image.uri);
        props.onSelectedImage(image.uri);
      }
    }
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!image ? (
          <Text style={styles.text}>No image picked yet.</Text>
        ) : (
          <Image source={{ uri: image }} style={styles.image} />
        )}
      </View>
      <Button
        title="Take image"
        color={primaryColor}
        onPress={handleTakeImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageSelector;
