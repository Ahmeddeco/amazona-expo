import { IProduct } from "@/types/app.types"

type IAmazonaStore = {
  cart: IProduct[]
  addToCart: (product: IProduct) => void
  removeFromCart: (id: string) => void
}

export { IAmazonaStore }
