import {Component, Input} from '@angular/core';
import {Book} from "../domain/book";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {State} from "../../store/reducers/book-reducer";
import {addBookToCart} from "../../store/actions/book-actions";

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {

  @Input()
  book: Book;

  constructor(private router: Router, private store: Store<State>) {
  }

  navigateToBookView(id: number) {
    this.router.navigateByUrl("book/" + id);
  }

  addToCart(book: Book) {
    this.store.dispatch(addBookToCart({addedBook: book}))
  }

}
