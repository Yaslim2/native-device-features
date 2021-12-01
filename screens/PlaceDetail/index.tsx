import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View } from "react-native";
import { RootStackParamList } from "../../constants";

// import { Container } from './styles';

const PlaceDetail = (
  props: NativeStackScreenProps<RootStackParamList, "PlaceDetail">
) => {
  useEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.item.title,
    });
  }, []);

  return <View />;
};

export default PlaceDetail;
