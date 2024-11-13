import { ProductEntity } from "@/types/entities/product.entity"

export interface CartState {
  products: ProductEntity[],
  searcByName: string
}

export const initialState: CartState = {
  products: [],
  searcByName: ''
}