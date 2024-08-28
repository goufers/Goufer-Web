/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetErandboy = createAsyncThunk("get-erandboy", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_GOUFER_TEST_API}/users/erandboy/`
    );
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

export const CreateErandboy = createAsyncThunk(
  "create-erandboy",
  async (data: object, { rejectWithValue }) => {
    const token = localStorage.getItem("G_A_token");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/erandboy/`,
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
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

export const GetErandboyDetails = createAsyncThunk(
  "get-erandboy-details",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await axios.get(
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

export const UpdateErandboyDetails = createAsyncThunk(
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

export const DeleteErandboy = createAsyncThunk(
  "delete-erandboy",
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
  erandboys_list: {},
  erandboy_details: {},
  status: "idle",
  error: null,
};

export const erandboySlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // reset_state: (state) => {
    //   state.authkeys = {};
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetErandboy.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetErandboy.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.erandboys_list = { ...action.payload };
      })
      .addCase(GetErandboy.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(CreateErandboy.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(CreateErandboy.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.erandboy_details = { ...action.payload };
      })
      .addCase(CreateErandboy.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(UpdateErandboyDetails.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UpdateErandboyDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.erandboy_details = { ...action.payload };
      })
      .addCase(UpdateErandboyDetails.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(DeleteErandboy.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(DeleteErandboy.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.erandboy_details = { ...action.payload };
      })
      .addCase(DeleteErandboy.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    //   .addCase(ResetState.rejected, (state: any, action) => {
    //     state.authkeys = action.payload;
    //   });
  },
});

// Action creators are generated for each case reducer function

export default erandboySlice.reducer;
