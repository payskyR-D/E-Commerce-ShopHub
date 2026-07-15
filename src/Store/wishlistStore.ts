import { create } from "zustand";

type WishlistItem = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
};

type WishlistStore = {
  wishlist: WishlistItem[];

  addToWishlist: (product: WishlistItem) => void;

  removeFromWishlist: (id: number) => void;

  isInWishlist: (id: number) => boolean;
};

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  wishlist: [],

  addToWishlist: (product) =>
    set((state) => {
      const exists = state.wishlist.find(
        (item) => item.id === product.id
      );

      if (exists) {
        return state;
      }

      return {
        wishlist: [...state.wishlist, product],
      };
    }),

  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter(
        (item) => item.id !== id
      ),
    })),

  isInWishlist: (id) =>
    get().wishlist.some(
      (item) => item.id === id
    ),
}));