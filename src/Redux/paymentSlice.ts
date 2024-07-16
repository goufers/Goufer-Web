import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface PaymentState {
  showAddPayment: boolean;
  showUpdatePayment: boolean;
  payments: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PaymentState = {
  showAddPayment: false,
  showUpdatePayment: false,
  payments: [],
  status: 'idle',
  error: null,
};

// Async thunk for fetching payments
export const fetchPayments = createAsyncThunk<any, void, { rejectValue: string }>(
  'payment/fetchPayments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/payments`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    showAddPayment(state) {
      state.showAddPayment = true;
      state.showUpdatePayment = false;
    },
    hideAddPayment(state) {
      state.showAddPayment = false;
    },
    showUpdatePayment(state) {
      state.showUpdatePayment = true;
      state.showAddPayment = false;
    },
    hideUpdatePayment(state) {
      state.showUpdatePayment = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayments.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPayments.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.status = 'succeeded';
        state.payments = action.payload;
      })
      .addCase(fetchPayments.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || null;
      });
  },
});

export const { showAddPayment, hideAddPayment, showUpdatePayment, hideUpdatePayment } = paymentSlice.actions;

export default paymentSlice.reducer;
