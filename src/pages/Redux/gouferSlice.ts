import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Info {
  id: number;
  Categories?: string;
  GouferCategories?: string;
  Shopimage: string;
  Gouferimage: string;
  Goufername: string;
  text: string;
  Rate: string;
  City: string;
  Task: string;
}

interface DbState {
  infos: Info[];
  loading: boolean;
  error: string | null;
}
const initialState: DbState = {
  infos: [],
  loading: false,
  error: null,
};
export const fetchInfos =
  createAsyncThunk(
    "fetch-gofers",
    async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_GOUFER_TEST_API}/main/gofers/?`);
        // console.log(response)

        return response.data;
      }
      catch (error: any) {
        return error;
      }
    });

// export const fetchSteps = createAsyncThunk('goufer/fetchSteps', async () => {
//   const response = await axios.get(`${import.meta.env.VITE_GOUFER_TEST_API}/main/gofers/`);
//   return response.data;
// });
const gouferSlice = createSlice({
  name: 'gofers',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.infos = action.payload;
      })
      .addCase(fetchInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch infos';
      })
    // .addCase(fetchSteps.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(fetchSteps.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.steps = action.payload;
    // })
    // .addCase(fetchSteps.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message || 'Failed to fetch steps';
    // });
  },
});

// Export actions and reducer
export default gouferSlice.reducer;

