import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loading: false,
  message: "",
};

const lemSlice = createSlice({
  name: "Lem",
  initialState: INITIAL_STATE,
  reducers: {
    showLoader: (state, { payload }) => ({
      ...state,
      loading: true,
      message: payload?.message,
    }),

    hideLoader: (state) => ({
      ...state,
      loading: false,
      message: "",
    }),
  },
});

export const { showLoader, hideLoader } = lemSlice.actions;

export const lemSelector = (state) => state?.Lem;

export default lemSlice.reducer;
