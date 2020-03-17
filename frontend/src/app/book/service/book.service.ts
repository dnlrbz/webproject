import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../domain/book";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<ResponseBooks>(environment.BASE_PATH + "/books").pipe(
        map(response => response._embedded.books)
    );
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(environment.BASE_PATH + "/books/" + id);
  }


}


interface ResponseBooks {
  _embedded: {
    books: Book[];
  }
}



