import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



// Define an async thunk for the API call
export const SearchGoufers = createAsyncThunk(
  "search-gofer",
  async (data: object, { rejectWithValue }) => {
    console.log(data);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GOUFER_TEST_API}/gofers/?expertise=Cooked`
      );
      
      console.log(data);
      return response.data;
    } catch (error: any) {
      console.error(rejectWithValue);
      console.log(error);
      return error.response.data;
    }
  }
);

// const infos = [
//   {
//     id: 1,
//     GouferCategories: "Food & Beverage",
//     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
//     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
//     Goufername: "Azeez Ibrahim",
//     Text: " These are professional goufer which are expertise in resturant knowledge and update",
//     Rate: "4.8",
//     City: "Lagos,Nigeria",
//     Task: " 50+ ",
    
//   },
//   {
//     id: 2,
//     GouferCategories: "Transport",
//     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
//     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
//     Goufername: "Pius Lucky",
//     Text: " These are professional goufer which are expertise in resturant knowledge and update",
//     Rate: "4.8",
//     City: "Lagos,Nigeria",
//     Task: " 50+",
    
//   },
//   {
//     id: 3,
//     GouferCategories: "Entertainment",
//     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
//     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
//     Goufername: "Chika Chime",
//     Text: " These are professional goufer which are expertise in resturant knowledge and update",
//     Rate: "4.8",
//     City: "Lagos,Nigeria",
//     Task: " 50+",
    
//   },
//   {
//     id: 4,
//     GouferCategories: "Donation",
//     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
//     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
//     Goufername: "Choosen Abdullahi",
//     Text: " These are professional goufer which are expertise in resturant knowledge and update",
//     Rate: "4.8",
//     City: "Lagos,Nigeria",
//     Task: " 50+",
    
//   },
//   {
//     id: 5,
//     GouferCategories: "Shopper",
//     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
//     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
//     Goufername: "Oladosu Teslimat",
//     Text: " These are professional goufer which are expertise in resturant knowledge and update",
//     Rate: "4.8",
//     City: "Lagos,Nigeria",
//     Task: " 50+",
    
//   },
//   {
//     id: 6,
//     GouferCategories: "Shopper",
//     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
//     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
//     Goufername: "Oladosu Teslimat",
//     Text: " These are professional goufer which are expertise in resturant knowledge and update",
//     Rate: "4.8",
//     City: "Lagos,Nigeria",
//     Task: " 50+",
  
//   },
//   {
//     id: 7,
//     GouferCategories: "Shopper",
//     Shopimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
//     Gouferimage:"https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
//     Goufername: "Oladosu Teslimat",
//     Text: " These are professional goufer which are expertise in resturant knowledge and update",
//     Rate: "4.8",
//     City: "Lagos,Nigeria",
//     Task: " 50+",
   
//   },

//   {
//     id: 8, 
//     GouferCategories: "Shopper",
//     Shopimage:
//       "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
//     Gouferimage:
//       "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
//     Goufername: "Oladosu Teslimat",
//     Text: " These are professional goufer which are expertise in resturant knowledge and update",
//     Rate: "4.8",
//     City: "Lagos,Nigeria",
//     Task: " 50+",
//   }

// ];
const initialState = {
    gofers: {},
    status: "idle",
    error: null,
  };


  export const SearchSlice: any = createSlice({
    name: "search-gofer",
    initialState: initialState,
    reducers: {},
  
    extraReducers: (builder) => {
      builder
        .addCase(SearchGoufers.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(SearchGoufers.fulfilled, (state, action: any) => {
          state.status = "succeeded";
          state.gofers = action.payload;
        })
        .addCase(SearchGoufers.rejected, (state, action: any) => {
          state.status = "failed";
          state.error = action.payload;
        })
      
    },
  });

  export default searchGoufers.reducer;