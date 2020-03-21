import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../domain/order";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  sendOrder(order: Order): Observable<any> {
    return this.http.post<Order>(environment.BASE_PATH + "/order/send", order);
  }
}
