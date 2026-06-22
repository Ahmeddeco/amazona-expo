import { create } from "zustand"
import { IAmazonaStore } from "./amazona.store.types"

export const useAmazonaStore = create<IAmazonaStore>((set, get) => ({
  cart: [],

  /* ------------------------------- addToCart ------------------------------ */
  addToCart: (product) => {
    set((state) => ({
      cart: [...state.cart, product]
    }))
  },

  /* ---------------------------- removeFromCart ---------------------------- */
  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id)
    }))
  }
}))