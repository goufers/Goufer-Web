/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetReviews = createAsyncThunk("get-erandboy", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_GOUFER_TEST_API}/main/reviews/`);
    if (response.data.messages) {
      return { ...response.data, success: false };
    }

    if (response.data) {
      return { ...response.data, success: true };
    }
  } catch (error: any) {
    console.log(error);
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});

export const UpdateReviews = createAsyncThunk(
  "update-erandboy-details",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/erandboy/<pk>`,
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
  reviews: {},

  status: "idle",
  error: null,
};

export const reviewsSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // reset_state: (state) => {
    //   state.authkeys = {};
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetReviews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetReviews.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.reviews = { ...action.payload };
      })
      .addCase(GetReviews.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(UpdateReviews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UpdateReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reviews = { ...action.payload };
      })
      .addCase(UpdateReviews.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    //   .addCase(ResetState.rejected, (state: any, action) => {
    //     state.authkeys = action.payload;
    //   });
  },
});

// Action creators are generated for each case reducer function

export default reviewsSlice.reducer;
