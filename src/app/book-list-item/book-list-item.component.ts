import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../shared/ibook';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input() book: IBook;

  constructor() {
    this.book = {
      isbn: '',
      title: '',
      authors: [],
      published: new Date(2000, 1, 1)
    }
  }

  ngOnInit(): void {

  }

}
