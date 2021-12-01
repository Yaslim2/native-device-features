import { StatusBar } from "expo-status-bar";
import React from "react";
import PlacesNavigator from "./navigation/PlacesNavigation";
import { Provider } from "react-redux";
import store from "./store";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("Initializing database");
  })
  .catch((e) => console.log(e.message));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
      <StatusBar style="light" />
    </Provider>
  );
}
