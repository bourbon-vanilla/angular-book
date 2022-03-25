import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { IBook } from '../shared/ibook';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public foundBooks: IBook[] = [];
  public isLoading: boolean = false;

  private keyUp$ = new Subject<string>();

  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit(): void {
    this.keyUp$
      .pipe(
        filter(searchTerm => searchTerm.length >= 3),
        debounceTime(500), // wait till 500ms no input was donw
        distinctUntilChanged(), // if the previous element was same - skip
        tap(() => this.isLoading = true), // 'tap' operator lets us do some private actions in the pipe
        switchMap(searchTerm => this.bookStoreService.getAllSearch(searchTerm)), // 'switchMap' operator does not wait till previous request response came back, but cancels it and makes next request (see also concatMap(), mergeMap(), switchMap(), exhaustMap())
        tap(() => this.isLoading = false))
      .subscribe(foundBooks => this.foundBooks = foundBooks);
  }

  handleNextKey(searchInputBoxValue: string){
    this.keyUp$.next(searchInputBoxValue);
  }

}
