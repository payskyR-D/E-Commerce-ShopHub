import { create } from "zustand";

type CartItem = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];

  addToCart: (product: CartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

const getCart = (): CartItem[] => {
  const saved = localStorage.getItem("cart-storage");
  return saved ? JSON.parse(saved) : [];
};

const saveCart = (cart: CartItem[]) => {
  localStorage.setItem("cart-storage", JSON.stringify(cart));
};


export const useCartStore = create<CartStore>((set) => ({
  cart: getCart(),

  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find(
        (item) => item.id === product.id
      );

      const newCart = exists
        ? state.cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          )
        : [...state.cart, product];

      saveCart(newCart);

      return {
        cart: newCart,
      };
    }),

  increaseQuantity: (id) =>
    set((state) => {
      const newCart = state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      saveCart(newCart);

      return { cart: newCart };
    }),

  decreaseQuantity: (id) =>
    set((state) => {
      const newCart = state.cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0);

      saveCart(newCart);

      return { cart: newCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const newCart = state.cart.filter(
        (item) => item.id !== id
      );

      saveCart(newCart);

      return { cart: newCart };
    }),

  clearCart: () => {
    localStorage.removeItem("cart-storage");

    set({
      cart: [],
    });
  },
}));