import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './product/ProductSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
})