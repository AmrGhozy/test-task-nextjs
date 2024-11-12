export interface UiState {
  them: "light" | "dark";
  disabledAllActions: boolean;
}

export const initialState: UiState = {
  them: "light",
  disabledAllActions: true,
};
