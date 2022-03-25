import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IBook } from './ibook';
import { IBookRaw } from './ibook-raw';
import { BookFactory } from './book-factory';


@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api3.angular-buch.com';

  constructor(private http: HttpClient) { 
    
  }

  getAlll(): Observable<IBook[]> {
    return this.http.get<any[]>(`${this.api}/books`);
  }

  getAll(): Observable<IBook[]> {
    return this.http
      .get<IBookRaw[]>(`${this.api}/books`)
      .pipe( // <-- here array
        map(booksRaw => booksRaw
          .map(bookRaw => BookFactory.from(bookRaw))) // this 'map' is the array-method, not the rxjs-operator
      );
  }

  getSingleBy(isbn: string): Observable<IBook> {
    return this.http
      .get<IBookRaw>(`${this.api}/book/${isbn}`)
      .pipe( // <-- here single
        map(bookRaw => BookFactory.from(bookRaw))
      );
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(
      `${this.api}/book/${isbn}`, 
      { responseType: 'text'}
    );
  }
}
