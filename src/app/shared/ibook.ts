import { IThumbnail } from "./ithumbnail";

export interface IBook {
    isbn: string;
    title: string;
    authors: string[];
    published: Date;
    subtitle?: string;
    rating?: number;
    thumbnails?: IThumbnail[];
    description?: string;
}
