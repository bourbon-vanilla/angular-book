import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookFactory } from '../shared/book-factory';
import { IBook } from '../shared/ibook';
import { IThumbnail } from '../shared/ithumbnail';


@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  
  bookForm!: FormGroup;
  @Output() submitBook = new EventEmitter<IBook>();

  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  get thumbnails(): FormArray {
    return this.bookForm.get('thumbnails') as FormArray;
  }

  constructor(private fb: FormBuilder) {

  }

  
  ngOnInit(): void {
    this.initForm();
  }

  submitForm(): void {
    // this.book.thumbnails = [ this.thumbnail ];

    // this.submitBook.emit(this.book);
    // this.book = BookFactory.empty();
    // this.bookForm.reset();
  }

  initForm() {
    if (this.bookForm)
      return;
    
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: [''],
      isbn: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]],
      description: [''],
      authors: this.buildAuthorsArray(['']),
      thumbnails: this.buildThumbnailsArray([
        { title: '', url: '' }
      ]),
      published: []
    });
  }

  private buildAuthorsArray(values: string[]): FormArray {
    return this.fb.array(values, Validators.required);
  }

  private buildThumbnailsArray(values: IThumbnail[]): FormArray {
    return this.fb.array(
      values.map(tnail => this.fb.group(tnail))
    )
  }

}

