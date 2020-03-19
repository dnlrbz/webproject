import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../domain/book";
import {environment} from "../../../environments/environment";
import {finalize, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public isLoading: boolean;

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    this.isLoading = true;
    return this.http.get<ResponseBooks>(environment.BASE_PATH + "/books").pipe(
        map(response => response._embedded.books),
        finalize(() => this.isLoading = false)
    );
  }

  getBookById(id: number): Observable<Book> {
    this.isLoading = true;
    return this.http.get<Book>(environment.BASE_PATH + "/books/" + id).pipe(
        finalize(() => this.isLoading = false)
    );
  }
}

interface ResponseBooks {
  _embedded: {
    books: Book[];
  }
}



