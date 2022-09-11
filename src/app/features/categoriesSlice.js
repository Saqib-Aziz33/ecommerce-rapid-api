import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  error: null,
  loading: false,
  status: "idle",
};

// async actions
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_BASE_URL + "/categories/list",
        {
          params: { country: "US", lang: "en-US" },
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
            "X-RapidAPI-Host": "asos2.p.rapidapi.com",
          },
        }
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
      state.status = "pending";
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      console.log("rejected");
      state.loading = true;
      state.error = action.payload;
      state.status = "error";
    });
  },
});

export default categoriesSlice.reducer;
