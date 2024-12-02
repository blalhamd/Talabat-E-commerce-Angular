import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './shared/components/layouts/blank/blank.component';
import { AdminComponent } from './shared/components/layouts/admin/admin.component';
import { UserComponent } from './shared/components/layouts/user/user.component';
import { AuthComponent } from './shared/components/layouts/Auth/Auth.component';
import { errorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'blank/pages', pathMatch: 'full' },
  {
    path: 'blank',
    component: BlankComponent,
    children: [
      {
        path: 'pages',
        loadChildren: () =>
          import('./Views/pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./Views/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
    ],
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./Views/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'card',
        loadChildren: () =>
          import('./Views/card/card.module').then((m) => m.CardModule),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./Views/order/order.module').then((m) => m.OrderModule),
      },
    ],
  },
  {
    path: 'Auth',
    component: AuthComponent,
    children: [
      {
        path: 'Authentication',
        loadChildren: () =>
          import('./Views/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: 'error',
    component: errorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
