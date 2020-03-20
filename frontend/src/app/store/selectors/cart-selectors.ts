import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CartItem, CartState} from "../reducers/cart-reducer";

const cartItems = createFeatureSelector<CartState>('cartItems');


export const allCartItems = createSelector(
    cartItems,
    cartItems => Object.values(cartItems.entities)
);

export const cartCount = createSelector(
    cartItems,
    (cartItems) => cartItems.ids.length.toString()
);

export const cartPrice = createSelector(
    cartItems,
    cartItems => Object.values(cartItems.entities).reduce((sum: number, currentCartItem: CartItem) => {
      return sum + currentCartItem.price;
    }, 0)
);
