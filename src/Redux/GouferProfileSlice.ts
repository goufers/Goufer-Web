// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// interface GouferProfileState {
//   profile: Record<string, any> | null;
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// const initialState: GouferProfileState = {
//   profile: null,
//   status: "idle",
//   error: null,
// };

// export const fetchGouferProfile = createAsyncThunk(
//   "goufer-profile",
//   async (id: any, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_GOUFER_TEST_API}/main/gofers/${id}/`
//       );
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response ? error.response.data : error.message);
//     }
//   }
// );

// const gouferProfileSlice = createSlice({
//   name: "gouferProfile",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchGouferProfile.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(fetchGouferProfile.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.profile = action.payload;
//       })
//       .addCase(fetchGouferProfile.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// export default gouferProfileSlice.reducer;


// goferProfileSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch gofer profile data
export const fetchData = createAsyncThunk(
  'goferProfile/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://goufer-test-f4c572ee80c2.herokuapp.com/api/v1/main/gofers/1/'
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const goferProfileSlice = createSlice({
  name: 'goferProfile',
  initialState: {
    profile: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default goferProfileSlice.reducer; // Export the reducer
