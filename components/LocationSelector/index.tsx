import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";

import * as Location from "expo-location";
import { primaryColor } from "../../constants";
import {
  LocationCallback,
  LocationGeocodedAddress,
  LocationGeocodingOptions,
  LocationHeadingObject,
  LocationOptions,
  LocationTaskOptions,
} from "expo-location";

// import { Container } from './styles';

const LocationSelector: React.FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [pickedLocation, setPickedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const getLocationHandler = async () => {
    const permissionForeground =
      await Location.requestForegroundPermissionsAsync();
    const permissionBackground =
      await Location.requestBackgroundPermissionsAsync();

    if (permissionForeground.granted && permissionBackground.granted) {
      try {
        setIsFetching(true);
        const location = await Location.getCurrentPositionAsync({
          timeInterval: 5000,
        });
        setIsFetching(false);
        setPickedLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      } catch (e) {
        Alert.alert(
          "Failed to fetch location",
          "Please try again later or pick a location on the map",
          [
            {
              text: "Okay",
            },
          ]
        );
        setIsFetching(false);
      }
    }
  };

  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        {isFetching ? (
          <ActivityIndicator size="large" color={primaryColor} />
        ) : (
          <Text>No location chosen yet!</Text>
        )}
      </View>
      <Button
        title="Get User Location"
        color={primaryColor}
        onPress={getLocationHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LocationSelector;
