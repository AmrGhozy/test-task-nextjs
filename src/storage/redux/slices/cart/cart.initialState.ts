import { ProductEntity } from "@/types/entities/product.entity"

export interface CartState {
  products: ProductEntity[]
}

export const initialState: CartState = {
  products: [],
}