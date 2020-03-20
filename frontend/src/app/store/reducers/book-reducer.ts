import {Book} from "../../book/domain/book";
import {Action, createReducer, on} from "@ngrx/store";
import {requestBooks, succeedRequestBooks} from "../actions/book-actions";


export const initialState: Book[] = [];

const reducer = createReducer(
    initialState,

    on(requestBooks, state => ({...state})),

    on(succeedRequestBooks, (state, {requestedBooks}) => (requestedBooks))
);


export function bookReducer(state: Book[] | undefined, action: Action) {
  return reducer(state, action);
}
