import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "@/config/storage";

interface WishlistItem {
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
  price: number;
  userCount: number;
  userPrice: number;
}

interface WishlistState {
  wishlists: WishlistItem[];
  countWishlist: number;
}

const initialState: WishlistState = loadState("wishlist") || {
  wishlists: [],
  countWishlist: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addList: (state, action) => {
      const find = state.wishlists.find(
        (item) => item.id === action.payload.id
      );
      if (!find) {
        return {
          ...state,
          wishlists: [
            ...state.wishlists,
            {
              ...action.payload,
            },
          ],
        };
      }
      return state;
    },

    removeList: (state, action: PayloadAction<{ id: number }>) => {
      state.wishlists = state.wishlists.filter(
        (item) => Number(item.id) !== Number(action.payload.id)
      );
    },

    WishlistCount: (state) => {
      return { ...state, countWishlist: state.wishlists.length };
    },
  },
});

export const { addList, removeList, WishlistCount } = wishlistSlice.actions;
export default wishlistSlice.reducer;
