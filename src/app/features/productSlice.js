import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    status: 'idle',
    error: null
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (id) => {
  try {
    const defaultCategory = "29811"
    const { data } = await axios.get(
      process.env.REACT_APP_BASE_URL + "/products/v2/list",
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
        params: {
          store: "US",
          offset: "0",
          categoryId: id || defaultCategory,
          limit: "48",
          country: "US",
          sort: "freshness",
          currency: "USD",
          sizeSchema: "US",
          lang: "en-US",
        },
      }
    );
    return data;
  } catch (error) {
    return error.message
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state) => {
        state.status = 'pending'
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'success'
        state.products = action.payload
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload
    })
  }
});


export default productSlice.reducer;
