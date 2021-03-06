import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import cartSlice from "./cart-reducer";
import shopCrud from "./crud"
import movieSlice from './movie-reducer'
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        crud: shopCrud.reducer,
        movie: movieSlice.reducer,
        //cart: cartSlice.reducer,
        //cart: cartSlice.reducer,
        //cart: cartSlice.reducer,
    }
})

export default store;