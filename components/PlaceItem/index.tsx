import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { primaryColor } from "../../constants";
import { PlacesType } from "../../store/placesSlice";
// import { Container } from './styles';

const PlaceItem: React.FC<{
  onSelect: (id: string) => void;
  item: PlacesType;
}> = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onSelect.bind(this, props.item.id)}
      style={styles.placeItem}
    >
      <Image style={styles.image} source={{ uri: props.item.image || " " }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.address}>{props.item.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ccc",
    borderColor: primaryColor,
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "black",
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    color: "#666",
    fontSize: 16,
  },
});

export default PlaceItem;
