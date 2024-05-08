import { loadState } from "@/config/storage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
}

interface InitialState {
  products: Product[];
  count: number;
}

const initialState: InitialState = loadState("product") || {
  products: [],
  count: 0,
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
            },
          ],
        };
      }
      console.log(state, action);

      return state;
    },
    remove: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
        
      };
      
    },
    CartLength: (state) => {
      return { ...state, count: state.products.length };
    },
  },
});

export default product.reducer;

export const { add, remove, CartLength } = product.actions;
