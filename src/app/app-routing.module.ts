import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './shared/components/layouts/blank/blank.component';
import { AdminComponent } from './shared/components/layouts/admin/admin.component';
import { UserComponent } from './shared/components/layouts/user/user.component';
import { AuthComponent } from './shared/components/layouts/Auth/Auth.component';
import { errorComponent } from './shared/components/error/error.component';
import { authGuard } from './shared/Guards/auth.guard';
import { ForbiddenComponent } from './shared/components/forbidden/forbidden.component';

const routes: Routes = [
  { path: '', redirectTo: 'blank/pages', pathMatch: 'full' },
  {
    path: 'blank',
    component: BlankComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
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
    canActivate: [authGuard],
    canActivateChild: [authGuard],
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
    canActivate: [authGuard],
    canActivateChild: [authGuard],
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
    path: 'forbidden',
    component: ForbiddenComponent,
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
