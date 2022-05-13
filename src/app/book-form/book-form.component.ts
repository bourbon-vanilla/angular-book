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
  
  public bookForm!: FormGroup;
  @Output() submitBook = new EventEmitter<IBook>();

  public get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  public get thumbnails(): FormArray {
    return this.bookForm.get('thumbnails') as FormArray;
  }


  constructor(private fb: FormBuilder) { }

  
  public ngOnInit(): void {
    this.initForm();
  }


  public submitForm(): void {
    const formValue = this.bookForm.value;
    console.log(formValue.authors);
    const authors = (formValue.authors as string[])
      .filter(author => author);
    const thumbnails = (formValue.thumbnails as IThumbnail[])
      .filter(thumbnail => thumbnail.url);

    const newBook: IBook = {
      ...formValue,
      authors,
      thumbnails
    };

    this.submitBook.emit(newBook);
    this.bookForm.reset();
  }

  public initForm() {
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

  public addAuthorControl() {
    this.authors.push(this.fb.control(''));
  }

  public addThumbnailControl() {
    this.thumbnails.push(
      this.fb.group({ url: '', title: '' }));
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

