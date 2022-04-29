import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { BookStoreService } from '../shared/book-store.service';
import { IBook } from '../shared/ibook';

@Component({
  selector: 'bm-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(
    private logger: NGXLogger,
    private bookStore: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.logger.info("Here some info from admin area")
  }

  createBook(book: IBook) {
    this.bookStore.create(book)
      .subscribe(() => {
        this.router.navigate(
          ['../..', 'books'], { relativeTo: this.route });
      });
  }
}
