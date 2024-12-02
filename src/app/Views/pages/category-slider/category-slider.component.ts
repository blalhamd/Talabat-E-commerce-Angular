import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/Services/category.service';
import { Category } from '../../../shared/Models/category';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrl: './category-slider.component.css',
})
export class CategorySliderComponent implements OnInit {
  categories: Category[] = [];

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
        items: 2,
      },
      400: {
        items: 3,
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

  constructor(private _CategoryService: CategoryService) {}

  ngOnInit(): void {
    this.GetProducts();
  }

  GetProducts() {
    this._CategoryService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res.data;
      },
      error: (err) => console.log(err),
    });
  }
}
