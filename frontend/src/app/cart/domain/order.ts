export class Order {
  totalPrice: number;
  itemIds: Array<number>;
  email: string;


  constructor(totalPrice: number, itemIds: Array<number>, email: string) {
    this.totalPrice = totalPrice;
    this.itemIds = itemIds;
    this.email = email;
  }
}
