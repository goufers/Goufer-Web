/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk for the API call

export const Signup = createAsyncThunk(
  "register-user",
  async (data: object, { rejectWithValue }) => {
    console.log(data);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/register`,
        data
      );
      return response.data;
    } catch (error: any) {
      console.error(rejectWithValue);
      return error.response.data;
    }
  }
);

export const Login = createAsyncThunk(
  "login-user",
  async (data: object, { rejectWithValue }) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/login`,
        data,
        {
          headers: {
            Authorization: "",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const Logout = createAsyncThunk(
  "logout-user",
  async (data: object, { rejectWithValue }) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/logout-user`,
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const SendCode = createAsyncThunk(
  "send-code",
  async (data: object, { rejectWithValue }) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/send-code`,
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const VerifyPhone = createAsyncThunk(
  "verify-phone",
  async (data: object, { rejectWithValue }) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/verify-phone`,
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const initialState = {
  user: {},
  authkeys: { refresh: "", access: "", auth_status: "" },
  wallet: { id: "", Balance: "" },
  status: "idle",
  error: null,
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

  extraReducers: (builder) => {
    builder
      .addCase(Signup.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(Signup.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.authkeys = action.payload;
      })
      .addCase(Signup.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { signup, login, forgot_password } = authSlice.actions;
export default authSlice.reducer;
