import { PlacesType } from "../store/placesSlice";

export const primaryColor = "#fc9208";

export type RootStackParamList = {
  PlacesList: undefined;
  PlaceDetail: { item: PlacesType };
  NewPlace: undefined;
  MapScreen: undefined;
};
