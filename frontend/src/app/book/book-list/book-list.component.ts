import {Component, OnInit} from '@angular/core';
import {BookService} from "../service/book.service";
import {Observable} from "rxjs";
import {Book} from "../domain/book";
import {Store} from "@ngrx/store";
import {requestBooks} from "../../store/actions/book-actions";
import {booksSelector} from "../../store/selectors/book-selectors";
import {RootState} from "../../store/root-state";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public filterValue: string;

  public books$: Observable<Book[]> = this.store.select(booksSelector);

  constructor(public bookService: BookService, private store: Store<RootState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(requestBooks());

  }

}
