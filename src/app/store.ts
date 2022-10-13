import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/api.slice";
import { cartReducer } from "../features/cart/cart.slice";
import { userReducer } from "../features/user/user.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
