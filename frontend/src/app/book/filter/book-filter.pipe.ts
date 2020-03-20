import {Pipe, PipeTransform} from '@angular/core';
import {Book} from "../domain/book";

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[], filterString: string): Book[] {
    if (!books || !filterString) {
      return books;
    }
    return books.filter((book: Book) => BookFilterPipe.propertiesContainString(book, filterString));
  }

  private static propertiesContainString(book: Book, filterString: string): boolean {
    return `${book.title} ${book.author} ${book.price}`.toLowerCase().includes(filterString.toLowerCase());
  }

}
