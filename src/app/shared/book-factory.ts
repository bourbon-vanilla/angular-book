import { IBook } from "./ibook";
import { IBookRaw } from "./ibook-raw";

export class BookFactory {
    
    static from(bookRaw: IBookRaw) : IBook{
        return {
            // this operator ('...') lets you 
            //     to distribute all properties from one side to the other
            //     and you override only properties you wish
            ...bookRaw,
            published: new Date(bookRaw.published)
        };
    }

    static empty() : IBook {
        return {
            isbn: '',
            title: '',
            authors: [''],
            published: new Date(),
            subtitle: '',
            rating: 0,
            thumbnails: [
                { url: '', title: '' }
            ],
            description: ''
        };
    }

}
