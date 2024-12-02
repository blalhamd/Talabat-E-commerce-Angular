import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/Models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/Services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CardService } from '../../../shared/Services/card.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent implements OnInit {
  product: Product = {
    sold: 0,
    images: [],
    subcategory: [],
    ratingsQuantity: 0,
    _id: '',
    title: '',
    slug: '',
    description: '',
    quantity: 0,
    price: 0,
    imageCover: '',
    category: {
      _id: '',
      name: '',
      slug: '',
      image: '',
    },
    brand: {
      _id: '',
      name: '',
      slug: '',
      image: '',
    },
    ratingsAverage: 0,
    createdAt: '',
    updatedAt: '',
    id: '',
  };

  productId: string | null = '';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  constructor(
    private _activateRoute: ActivatedRoute,
    private _productService: ProductService,
    private _CardService: CardService
  ) {}

  ngOnInit(): void {
    this._activateRoute.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('id');
        this._productService.GetById(this.productId!).subscribe({
          next: (res) => {
            this.product = res.data;
          },
          error: (err) => console.log(err),
        });
      },
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
