import { createSlice } from "@reduxjs/toolkit";
import reducers from "./ui.reducer";
import { initialState } from "./ui.initialState";

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers,
});

export const {} = uiSlice.actions;
export default uiSlice.reducer;