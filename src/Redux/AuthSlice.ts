/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { id: "246", name: "my name", email: "ask me" },
  wallet: { id: "", Balance: "" },
  token: {},
  isLoading: true,
};

export const authSlice: any = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signup: (state: any) => {
      return state.user;
    },
    login: (state: any) => {
      return state.user;
    },
    forgot_password: (state: any, action: any) => {
      return state.user;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signup, login, forgot_password } = authSlice.actions;

export default authSlice.reducer;
