import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';
import { authGuard } from '../../shared/Guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', canActivate: [authGuard], component: ProductsListComponent },
  {
    path: 'Edit/:id',
    canActivate: [authGuard],
    component: ProductsUpdateComponent,
  },
  {
    path: 'list/:id',
    canActivate: [authGuard],
    component: ProductsDetailsComponent,
  },
  { path: 'Add', canActivate: [authGuard], component: ProductsAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
