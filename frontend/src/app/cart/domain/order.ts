export class Order {
  totalPrice: number;
  itemIds: number[];
  email: string;


  constructor(totalPrice: number, itemIds: number[], email: string) {
    this.totalPrice = totalPrice;
    this.itemIds = itemIds;
    this.email = email;
  }
}
