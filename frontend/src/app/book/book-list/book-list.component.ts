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

  books: Observable<Book[]>;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBooks()
    .subscribe((data: Book[]) => console.log(data));
  }

}
