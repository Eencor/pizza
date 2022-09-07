import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItems(state, action){
            const findItem = state.cartItems.find(item => item.id === action.payload.id);

            if(findItem) {
                findItem.count++
            } else {
                state.cartItems.push({
                    ...action.payload,
                    count: 1,
                });
            }
        },

        minusCartItems(state, action){
            const findItem = state.cartItems.find(item => item.id === action.payload);

            if(findItem) {
                findItem.count--
            }

            if(!findItem.count) {
                state.cartItems = state.cartItems.filter(el => el.id !== findItem.id)
            }

        },

        deleteCartItems(state, action){
            state.cartItems = state.cartItems.filter(el => el.id !== action.payload)
        },

        clearCartItems(state){
            state.cartItems = [];
        }
    }
});

export const { addCartItems, deleteCartItems, minusCartItems, clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;