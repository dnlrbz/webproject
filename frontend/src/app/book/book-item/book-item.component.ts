import {Component, Input} from '@angular/core';
import {Book} from "../domain/book";
import {Router} from "@angular/router";

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {

  @Input()
  book: Book;

  constructor(private router: Router) {
  }

  navigateToBookView(id: number) {
    this.router.navigateByUrl("book/" + id);
  }


}
