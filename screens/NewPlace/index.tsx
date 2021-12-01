import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import { primaryColor, RootStackParamList } from "../../constants";
import { useDispatch } from "react-redux";
import { asyncAddPlace } from "../../store/placesSlice";
import ImageSelector from "../../components/ImageSelector";
// import { Container } from './styles';
import LocationSelector from "../../components/LocationSelector";

const NewPlace = (
  props: NativeStackScreenProps<RootStackParamList, "NewPlace">
) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleChange = (text: string) => {
    setTitle(text);
  };

  const handleImage = (img: string) => {
    setImage(img);
  };

  const handleSave = () => {
    dispatch(asyncAddPlace(title, image));
    props.navigation.navigate("PlacesList");
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={title}
          onChangeText={handleChange}
          style={styles.input}
        />
        <ImageSelector onSelectedImage={handleImage} />
        <LocationSelector />
        <Button title="Save place" color={primaryColor} onPress={handleSave} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default NewPlace;
