import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {allCartItems, cartItemsIdList, cartPrice} from "../store/selectors/cart-selectors";
import {CartItem} from "../store/reducers/cart-reducer";
import {RootState} from "../store/root-state";
import {decreaseItem, deleteAllItems, increaseItem} from "../store/actions/cart-actions";
import {OrderDialogComponent} from "./order-dialog/order-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {switchMap, take, tap} from "rxjs/operators";
import {OrderService} from "./services/order.service";
import {Order} from "./domain/order";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  public cartItems: Observable<CartItem[]> = this.store.select(allCartItems);
  public totalPrice: number;

  public displayedColumns: string[] = ['title', 'price', 'amount'];

  constructor(private store: Store<RootState>, public dialog: MatDialog,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.store.select(cartPrice).pipe(tap(price => {
      this.totalPrice = price;
    })).subscribe(() => {
    });
  }

  increaseAmount(cartItemId: number) {
    this.store.dispatch(increaseItem({itemId: cartItemId}))
  }

  decreaseAmount(cartItemId: number) {
    this.store.dispatch(decreaseItem({itemId: cartItemId}))
  }

  openOrderDialog() {

    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '300px',
      hasBackdrop: true,
      data: {totalPrice: this.totalPrice}
    });

    dialogRef.afterClosed().subscribe(email => {
      console.log(email);
      if (email) {
        this.sendOrder(email);
      }
    });
  }

  sendOrder(email: string) {
    this.store.select(cartItemsIdList).pipe(
        switchMap((ids: number[]) => {
          const order = new Order(this.totalPrice, ids, email);
          return this.orderService.sendOrder(order);
        }),
        take(1)
    ).subscribe(() => {
      this.store.dispatch(deleteAllItems());
    });

  }

}
