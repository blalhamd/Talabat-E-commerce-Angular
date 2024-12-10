import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';
import { RolesAndPermissions } from '../../shared/utiles/utile';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ProductsListComponent,
    data: {
      claimsReq: (claims: any) =>
        claims.role ===
        'Admin' /* && claims.permissions.includes('CanViewProducts') */,
    },
  },
  {
    path: 'Edit/:id',
    component: ProductsUpdateComponent,
    data: { claimsReq: RolesAndPermissions.AdminOnly },
  },
  {
    path: 'list/:id',
    component: ProductsDetailsComponent,
    data: {
      claimsReq: RolesAndPermissions.AdminAndUser,
    },
  },
  {
    path: 'Add',
    component: ProductsAddComponent,
    data: { claimsReq: RolesAndPermissions.AdminOnly },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
