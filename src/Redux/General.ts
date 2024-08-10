/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Main = createAsyncThunk("user-profile", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_GOUFER_TEST_API}/main/`);
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

export const GetCategories = createAsyncThunk(
  "update-user",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GOUFER_TEST_API}/main/categories/`,
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

// this should be in its own file
export const GetDocuments = createAsyncThunk(
  "update-user",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GOUFER_TEST_API}/main/documents/`,
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
  main: {},
  categories: {},
  documents: {},
  location: {},
  status: "idle",
  error: null,
};

export const generalSlice: any = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // reset_state: (state) => {
    //   state.authkeys = {};
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Main.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(Main.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.main = { ...action.payload };
      })
      .addCase(Main.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(GetCategories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = { ...action.payload };
      })
      .addCase(GetCategories.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(GetDocuments.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetDocuments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.documents = { ...action.payload };
      })
      .addCase(GetDocuments.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    // .addCase(ResetState.rejected, (state: any, action) => {
    //   state.authkeys = action.payload;
    // });
  },
});

// Action creators are generated for each case reducer function

export default generalSlice.reducer;
