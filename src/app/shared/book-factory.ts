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

}
