import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import PlacesList from "../../screens/PlacesList";
import PlaceDetail from "../../screens/PlaceDetail";
import NewPlace from "../../screens/NewPlace";
import MapScreen from "../../screens/MapScreen";
import { primaryColor } from "../../constants";

const PlacesStack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <NavigationContainer>
      <PlacesStack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: primaryColor },
          headerTintColor: "#fff",
          animation: "fade_from_bottom",
        }}
      >
        <PlacesStack.Screen
          name="PlacesList"
          component={PlacesList}
          options={{ title: "Places" }}
        />
        <PlacesStack.Screen name="PlaceDetail" component={PlaceDetail} />
        <PlacesStack.Screen
          name="NewPlace"
          component={NewPlace}
          options={{ title: "Add place" }}
        />
        <PlacesStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ title: "Map" }}
        />
      </PlacesStack.Navigator>
    </NavigationContainer>
  );
};

export default PlacesNavigator;
