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

interface Step {
  url: string;
  title: string;
  text: string;
}

interface DbState {
  infos: Info[];
  steps: Step[];
  loading: boolean;
  error: string | null;
}
const initialState: DbState = {
  infos: [],
  steps: [],
  loading: false,
  error: null,
};
export const fetchInfos = 
createAsyncThunk(
    "fetch-gofers",
    async () => {
      try {
        const response = await axios.get('/api/infos');
        return response.data;
      }
  catch (error: any) {
         return error;
   }
});

export const fetchSteps = createAsyncThunk('db/fetchSteps', async () => {
  const response = await axios.get('/api/infos');
  return response.data;
});
const dbSlice = createSlice({
  name: 'db',
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
      .addCase(fetchSteps.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSteps.fulfilled, (state, action) => {
        state.loading = false;
        state.steps = action.payload;
      })
      .addCase(fetchSteps.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch steps';
      });
  },
});

// Export actions and reducer
export default dbSlice.reducer;

