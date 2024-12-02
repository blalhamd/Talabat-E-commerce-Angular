import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { authGuard } from '../../shared/Guards/auth.guard';

const routes: Routes = [
  { path: 'checkout', canActivate: [authGuard], component: AddressComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
