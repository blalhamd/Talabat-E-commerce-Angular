import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _httpClient: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this._httpClient.get(`${environment.baseUrl}/api/v1/categories`);
  }
}
