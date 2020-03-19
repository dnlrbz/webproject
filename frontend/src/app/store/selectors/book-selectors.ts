import {createSelector} from "@ngrx/store";
import {bookReducer, Books} from "../reducers/book-reducer";
import {Book} from "../../book/domain/book";


const books = (state) => state['bookReducer'].books;


export const allBooks = createSelector(
    books,
    (books: Books) => books.allBooks
);

export const cartItems = createSelector(
    books,
    (books: Books) => books.cartItems
);

export const cartTotalPrice = createSelector(
    books,
    (books: Books) => books.cartItems,
    (cartItems: Book[]) => cartItems.reduce((sum, currentBook) => {
      return sum + currentBook.price;
    }, 0)
);

export const cartTotalAmount = createSelector(
    books,
    (books: Books) => books.cartItems.length.toString()
);
