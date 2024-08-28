/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetLocation = createAsyncThunk(
  "update-user",
  async (data: string | number, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GOUFER_TEST_API}/location/location/${data}`
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

export const CreateLocation = createAsyncThunk(
  "update-user",
  async (data: object, { rejectWithValue }) => {
    const token = localStorage.getItem("G_A_token");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GOUFER_TEST_API}/location/location/`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
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

export const UpdateLocation = createAsyncThunk(
  "update-user",
  async (data: object, { rejectWithValue }) => {
    const token = localStorage.getItem("G_A_token");

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_GOUFER_TEST_API}/location/location/`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
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
  location: {},
  status: "idle",
  error: null,
};

export const locationSlice: any = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // reset_state: (state) => {
    //   state.authkeys = {};
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateLocation.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(CreateLocation.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.location = { ...action.payload };
      })
      .addCase(CreateLocation.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(GetLocation.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetLocation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.location = { ...action.payload };
      })
      .addCase(GetLocation.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(UpdateLocation.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UpdateLocation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.location = { ...action.payload };
      })
      .addCase(UpdateLocation.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    // .addCase(ResetState.rejected, (state: any, action) => {
    //   state.authkeys = action.payload;
    // });
  },
});

// Action creators are generated for each case reducer function
export default locationSlice.reducer;
