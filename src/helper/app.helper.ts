import { IProduct } from "@/types/app.types"

/* ---------------------------- getSubTotalAmount --------------------------- */
export const getSubTotalAmount = (products: IProduct[]) => {
  let amount = 0

  products.forEach((product) => {
    amount += product.price
  })
  return amount
}

/* ----------------------------- getTotalAmount ----------------------------- */
export const getTotalAmount = (products: IProduct[]) => {
  let total = getSubTotalAmount(products)
  total += 12
  total += 34.5
  return total
}