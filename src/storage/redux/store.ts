import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, uiSlice } from "./slices";

export const makeStore = () => {
  return configureStore({
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        serializableCheck: false,
      });
    },
    reducer: {
      ui: uiSlice,
      cart: cartSlice
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
