import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../service/book.service";
import {Book} from "../domain/book";
import {Observable} from "rxjs";
import {addBookToCart} from "../../store/actions/cart-actions";
import {Store} from "@ngrx/store";
import {RootState} from "../../store/root-state";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, public bookService: BookService, public store: Store<RootState>) {
  }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params.id;
    this.book$ = this.bookService.getBookById(id);
  }

  addToCart(book: Book) {
    this.store.dispatch(addBookToCart({addedBook: book}))
  }

}
