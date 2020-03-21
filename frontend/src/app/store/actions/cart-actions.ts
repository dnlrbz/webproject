import {createAction, props} from "@ngrx/store";
import {Book} from "../../book/domain/book";

export const ActionTypes = {
  ADD_BOOK_TO_CART: "[book list] Add book to cart",
  INCREASE_COUNT: "[cart] Increase amount of books in the cart",
  DECREASE_COUNT: "[cart] Decrease amount of books in the cart",
  DELETE_ITEMS: "[order form] Delete all items in cart after ordering",
};

export const addBookToCart = createAction(
    ActionTypes.ADD_BOOK_TO_CART,
    props<{ addedBook: Book }>()
);

export const increaseItem = createAction(
    ActionTypes.INCREASE_COUNT,
    props<{ itemId: number }>()
);

export const decreaseItem = createAction(
    ActionTypes.DECREASE_COUNT,
    props<{ itemId: number }>()
);

export const deleteAllItems = createAction(
    ActionTypes.DELETE_ITEMS,
);
