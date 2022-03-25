import { IThumbnail } from "./ithumbnail";

export interface IBookRaw {
    isbn: string;
    title: string;
    authors: string[];
    published: string;
    subtitle?: string;
    rating?: number;
    thumbnails?: IThumbnail[];
    description?: string;
}
