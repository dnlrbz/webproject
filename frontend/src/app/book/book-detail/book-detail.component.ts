import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../service/book.service";
import {Book} from "../domain/book";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookService: BookService) {
  }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params.id;
    this.bookService.getBookById(id).subscribe((book: Book) => {
      console.log("got book", book);
    })
  }

}
