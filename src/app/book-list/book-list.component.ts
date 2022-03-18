import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import { IBook } from '../shared/ibook';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: IBook[] = [];

  constructor(private bookStore: BookStoreService) { }

  ngOnInit(): void {
    this.bookStore.getAll().subscribe(res => this.books = res);
  }

}
