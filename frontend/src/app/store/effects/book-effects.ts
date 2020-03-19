import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {BookService} from "../../book/service/book.service";
import {ActionTypes} from "../actions/book-actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {Book} from "../../book/domain/book";

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => this.actions$.pipe(
      ofType(ActionTypes.REQUEST_BOOKS),
      mergeMap(() => this.bookService.getBooks()
      .pipe(
          map((books: Book[]) => ({
            type: ActionTypes.REQUEST_BOOKS_SUCCESSFUL,
            requestedBooks: books,
          })),
          catchError(() => EMPTY)
      ))
      )
  );

  constructor(private actions$: Actions, private bookService: BookService) {
  }
}
