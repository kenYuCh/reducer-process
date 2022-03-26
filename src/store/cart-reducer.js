import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: { // use < state.itemsList > get value
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart(state, action) { // action.payload from dispatch(addToCart(object))
            /*
                const newItem = action.payload;
                const existingItem = state.itemsList.find((item) => item.id === newItem.id);
                .
                .
                .
            */
        },
        removeFromCart(state, action) {
            /*...*/
        },
        setShowCart(state) {
            /*...*/
        }
    }
})

// export const cartActions = cartSlice.actions;
export const { addToCart, removeFromCart, setShowCart } = cartSlice.actions;
export default cartSlice;












