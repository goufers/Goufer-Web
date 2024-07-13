import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface GouferProfileState {
  profile: Record<string, any> | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: GouferProfileState = {
  profile: null,
  status: "idle",
  error: null,
};

export const fetchGouferProfile = createAsyncThunk<any, number, { rejectValue: string }>(
  "gouferProfile/fetchGouferProfile",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GOUFER_TEST_API}/main/gofers/${id}/`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

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
      .addCase(fetchGouferProfile.fulfilled, (state, action: PayloadAction<Record<string, any>>) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(fetchGouferProfile.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = "failed";
        state.error = action.payload || null;
      });
  },
});

export default gouferProfileSlice.reducer;
