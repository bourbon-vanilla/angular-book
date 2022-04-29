import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  @Output() submitBook = new EventEmitter<IBook>();
  @ViewChild('bookForm') bookForm!: NgForm;

  constructor() {
    this.book = BookFactory.empty();
    this.thumbnail = { url : '', title : ''}
  }

  
  ngOnInit(): void {
    
  }

  submitForm(): void {
    this.book.thumbnails = [ this.thumbnail ];

    this.submitBook.emit(this.book);
    this.book = BookFactory.empty();
    this.bookForm.reset();
  }

}
