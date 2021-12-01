import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import placesSlice from "./placesSlice";

const store = configureStore({
  reducer: {
    places: placesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
