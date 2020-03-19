import {Book} from "../../book/domain/book";
import {Action, createReducer, on} from "@ngrx/store";
import {addBookToCart, requestBooks, succeedRequestBooks} from "../actions/book-actions";

export interface Books {
  allBooks: Book[],
  cartItems: Book[],
}

export interface State {
  books: Books,
}

export const initialState: State = {
  books: {
    allBooks: [],
    cartItems: [],
  }
};

const reducer = createReducer(
    initialState,

    on(requestBooks, state => ({...state})),

    on(succeedRequestBooks, (state, {requestedBooks}) => ({
      ...state,
      books: {
        allBooks: requestedBooks,
        cartItems: state.books.cartItems
      }
    })),

    on(addBookToCart, ((state, {addedBook}) => ({
      ...state,
      books: {
        allBooks: state.books.allBooks,
        cartItems: [...state.books.cartItems, addedBook]
      }
    })))
    )
;


export function bookReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
