import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {cartCount} from "../store/selectors/cart-selectors";
import {RootState} from "../store/root-state";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  totalItemsAmount: Observable<string> = this.store.select(cartCount);

  constructor(private router: Router, private store: Store<RootState>) {
  }
}
