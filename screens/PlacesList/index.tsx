import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { RootStackParamList } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import PlaceItem from "../../components/PlaceItem";
import { asyncSetPlaces, PlacesType } from "../../store/placesSlice";
// import { Container } from './styles';

const PlacesList = (
  props: NativeStackScreenProps<RootStackParamList, "PlacesList">
) => {
  const dispatch = useDispatch();
  const places = useSelector((state: RootState) => state.places.places);

  const handleSelect = (item: PlacesType) => {
    props.navigation.navigate("PlaceDetail", { item });
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <Ionicons
            name="ios-add-circle-outline"
            size={26}
            color="#fff"
            onPress={() => props.navigation.navigate("NewPlace")}
          />
        );
      },
    });

    dispatch(asyncSetPlaces());
  }, []);
  return (
    <FlatList
      data={places}
      renderItem={(item) => {
        return (
          <PlaceItem
            item={item.item}
            onSelect={handleSelect.bind(this, item.item)}
          />
        );
      }}
    />
  );
};

export default PlacesList;
