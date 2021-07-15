import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from '../shared/ibook';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
@Input() book: IBook;
@Output() showListEvent = new EventEmitter<any>();


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

  getRating(num?: number){
    return new Array(num);
  }

  showBookList(){
    this.showListEvent.emit();
  }

}
