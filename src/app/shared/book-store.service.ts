import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

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

  getAll(): Observable<IBook[]> {
    return this.http
      .get<IBookRaw[]>(`${this.api}/books`)
      .pipe( // <-- here array
        retry(3),
        map(booksRaw => booksRaw
          .map(bookRaw => BookFactory.from(bookRaw)), // this 'map' is the array-method, not the rxjs-operator
        catchError(this.handleError)) 
      );
  }

  getAllSearch(searchTerm: string): Observable<IBook[]> {
    return this.http
      .get<IBookRaw[]>(`${this.api}/books/search/${searchTerm}`)
      .pipe(
        retry(3),
        map(booksRaw =>
          booksRaw.map(bookRaw => BookFactory.from(bookRaw)),
        ),
        catchError(this.handleError)
    );
  }

  getSingleBy(isbn: string): Observable<IBook> {
    return this.http
      .get<IBookRaw>(`${this.api}/book/${isbn}`)
      .pipe( // <-- here single
        retry(3),
        map(bookRaw => BookFactory.from(bookRaw)),
        catchError(this.handleError)
      );
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(
      `${this.api}/book/${isbn}`, 
      { responseType: 'text'}
    );
  }

  handleError(errorResponse: HttpErrorResponse) : Observable<any> {
    console.error('Error aufgetreten!');
    return throwError(errorResponse);
  }
}
