import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { CardService } from '../../Services/card.service';
import { UserService } from '../../Services/user.service';
import { RolesAndPermissions } from '../../utiles/utile';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  IsLogin: boolean = false;
  numberOfItems: number = 0;
  Name: string = '';
  rolesAndPermissions = RolesAndPermissions;
  constructor(
    private _auth: AuthService,
    private _cardService: CardService,
    private _UserService: UserService
  ) {}

  ngOnInit(): void {
    this.GetLoggedUserName();
    this._auth.userData.subscribe({
      next: () => {
        if (this._auth.userData.getValue() !== null) {
          this.IsLogin = true;
        } else {
          this.IsLogin = false;
        }
      },
      error: (err) => console.log(err),
    });

    this._cardService.count.subscribe({
      next: (res) => {
        this.numberOfItems = res;
      },
    });
  }

  GetLoggedUserName() {
    if (this._auth.IsLoggedIn()) {
      this.Name = this._UserService.GetUserProfile();
    }
  }

  OnLogOut() {
    this._auth.LogOut();
  }
}
