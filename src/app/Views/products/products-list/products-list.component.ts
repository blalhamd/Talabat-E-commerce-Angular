import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/Models/Product';
import { ProductService } from '../../../shared/Services/product.service';
import { CardService } from '../../../shared/Services/card.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  searchValue: string = '';
  constructor(
    private _ProductService: ProductService,
    private _CardService: CardService
  ) {}

  ngOnInit(): void {
    this.GetProducts();
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
