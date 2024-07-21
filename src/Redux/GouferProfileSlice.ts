import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching the Goufer profile
// export const fetchGouferProfile = createAsyncThunk(
//   "gouferProfile/fetchGouferProfile",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_GOUFER_TEST_API}/main/gofers/1`
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response ? error.response.data : error.message);
//     }
//   }
// );

export const fetchGouferProfile = createAsyncThunk(
  "gouferProfile/fetchGouferProfile",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Fetching Goufer Profile...");
      const response = await axios.get('https://goufer-test-f4c572ee80c2.herokuapp.com/api/v1/main/gofers/1/');
      console.log("Response:", response.data); // Log response data
      return response.data;
    } catch (error) {
      console.error("Error fetching Goufer Profile:", error);
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
      .addCase(fetchGouferProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default gouferProfileSlice.reducer;