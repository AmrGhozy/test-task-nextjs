import { createSlice } from "@reduxjs/toolkit";
import reducers from "./cart.reducer";
import { initialState } from "./cart.initialState";

const uiSlice = createSlice({
  name: "cart",
  initialState,
  reducers,
});

export const {} = uiSlice.actions;
export default uiSlice.reducer;