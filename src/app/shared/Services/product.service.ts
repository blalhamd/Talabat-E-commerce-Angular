import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _HttpClient: HttpClient) {}

  GetAllProducts(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products`);
  }

  GetById(id: string): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products/${id}`);
  }
}
