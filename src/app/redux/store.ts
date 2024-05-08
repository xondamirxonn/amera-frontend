import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import product from "./reducer/cart-reducer";
import { saveState } from "@/config/storage";

export const store = configureStore({
  reducer: {
    product,
  },
});

store.subscribe(() => {
  saveState("product", store.getState().product);
});
