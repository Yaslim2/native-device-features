import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "..";
import * as FileSystem from "expo-file-system";
import { insertPlace, fetchPlaces, test } from "../../helpers/db";

export type PlacesType = {
  id: string;
  title: string;
  image: string;
  address?: string;
  lat?: number;
  lng?: number;
};

type PlacesState = {
  places: PlacesType[];
};

const initialState: PlacesState = {
  places: [],
};

export const asyncSetPlaces = (): AppThunk => {
  return async (dispatch: AppDispatch) => {
    const result: any = await fetchPlaces();
    dispatch(setPlaces(result.rows["_array"]));
  };
};

export const asyncAddPlace = (title: string, image: string): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      const fileName = image.split("/").pop();
      if (FileSystem.documentDirectory) {
        const newPath = !!image && FileSystem.documentDirectory + fileName;

        if (newPath) {
          await FileSystem.moveAsync({
            from: image,
            to: newPath,
          });
        }

        const result = await insertPlace(
          title,
          newPath || image,
          "oieee",
          20,
          20,
          new Date().getTime()
        );
        const id = result.insertId!;
        dispatch(addPlace({ id, title, image: newPath || image }));
      }
    } catch (e: any) {
      console.log(e.message);
      throw new Error(e.message);
    }
  };
};

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    addPlace: (
      state,
      action: PayloadAction<{ id: number; title: string; image: string }>
    ) => {
      state.places.push({
        title: action.payload.title,
        id: action.payload.id.toString(),
        image: action.payload.image,
      });
    },
    setPlaces: (state, action: PayloadAction<PlacesType[]>) => {
      state.places = action.payload;
    },
  },
});

export const { addPlace, setPlaces } = placesSlice.actions;

export default placesSlice.reducer;
