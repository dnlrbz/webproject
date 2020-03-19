import {Component, OnInit} from '@angular/core';
import {BookService} from "../service/book.service";
import {Observable} from "rxjs";
import {Book} from "../domain/book";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books$: Observable<Book[]>;

  constructor(public bookService: BookService) {
  }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }

}
