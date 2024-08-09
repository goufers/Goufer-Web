// // // import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // // import axios from "axios";



// // // // Define an async thunk for the API call
// // // // export const SearchGoufers = createAsyncThunk(
// // // //   "search-gofer",
// // // //   async (data: object, { rejectWithValue }) => {
// // // //     console.log(data);

// // // //     try {
// // // //       const response = await axios.get(
// // // //         `https://goufer-test-11a466ef5e78.herokuapp.com/api/v1/main/gofers/?expertise=Cooked food&is_available=true&avg_rating=4&category=&state=&country=&gender=&charges_above=&charges_below=56785`
// // // //       );
      
// // // //       console.log(data);
// // // //       return response.data;
// // // //     } catch (error: any) {
// // // //       console.error(rejectWithValue);
// // // //       console.log(error);
// // // //       return error.response.data;
// // // //     }
// // // //   }
// // // // );

// // // export const SearchGoufers  = createAsyncThunk(
// // //   "search-gofer",
// // //   async (_, { rejectWithValue }) => {
// // //     try {
// // //       console.log("Searching Goufers");
// // //       const response = await axios.get('https://goufer-test-11a466ef5e78.herokuapp.com/api/v1/main/gofers/?expertise=Cooked food&is_available=true&avg_rating=4&category=&state=&country=&gender=&charges_above=&charges_below=56785');
// // //       console.log("Response:", response.data); // Log response data
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error("Error fetching Goufer Profile:", error);
// // //       return rejectWithValue(error.response ? error.response.data : error.message);
// // //     }
// // //   }
// // // );

// // // // const infos = [
// // // //   {
// // // //     id: 1,
// // // //     GouferCategories: "Food & Beverage",
// // // //     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
// // // //     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
// // // //     Goufername: "Azeez Ibrahim",
// // // //     Text: " These are professional goufer which are expertise in resturant knowledge and update",
// // // //     Rate: "4.8",
// // // //     City: "Lagos,Nigeria",
// // // //     Task: " 50+ ",
    
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     GouferCategories: "Transport",
// // // //     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
// // // //     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
// // // //     Goufername: "Pius Lucky",
// // // //     Text: " These are professional goufer which are expertise in resturant knowledge and update",
// // // //     Rate: "4.8",
// // // //     City: "Lagos,Nigeria",
// // // //     Task: " 50+",
    
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     GouferCategories: "Entertainment",
// // // //     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
// // // //     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
// // // //     Goufername: "Chika Chime",
// // // //     Text: " These are professional goufer which are expertise in resturant knowledge and update",
// // // //     Rate: "4.8",
// // // //     City: "Lagos,Nigeria",
// // // //     Task: " 50+",
    
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     GouferCategories: "Donation",
// // // //     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
// // // //     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
// // // //     Goufername: "Choosen Abdullahi",
// // // //     Text: " These are professional goufer which are expertise in resturant knowledge and update",
// // // //     Rate: "4.8",
// // // //     City: "Lagos,Nigeria",
// // // //     Task: " 50+",
    
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     GouferCategories: "Shopper",
// // // //     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
// // // //     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
// // // //     Goufername: "Oladosu Teslimat",
// // // //     Text: " These are professional goufer which are expertise in resturant knowledge and update",
// // // //     Rate: "4.8",
// // // //     City: "Lagos,Nigeria",
// // // //     Task: " 50+",
    
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     GouferCategories: "Shopper",
// // // //     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
// // // //     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
// // // //     Goufername: "Oladosu Teslimat",
// // // //     Text: " These are professional goufer which are expertise in resturant knowledge and update",
// // // //     Rate: "4.8",
// // // //     City: "Lagos,Nigeria",
// // // //     Task: " 50+",
  
// // // //   },
// // // //   {
// // // //     id: 7,
// // // //     GouferCategories: "Shopper",
// // // //     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
// // // //     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
// // // //     Goufername: "Oladosu Teslimat",
// // // //     Text: " These are professional goufer which are expertise in resturant knowledge and update",
// // // //     Rate: "4.8",
// // // //     City: "Lagos,Nigeria",
// // // //     Task: " 50+",
   
// // // //   },

// // // //   {
// // // //     id: 8, 
// // // //     GouferCategories: "Shopper",
// // // //     Shopimage:
// // // //       "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
// // // //     Gouferimage:
// // // //       "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
// // // //     Goufername: "Oladosu Teslimat",
// // // //     Text: " These are professional goufer which are expertise in resturant knowledge and update",
// // // //     Rate: "4.8",
// // // //     City: "Lagos,Nigeria",
// // // //     Task: " 50+",
// // // //   }

// // // // ];
// // // const initialState = {
// // //     gofers: {},
// // //     status: "idle",
// // //     error: null,
// // //   };


// // //   export const SearchGoufersSlice: any = createSlice({
// // //     name: "search-gofer",
// // //     initialState: initialState,
// // //     reducers: {},
  
// // //     extraReducers: (builder) => {
// // //       builder
// // //         .addCase(SearchGoufers.pending, (state) => {
// // //           state.status = "loading";
// // //           state.error = null;
// // //         })
// // //         .addCase(SearchGoufers.fulfilled, (state, action: any) => {
// // //           state.status = "succeeded";
// // //           state.gofers = action.payload;
// // //         })
// // //         .addCase(SearchGoufers.rejected, (state, action: any) => {
// // //           state.status = "failed";
// // //           state.error = action.payload;
// // //         })
      
// // //     },
// // //   });

// // //   export default SearchGoufersSlice.reducer;






// // // import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// // // import axios from 'axios';

// // // // Define the type for info objects
// // // export interface Info {
// // //     id: number;
// // //     GouferCategories: string;
// // //     Shopimage: string;
// // //     Gouferimage: string;
// // //     Goufername: string;
// // //     text: string;
// // //     Rate: string;
// // //     City: string;
// // //     Task: string;
// // // }

// // // // Define the state for the slice
// // // interface InfoState {
// // //     infos: Info[];
// // //     status: "idle" | "loading" | "succeeded" | "failed";
// // //     error: string | null;
// // // }

// // // // Initial state with type
// // // const initialState: InfoState = {
// // //     infos: [],
// // //     status: "idle",
// // //     error: null,
// // // };

// // // // Asynchronous thunk to fetch info data from the backend
// // // export const fetchInfos = createAsyncThunk<Info[], void, { rejectValue: string }>(
// // //     "infos/fetchInfos",
// // //     async (_, { rejectWithValue }) => {
// // //         try {
// // //             console.log("Searching for Goufers...");
// // //             const response = await axios.get<Info[]>('https://goufer-test-f4c572ee80c2.herokuapp.com/api/v1/main/gofers/?expertise=Cookedfood&is_available=true&avg_rating=4&category=&state=&country=&gender=&charges_above=&charges_below=56785');
// // //             console.log("Response:", response.data); // Log response data
// // //             return response.data;
// // //         } catch (error) {
// // //             console.error("Error Searching for Goufers:", error);
// // //             return rejectWithValue(error.response ? error.response.data : error.message);
// // //         }
// // //     }
// // // );

// // // // Create a slice with type definitions
// // // const searchGoufersSlice = createSlice({
// // //     name: 'infos',
// // //     initialState,
// // //     reducers: {},
// // //     extraReducers: (builder) => {
// // //         builder
// // //             .addCase(fetchInfos.pending, (state) => {
// // //                 state.status = "loading";
// // //                 state.error = null;
// // //             })
// // //             .addCase(fetchInfos.fulfilled, (state, action: PayloadAction<Info[]>) => {
// // //                 state.status = "succeeded";
// // //                 state.infos = action.payload;
// // //             })
// // //             .addCase(fetchInfos.rejected, (state, action) => {
// // //                 state.status = "failed";
// // //                 state.error = action.payload;
// // //             });
// // //     },
// // // });

// // // export default searchGoufersSlice.reducer;


// // import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// // import axios from 'axios';

// // // Define the type for Goufer objects
// // export interface Goufer {
// //     id: number;
// //     GouferCategories: string;
// //     Shopimage: string;
// //     Gouferimage: string;
// //     Goufername: string;
// //     Text: string;
// //     Rate: string;
// //     City: string;
// //     Task: string;
// // }

// // // Define the state for the slice
// // interface GouferState {
// //     goufers: Goufer[];
// //     status: 'idle' | 'loading' | 'succeeded' | 'failed';
// //     error: string | null;
// // }

// // // Initial state with type
// // const initialState: GouferState = {
// //     goufers: [],
// //     status: 'idle',
// //     error: null,
// // };

// // // Asynchronous thunk to fetch Goufer data from the backend
// // export const fetchGoufers = createAsyncThunk<Goufer[], void, { rejectValue: string }>(
// //     'goufers/fetchGoufers',
// //     async (_, { rejectWithValue }) => {
// //         try {
// //             console.log('Searching for Goufers...');
// //             const response = await axios.get<Goufer[]>(
// //                 'https://goufer-test-f4c572ee80c2.herokuapp.com/api/v1/main/gofers/?expertise=Cookedfood&is_available=true&avg_rating=4&category=&state=&country=&gender=&charges_above=&charges_below=56785'
// //             );
// //             console.log('Response:', response.data);
// //             return response.data;
// //         } catch (error) {
// //             console.error('Error Searching for Goufers:', error);
// //             return rejectWithValue(error.response?.data || error.message);
// //         }
// //     }
// // );

// // // Create a slice with type definitions
// // const SearchGoufersSlice = createSlice({
// //     name: 'goufers',
// //     initialState,
// //     reducers: {},
// //     extraReducers: (builder) => {
// //         builder
// //             .addCase(fetchGoufers.pending, (state) => {
// //                 state.status = 'loading';
// //                 state.error = null;
// //             })
// //             .addCase(fetchGoufers.fulfilled, (state, action: PayloadAction<Goufer[]>) => {
// //                 state.status = 'succeeded';
// //                 state.goufers = action.payload;
// //             })
// //             .addCase(fetchGoufers.rejected, (state, action) => {
// //                 state.status = 'failed';
// //                 state.error = action.payload as string;
// //             });
// //     },
// // });

// // export default SearchGoufersSlice.reducer;



// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Define the type for Goufer objects
// export interface Goufer {
//     id: number;
//     GouferCategories: string;
//     Shopimage: string;
//     Gouferimage: string;
//     Goufername: string;
//     Text: string;
//     Rate: string;
//     City: string;
//     Task: string;
// }

// // Define the state for the slice
// interface GouferState {
//     goufers: Goufer[];
//     status: 'idle' | 'loading' | 'succeeded' | 'failed';
//     error: string | null;
// }

// // Initial state with type
// const initialState: GouferState = {
//     goufers: [],
//     status: 'idle',
//     error: null,
// };

// // Asynchronous thunk to fetch Goufer data from the backend
// export const fetchGoufers = createAsyncThunk<Goufer[], void, { rejectValue: string }>(
//     'goufers/fetchGoufers',
//     async (_, { rejectWithValue }) => {
//         try {
//             console.log('Searching for Goufers...');
//             const response = await axios.get<Goufer[]>(
//                 'https://goufer-test-f4c572ee80c2.herokuapp.com/api/v1/main/gofers/?expertise=Cookedfood&is_available=true&avg_rating=4&category=&state=&country=&gender=&charges_above=&charges_below=56785'
//             );
//             console.log('Response:', response.data);
//             return response.data;
//         } catch (error) {
//             console.error('Error Searching for Goufers:', error);
//             return rejectWithValue(error.response?.data || error.message);
//         }
//     }
// );
// // 
// // Create a slice with type definitions
// const searchGoufersSlice = createSlice({
//     name: 'goufers',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchGoufers.pending, (state) => {
//                 state.status = 'loading';
//                 state.error = null;
//             })
//             .addCase(fetchGoufers.fulfilled, (state, action: PayloadAction<Goufer[]>) => {
//                 state.status = 'succeeded';
//                 state.goufers = action.payload;
//             })
//             .addCase(fetchGoufers.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.payload as string;
//             });
//     },
// });

// export default searchGoufersSlice.reducer;





// src/features/searchGoufersSlice/searchGoufersSlice.ts



// src/features/searchGoufersSlice/searchGoufersSlice.ts






// src/features/searchGoufersSlice/SearchGoufersSlice.js

// searchGouferSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching the Goufer profile
export const SearchGoufers = createAsyncThunk(
  'search-goufers',
  async (data:any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_GOUFER_TEST_API
        }/main/gofers/?expertise=${data.expertise}&is_available=${data.is_available}&avg_rating=${data.avg_rating}&category=${data.category}&state=${data.state}&country=${data.country}&gender=${data.gender}&charges_above=${data.charges_above}&charges_below=${data.charges_below}`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// Initial state
const initialState = {
  profile: {},
  status: 'idle',
  error: null,
};

// GouferProfile slice
const searchGoufers = createSlice({
  name: 'gouferProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SearchGoufers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(SearchGoufers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(SearchGoufers.rejected, (state: any, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default searchGoufers.reducer;


