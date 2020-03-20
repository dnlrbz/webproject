import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {allCartItems} from "../store/selectors/cart-selectors";
import {CartItem} from "../store/reducers/cart-reducer";
import {RootState} from "../store/root-state";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItems: Observable<CartItem[]> = this.store.select(allCartItems);

  constructor(private store: Store<RootState>) {
  }

  ngOnInit(): void {
  }

}
