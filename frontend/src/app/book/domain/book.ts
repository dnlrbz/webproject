import {BaseEntity} from "../../base/base-entity";

export class Book extends BaseEntity {
  author: string;
  title: string;
  price: number;
  imageUrl: string;
  rating: number;
  description: string;


  constructor(author: string, title: string, price: number, imageUrl: string, rating: number, description: string) {
    super();
    this.author = author;
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.rating = rating;
    this.description = description;
  }
  
}
