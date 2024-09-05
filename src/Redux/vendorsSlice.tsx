/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetVendors = createAsyncThunk("get-vendors", async (_, { rejectWithValue }) => {
  const token = localStorage.getItem("G_A_token");

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_GOUFER_TEST_API}/users/vendors/`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
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

export const CreateVendor = createAsyncThunk(
  "create-vendors",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/vendors/`,
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

export const GetVendorDetails = createAsyncThunk(
  "get-vendors-details",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/vendors/<pk>`,
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

export const UpdateVendorDetails = createAsyncThunk(
  "update-vendors-details",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/vendors/<pk>`,
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

export const DeleteVendor = createAsyncThunk(
  "delete-vendors",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_GOUFER_TEST_API}/users/vendors/<pk>`,
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
  vendors_list: {},
  vendor_details: {},
  status: "idle",
  error: null,
};

const vendorsSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // reset_state: (state) => {
    //   state.authkeys = {};
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetVendors.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetVendors.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.vendors_list = { ...action.payload };
      })
      .addCase(GetVendors.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(CreateVendor.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(CreateVendor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.vendor_details = { ...action.payload };
      })
      .addCase(CreateVendor.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(UpdateVendorDetails.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UpdateVendorDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.vendor_details = { ...action.payload };
      })
      .addCase(UpdateVendorDetails.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(DeleteVendor.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(DeleteVendor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.vendor_details = { ...action.payload };
      })
      .addCase(DeleteVendor.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    //   .addCase(ResetState.rejected, (state: any, action) => {
    //     state.authkeys = action.payload;
    //   });
  },
});

// Action creators are generated for each case reducer function

export default vendorsSlice.reducer;
