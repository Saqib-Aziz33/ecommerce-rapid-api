import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'
import categoriesReducer from "./features/categoriesSlice";
import productReducer from "./features/productSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        categories: categoriesReducer,
        products: productReducer
    }
})

export default store