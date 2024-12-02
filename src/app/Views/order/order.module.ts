import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { AddressComponent } from './address/address.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddressComponent],
  imports: [CommonModule, OrderRoutingModule, ReactiveFormsModule],
})
export class OrderModule {}
