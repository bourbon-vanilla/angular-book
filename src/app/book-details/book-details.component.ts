import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { IBook } from '../shared/ibook';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: IBook;

  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute
  ) {
    this.book = {
      isbn: '',
      title: '',
      authors: [],
      published: new Date(2000, 1, 1)
    }
   }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const isbn = params.get('isbn') ?? '';
    this.book = this.bs.getSingleBy(isbn);
  }

  getRating(num?: number){
    return new Array(num);
  }

}
