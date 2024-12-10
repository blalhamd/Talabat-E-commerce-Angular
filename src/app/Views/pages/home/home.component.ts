import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../shared/Services/product.service';
import { Product } from '../../../shared/Models/Product';
import { CardService } from '../../../shared/Services/card.service';
import Swal from 'sweetalert2';
import { Token_Key } from '../../../shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  searchValue: string = '';
  constructor(
    private _Router: Router,
    private _ProductService: ProductService,
    private _CardService: CardService
  ) {}

  ngOnInit(): void {
    this.CheckLogin();
    this.GetProducts();
  }

  CheckLogin() {
    if (localStorage.getItem(Token_Key) === null) {
      this._Router.navigate(['Auth/Authentication/Login']);
    }
  }

  GetProducts() {
    this._ProductService.GetAllProducts().subscribe({
      next: (res) => {
        this.products = res.data;
      },
      error: (err) => console.log(err),
    });
  }

  OnClick(productId: string) {
    this._CardService.AddToCard(productId).subscribe({
      next: (resData) => {
        this.ShowSuccessMessage();
        // update numberOfCardItems
        this._CardService.count.next(resData.numOfCartItems);
      },
      error: (err) => {
        console.log(err), this.ShowErrorMessage();
      },
    });
  }

  ShowErrorMessage() {
    Swal.fire({
      title: 'Error!',
      text: 'Error happens!',
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }

  ShowSuccessMessage() {
    Swal.fire({
      title: 'Success!',
      text: 'Product Added Successfully!',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }
}
