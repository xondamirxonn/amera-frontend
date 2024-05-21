

import { loadState } from "@/config/storage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  is_available: boolean;
  title: string;
  images: {
    image: string;
    image_id: number;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price_with_discount: null;
  quantity: number;
  price: number ;
  userCount: number,
  userPrice: number
}

interface InitialState {
  products: Product[];
  count: number;
  totalPrice: number;
}

const initialState: InitialState = loadState("product") || {
  products: [],
  count: 0,
  totalPrice: 0,
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const productItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!productItem) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: parseInt(action.payload.price.toString()),
            },
          ],
        };
      }
      

      return state;
    },
    remove: (state, action: PayloadAction<{ id: number }>) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => Number(item.id) !== Number(action.payload.id)
        ),
      };
    },
    CartLength: (state) => {
      return { ...state, count: state.products.length };
    },
    counts: (state, action: PayloadAction<{ id: number; type: string }>) => {
      if (action.payload.type === "add") {
        const newCount = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.userCount + 1) * item.price,
            };
          }

          return item;
        });
        return { ...state, products: newCount };
      }
      if (action.payload.type === "remove") {
        const newCount = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * item.price,
            };
          }

          return item;
        });
        return { ...state, products: newCount };
      }
    },
    totalPrice: (state) => {
      return {
        ...state,
        totalPrice: state.products.reduce((a, b) => a + b.userPrice, 0),
      };
    },
  },
});

export default product.reducer;

export const { add, remove, CartLength, counts, totalPrice } = product.actions;
