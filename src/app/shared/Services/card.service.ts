import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  count = new BehaviorSubject(0);
  constructor(
    private _HttpClient: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.GetLoggedUserCart().subscribe({
        next: (res) => {
          this.count.next(res.numOfCartItems);
        },
        error: (err) => console.log(err),
      });
    }
  }

  AddToCard(productId: string): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/cart`, {
      productId: productId,
    });
  }

  UpdateCartProductQuantity(cardId: string, count: string): Observable<any> {
    return this._HttpClient.put(
      `${environment.baseUrl}/api/v1/cart/${cardId}`,
      { count: count }
    );
  }

  GetLoggedUserCart(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`);
  }

  RemoveSpecificCartItem(cardId: string): Observable<any> {
    return this._HttpClient.delete(
      `${environment.baseUrl}/api/v1/cart/${cardId}`
    );
  }

  ClearUserCart(): Observable<any> {
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart`);
  }
}
