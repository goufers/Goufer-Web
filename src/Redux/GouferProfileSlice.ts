/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const CreateGouferAccount = createAsyncThunk(
  "get-goufer-profile",
  async (data, { rejectWithValue }) => {
    const token = localStorage.getItem("G_A_token");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GOUFER_TEST_API}/main/gofers/1`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Async thunk for fetching the Goufer profile
export const fetchGouferProfile = createAsyncThunk(
  "get_goufer_profile",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("G_A_token");

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GOUFER_TEST_API}/main/gofers/1`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const UpdateGouferProfile = createAsyncThunk(
  "update_gouferProfile",
  async (data, { rejectWithValue }) => {
    const token = localStorage.getItem("G_A_token");

    try {
      console.log("Fetching Goufer Profile...");
      const response = await axios.put(
        `${import.meta.env.VITE_GOUFER_TEST_API}/main/gofers/1`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Response:", response.data); // Log response data
      return response.data;
    } catch (error: any) {
      console.error("Error fetching Goufer Profile:", error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const DeleteGouferProfile = createAsyncThunk(
  "delete_gouferProfile",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("G_A_token");

    try {
      console.log("Fetching Goufer Profile...");
      const response = await axios.delete(
        `${import.meta.env.VITE_GOUFER_TEST_API}/main/gofers/1`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Response:", response.data); // Log response data
      return response.data;
    } catch (error: any) {
      console.error("Error fetching Goufer Profile:", error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Initial state
const initialState = {
  goufer_profile: {},
  status: "idle",
  error: null,
};

// GouferProfile slice
const gouferProfileSlice = createSlice({
  name: "gouferProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGouferProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchGouferProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.goufer_profile = action.payload;
      })
      .addCase(fetchGouferProfile.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(UpdateGouferProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UpdateGouferProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.goufer_profile = action.payload;
      })
      .addCase(UpdateGouferProfile.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(DeleteGouferProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(DeleteGouferProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.goufer_profile = action.payload;
      })
      .addCase(DeleteGouferProfile.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default gouferProfileSlice.reducer;
