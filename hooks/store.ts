import { create } from 'zustand';
import { MenuItem } from '@/constant/data';

interface MenuStore {
  cartItems: MenuItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void; // New function to update quantity
}

export const useCart = create<MenuStore>((set) => ({
  cartItems: [],
  addItem: (item) => set((state) => {
    // Check if item is already in cart
    const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
    
    if (existingItem) {
      // Update the quantity of the existing item
      return {
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      };
    }
    
    // If the item does not exist, add a new item with quantity = 1
    return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
  }),
  removeItem: (id) => set((state) => ({
    cartItems: state.cartItems.filter((item) => item.id !== id)
  })),
  updateQuantity: (id, quantity) => set((state) => ({
    cartItems: state.cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item // Ensure quantity doesn't go below 1
    )
  })),
}));
