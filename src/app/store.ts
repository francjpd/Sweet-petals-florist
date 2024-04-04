import { configureStore } from '@reduxjs/toolkit'
import { productApiSlice } from '../features/Products/ProductsApiSlice';

export const store = configureStore({
    reducer: {
        [productApiSlice.reducerPath]: productApiSlice.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(productApiSlice.middleware)
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;