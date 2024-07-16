/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Define an async thunk for the API call
export const Signup = createAsyncThunk(
  "register-user",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/register/`,
        data
      );
      if (response.data.auth_status == "True") {
        localStorage.setItem(response.data.access, "G_A_Token");
        localStorage.setItem(response.data.refresh, "G_R_Token");
      }
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(rejectWithValue);
      console.log(error);
      return error.response.data;
    }
  }
);

export const LoginUser = createAsyncThunk(
  "login-user",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/login`,
        data
      );
      if (response.data.auth_status == "True") {
        localStorage.setItem(response.data.access, "G_A_Token");
        localStorage.setItem(response.data.refresh, "G_R_Token");
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const Logout = createAsyncThunk(
  "logout-user",
  async (data: object, { rejectWithValue }) => {
    const token = localStorage.getItem("G_A_token");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/logout-user`,
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const SendCode = createAsyncThunk(
  "send-code",
  async (data: any, { rejectWithValue }) => {
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
  async (data, { rejectWithValue }) => {
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
  status: "idle",
  error: null,
};

export const authSlice: any = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},

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
      })
      .addCase(LoginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function

export default authSlice.reducer;
