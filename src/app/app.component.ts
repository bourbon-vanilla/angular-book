import { Component } from '@angular/core';
import { IBook } from './shared/ibook';

type ViewState = 'list' | 'details';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book: IBook = {
    isbn: '',
    title: '',
    authors: [],
    published: new Date(2000, 1, 1)
  };
  title = 'book-monkey';
  viewState: ViewState = 'list';

  showList(){
    this.viewState = 'list';
  }

  showDetails(book: IBook){
    this.book = book;
    this.viewState = 'details';
  }
}
