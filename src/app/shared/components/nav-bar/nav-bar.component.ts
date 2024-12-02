import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { CardService } from '../../Services/card.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  IsLogin: boolean = false;
  numberOfItems: number = 0;
  constructor(private _auth: AuthService, private _cardService: CardService) {}

  ngOnInit(): void {
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

  OnLogOut() {
    this._auth.LogOut();
  }
}
