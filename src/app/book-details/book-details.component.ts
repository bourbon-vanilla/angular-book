import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
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
    this.bs
      .getSingleBy(isbn)
      .subscribe(book => 
        this.book = book);
  }

  getRating(num?: number){
    return new Array(num);
  }

  removeBook() {
    if (confirm('Buch wirklich löschen?')) {
      this.bs.remove(this.book.isbn)
        .subscribe(res => this.router.navigate(
          ['../'],
          {relativeTo: this.route}
        )
      );
    }
  }

}
