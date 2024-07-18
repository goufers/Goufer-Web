// 

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch gofer profile data
export const fetchData = createAsyncThunk(
  'goferProfile/fetchData', // Action type prefixed with slice name
  async (_, { rejectWithValue }) => {  // No payload needed here
    try {
      const response = await axios.get(
        
        'https://goufer-test-f4c572ee80c2.herokuapp.com/api/v1/main/gofers/1/'
      );
      return response.data; // Return response data on success
    } catch (error) {
      // Handle errors
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const goferProfileSlice = createSlice({
  name: 'goferProfile',
  initialState: {
    profile: null,      // Profile data
    status: 'idle',     // Status of the request (idle, loading, succeeded, failed)
    error: null,        // Error messages
  },
  reducers: {
    // Add any synchronous reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';  // Set status to loading when request starts
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';  // Set status to succeeded when request succeeds
        state.profile = action.payload; // Store the profile data from the request
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';  // Set status to failed if request fails
        state.error = action.payload;  // Store the error message
      });
  },
});



export default goferProfileSlice.reducer;
