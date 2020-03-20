import {Book} from "../book/domain/book";
import {EntityState} from "@ngrx/entity";
import {CartItem, cartReducer} from "./reducers/cart-reducer";
import {bookReducer} from "./reducers/book-reducer";

export interface RootState {
  books: Book[],
  cartItems: EntityState<CartItem>
}

export const reducers = {
  books: bookReducer,
  cartItems: cartReducer
};
