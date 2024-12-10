import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedCardComponent } from './logged-card/logged-card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loggedCard',
    pathMatch: 'full',
  },
  {
    path: 'loggedCard',
    component: LoggedCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
