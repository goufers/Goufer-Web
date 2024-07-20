/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UserData = createAsyncThunk("user-profile", async (_, { rejectWithValue }) => {
  const token = localStorage.getItem("G_A_token");

  try {
    const response = await axios.post(`${import.meta.env.VITE_GOUFER_TEST_API}/users/me/`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    if (response.data.messages) {
      return { ...response.data, success: false };
    }

    if (response.data.email) {
      return { ...response.data, success: true };
    }
  } catch (error: any) {
    console.log(error);
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});

export const UpdateUserData = createAsyncThunk(
  "update-user",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/update/`,
        data
      );
      if (response.data.message) {
        return { ...response.data, success: false };
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const initialState = {
  user: {},
  authkeys: {},
  status: "idle",
  error: null,
};

export const userSlice: any = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    reset_state: (state) => {
      state.authkeys = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UserData.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.user = { ...action.payload };
      })
      .addCase(UserData.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(LoginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.authkeys = { ...action.payload };
      })
      .addCase(LoginUser.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(ResetState.rejected, (state: any, action) => {
        state.authkeys = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function

export default userSlice.reducer;
