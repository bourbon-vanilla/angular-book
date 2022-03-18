import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './ibook';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api3.angular-buch.com';

  constructor(private http: HttpClient) { 
    
  }

  getAll(): Observable<IBook[]> {
    return this.http.get<any[]>(`${this.api}/books`);
  }

  getSingleBy(isbn: string): Observable<IBook> {
    let book = this.http.get<any>(`${this.api}/book/${isbn}`);
    return book!; // ! says, that book is never null or undefined
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(
      `${this.api}/book/${isbn}`, 
      { responseType: 'text'}
    );
  }
}
