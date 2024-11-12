import { initialState, UiState } from "./ui.initialState";

const reducers = {
  changeThem: (state: UiState) => {
    state.them = state.them === "light" ? "dark" : "light";
  },
  changeDisableState: (state: UiState) => {
    state.disabledAllActions = !state.disabledAllActions;
  },

  resetUi: () => initialState,
};

export default reducers;
