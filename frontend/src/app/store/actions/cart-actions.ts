import {createAction, props} from "@ngrx/store";
import {Book} from "../../book/domain/book";

export const ActionTypes = {
  ADD_BOOK_TO_CART: "[book list] Add book to cart"
};

export const addBookToCart = createAction(
    ActionTypes.ADD_BOOK_TO_CART,
    props<{ addedBook: Book }>()
);
