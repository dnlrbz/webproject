import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {State} from "../store/reducers/book-reducer";
import {cartTotalAmount} from "../store/selectors/book-selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  totalItemsAmount: Observable<string> = this.store.select(cartTotalAmount);

  constructor(private router: Router, private store: Store<State>) {
  }

  navigateToHome() {
    this.router.navigateByUrl('/books');
  }

}
