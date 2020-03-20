import {Book} from "../../book/domain/book";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Action, createReducer, on} from "@ngrx/store";
import {addBookToCart} from "../actions/cart-actions";

export interface CartItem extends Book {
  count: number;
}

export interface CartState extends EntityState<CartItem> {
}

export function selectBookId(book: Book): number {
  return book.id;
}

export const cartItemAdapter: EntityAdapter<CartItem> = createEntityAdapter<CartItem>({
  selectId: selectBookId,
  sortComparer: false,
});

export const initialState: CartState = cartItemAdapter.getInitialState();

const reducer = createReducer(
    initialState,

    on(addBookToCart, (state, {addedBook}) => {
          const cartItem = state.entities[addedBook.id];
          return cartItemAdapter.upsertOne({
            ...addedBook,
            count: cartItem ? cartItem.count + 1 : 1,
          }, state);
        }
    ),
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return reducer(state, action);
}


