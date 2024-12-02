import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { shippingAddress } from '../Models/shippingAddress';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private _HttpClient: HttpClient) {}

  CheckOutSession(
    cardId: string,
    urlPath: string,
    address: shippingAddress
  ): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/orders/checkout-session/${cardId}`,
      {
        shippingAddress: address,
      },
      {
        params: { url: urlPath },
      }
    );
  }
}
