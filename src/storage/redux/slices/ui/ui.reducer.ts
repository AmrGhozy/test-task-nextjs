import { initialState, UiState } from "./ui.initialState";

const reducers = {
  changeDisableState: (state: UiState) => {
    state.disabledAllActions = !state.disabledAllActions;
  },

  resetUi: () => initialState,
};

export default reducers;
