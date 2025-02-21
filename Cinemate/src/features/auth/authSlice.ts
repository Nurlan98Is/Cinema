import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {
  auth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    singIn: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { singIn } = authSlice.actions;
export const authReducer = authSlice.reducer;
