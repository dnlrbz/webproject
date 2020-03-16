import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../domain/book";

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input()
  book: Book;

  constructor() {
  }

  ngOnInit(): void {
  }

}
