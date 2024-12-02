import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductsAddComponent,
    ProductsUpdateComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CarouselModule,
    FormsModule,
    SharedModule,
  ],
})
export class ProductsModule {}
