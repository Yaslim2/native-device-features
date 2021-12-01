import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View } from "react-native";
import { RootStackParamList } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
// import { Container } from './styles';

const PlacesList = (
  props: NativeStackScreenProps<RootStackParamList, "PlacesList">
) => {
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
  }, []);
  return <View />;
};

export default PlacesList;
