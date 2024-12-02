import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { CategorySliderComponent } from './category-slider/category-slider.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, MainSliderComponent, CategorySliderComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CarouselModule,
    FormsModule,
    SharedModule,
  ],
})
export class PagesModule {}
