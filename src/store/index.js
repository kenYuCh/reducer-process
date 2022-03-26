import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import cartSlice from "./cart-reducer";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        //cart: cartSlice.reducer,
        //cart: cartSlice.reducer,
        //cart: cartSlice.reducer,
        //cart: cartSlice.reducer,
    }
})

export default store;