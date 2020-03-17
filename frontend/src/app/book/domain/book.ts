import {BaseEntity} from "../../base/base-entity";

export class Book extends BaseEntity {
  author: string;
  title: string;
  price: number;
  imageUrl: string;
  rating: number;
  description: string;
}
