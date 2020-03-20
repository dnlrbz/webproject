import {Book} from "../../book/domain/book";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Action, createReducer, on} from "@ngrx/store";
import {addBookToCart, decreaseItem, increaseItem} from "../actions/cart-actions";

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

    on(increaseItem, (state, {itemId}) => {
      return cartItemAdapter.updateOne({
        id: itemId,
        changes: {
          ...state.entities[itemId],
          count: state.entities[itemId].count + 1
        }
      }, state);
    }),

    on(decreaseItem, (state, {itemId}) => {
      const cartItem = state.entities[itemId];
      if (cartItem && cartItem.count === 1) {
        return cartItemAdapter.removeOne(itemId, state);
      } else {
        return cartItemAdapter.updateOne({
          id: itemId,
          changes: {
            ...state.entities[itemId],
            count: state.entities[itemId].count - 1
          }
        }, state)
      }
    })
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return reducer(state, action);
}


