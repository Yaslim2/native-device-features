import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import PlacesNavigator from "./navigation/PlacesNavigation";

export default function App() {
  return (
    <>
      <PlacesNavigator />
      <StatusBar style="light" />
    </>
  );
}
