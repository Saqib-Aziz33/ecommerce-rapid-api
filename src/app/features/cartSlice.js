import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {},
        remove: (state, action) => {},
        clear: state => {}
    }
})

export const {add, remove, clear} = cartSlice.actions
export default cartSlice.reducer