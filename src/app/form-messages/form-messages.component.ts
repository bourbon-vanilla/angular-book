import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';


interface IStringsByKeys {
  [key: string]: string;
}
interface IStringCollectionsByKeys {
  [key: string]: IStringsByKeys
}

@Component({
  selector: 'bm-form-messages',
  templateUrl: './form-messages.component.html',
  styleUrls: ['./form-messages.component.css']
})
export class FormMessagesComponent implements OnInit {

  @Input() control!: any;
  @Input() controlName!: string;

  private allMessages: IStringCollectionsByKeys;

  constructor() {
    this.allMessages = {
      title: {
        required: 'Ein Buchtitel muss angegeben werden'
      },
      isbn: {
        required: 'Es muss eine ISBN angegeben werden',
        minlength: 'Die ISBN muss mindestens 10 Zeichen haben',
        maxlength: 'Die ISBN darf höchstens 13 Zeichen haben'
      },
      published: {
        required: 'Es muss ein Erscheinungsdatum angegeben werden'
      },
      author: {
        required: 'Es muss ein Autor angegeben werden'
      }
    };
   }

  ngOnInit(): void { }

  errorsForControl(): string[] | null {
    const messages = this.allMessages[this.controlName];

    let ctrl = this.control as AbstractControl;

    if (!ctrl ||
      !ctrl.errors ||
      !messages ||
      !ctrl.dirty
      ) { return null; }

    return Object.keys(ctrl.errors)
      .map(err => messages[err]);
  }

}
