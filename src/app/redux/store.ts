import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import React from "react";
import product, {
  CartLength,
  add,
  counts,
  remove,
  totalPrice,
} from "./reducer/cart-reducer";
import { saveState } from "@/config/storage";
import wishlist, { WishlistCount, addList, removeList } from "./reducer/wishlist-reducer";

const StoreMiddleWere = createListenerMiddleware();

StoreMiddleWere.startListening({
  matcher: isAnyOf(add, remove, counts, addList, removeList),
  effect: (_, api) => {
    api.dispatch(CartLength());
    api.dispatch(totalPrice());
    api.dispatch(WishlistCount())
  },
});

export const store = configureStore({
  reducer: {
    product,
    wishlist,
  },
  middleware: (middleware) => middleware().prepend(StoreMiddleWere.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().product);
});

store.subscribe(() => {
  saveState("wishlist", store.getState().wishlist);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
