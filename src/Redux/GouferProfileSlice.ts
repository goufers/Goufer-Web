import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching the Goufer profile
export const fetchGouferProfile = createAsyncThunk(
  "gouferProfile/fetchGouferProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GOUFER_TEST_API}/goufer/profile`
      );
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Initial state
const initialState = {
  profile: {},
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
        state.profile = action.payload;
      })
      .addCase(fetchGouferProfile.rejected, (state:any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default gouferProfileSlice.reducer;