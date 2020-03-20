import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {allCartItems, cartPrice} from "../store/selectors/cart-selectors";
import {CartItem} from "../store/reducers/cart-reducer";
import {RootState} from "../store/root-state";
import {decreaseItem, increaseItem} from "../store/actions/cart-actions";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItems: Observable<CartItem[]> = this.store.select(allCartItems);
  public totalPrice: Observable<number> = this.store.select(cartPrice);

  public displayedColumns: string[] = ['title', 'price', 'amount'];

  constructor(private store: Store<RootState>) {
  }

  ngOnInit(): void {
  }

  increaseAmount(cartItemId: number) {
    this.store.dispatch(increaseItem({itemId: cartItemId}))
  }

  decreaseAmount(cartItemId: number) {
    this.store.dispatch(decreaseItem({itemId: cartItemId}))
  }

}
