import { ProductEntity } from "@/types/entities/product.entity";
import { initialState, CartState } from "./cart.initialState";

const reducers = {
  addNewItem: (state: CartState, action: { payload: { product: ProductEntity } }) => {
    state.products.push(action.payload.product);
  },
  removeOne: (state: CartState, action: { payload: { id: number } }) => {
    state.products = state.products.filter((product) => product.id !== action.payload.id);
  },
  resetCart: () => initialState,
};

export default reducers;