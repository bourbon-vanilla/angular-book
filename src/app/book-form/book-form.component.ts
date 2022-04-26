import { Component, OnInit } from '@angular/core';
import { BookFactory } from '../shared/book-factory';
import { IBook } from '../shared/ibook';
import { IThumbnail } from '../shared/ithumbnail';


@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book: IBook;
  thumbnail: IThumbnail;


  constructor() {
    this.book = BookFactory.empty();
    this.thumbnail = { url : '', title : ''}
  }

  
  ngOnInit(): void {
    
  }

  submitForm(): void {

  }

}
