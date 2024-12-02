import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { LoggedCardComponent } from './logged-card/logged-card.component';


@NgModule({
  declarations: [
    LoggedCardComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }
