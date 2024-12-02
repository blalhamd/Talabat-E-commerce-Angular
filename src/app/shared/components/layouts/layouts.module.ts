import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { BlankComponent } from './blank/blank.component';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './Auth/Auth.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, UserComponent, BlankComponent, AuthComponent],
  imports: [CommonModule, RouterOutlet, FormsModule],
})
export class LayoutsModule {}
