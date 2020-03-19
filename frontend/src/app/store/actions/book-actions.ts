import {createAction, props} from "@ngrx/store";
import {Book} from "../../book/domain/book";

export const ActionTypes = {
  REQUEST_BOOKS: "[book list] Request all books",
  REQUEST_BOOKS_SUCCESSFUL: "[book list] Succeed request all books",
  ADD_BOOK_TO_CART: "[book list] Add book to cart"
};

export const requestBooks = createAction(
    ActionTypes.REQUEST_BOOKS,
);

export const succeedRequestBooks = createAction(
    ActionTypes.REQUEST_BOOKS_SUCCESSFUL,
    props<{ requestedBooks: Book[] }>()
);

export const addBookToCart = createAction(
    ActionTypes.ADD_BOOK_TO_CART,
    props<{ addedBook: Book }>()
);
