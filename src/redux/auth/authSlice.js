        import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../services/token";
import { forgotUserAction , loginUserByEmailAction, logoutUserAction, signUpUserAction , resetUserAction} from "./middleware";

const INITIAL_STATE = {
  currentUser: undefined || getUser(),
};

const authSlice = createSlice({
  name: "Auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUserByEmailAction.fulfilled, (state, { payload }) => ({
      ...state,
      currentUser: payload,
    }));
    builder.addCase(logoutUserAction.fulfilled, (state, { payload }) => ({
      ...state,
      currentUser: null,
    }));
    builder.addCase(signUpUserAction.fulfilled, (state, { payload }) => ({
      ...state,
      currentUser: payload,
    }));
    builder.addCase(forgotUserAction.fulfilled, (state, { payload }) => ({
      ...state,
      currentUser: payload,
    }));
    builder.addCase(resetUserAction.fulfilled, (state, { payload }) => ({
      ...state,
      currentUser: payload,
    }));
  },
});

export const authSelector = (state) => state?.Auth;

export default authSlice.reducer;
