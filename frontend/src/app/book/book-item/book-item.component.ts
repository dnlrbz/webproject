import {Component, Input} from '@angular/core';
import {Book} from "../domain/book";
import {Store} from "@ngrx/store";

import {addBookToCart} from "../../store/actions/cart-actions";
import {RootState} from "../../store/root-state";


@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {

  @Input()
  book: Book;

  constructor(private store: Store<RootState>) {
  }

  addToCart(book: Book) {
    this.store.dispatch(addBookToCart({addedBook: book}))
  }

}
