import {Pipe, PipeTransform} from '@angular/core';
import {Book} from "../domain/book";

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[], filterString: string, ...args: unknown[]): unknown {
    if (!books || !filterString) {
      return books;
    }
    return books.filter((book: Book) =>
        Object.values(book).some((property: any) => property.toString().toLowerCase().includes(filterString.toLowerCase())));
  }

}
