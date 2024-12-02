import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../shared/Services/card.service';
import { Card } from '../../../shared/Models/card';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logged-card',
  templateUrl: './logged-card.component.html',
  styleUrl: './logged-card.component.css',
})
export class LoggedCardComponent implements OnInit {
  card: Card = {
    _id: '',
    cartOwner: '',
    products: [],
    totalCartPrice: 0,
  };

  constructor(private _cardService: CardService) {}

  ngOnInit() {
    this.getLoggedCard();
  }

  getLoggedCard() {
    this._cardService.GetLoggedUserCart().subscribe({
      next: (res) => {
        this.card = res.data;
      },
    });
  }
  IncremntQuantity(cardId: string, count: number) {
    this._cardService
      .UpdateCartProductQuantity(cardId, count.toString())
      .subscribe({
        next: (res) => {
          console.log(res);
          this.ShowSuccessMessage();
          this.getLoggedCard();
        },
        error: (err) => {
          console.log(err);
          this.ShowErrorMessage();
        },
      });
  }

  decremntQuantity(cardId: string, count: number) {
    this._cardService
      .UpdateCartProductQuantity(cardId, count.toString())
      .subscribe({
        next: (res) => {
          console.log(res);
          this.ShowSuccessMessage2();
          this.getLoggedCard();
        },
        error: (err) => {
          console.log(err);
          this.ShowErrorMessage();
        },
      });
  }

  RemoveSpecificItem(cardId: string) {
    this._cardService.RemoveSpecificCartItem(cardId).subscribe({
      next: (res) => {
        console.log(res);
        this.ShowSuccessMessage2();
        this.getLoggedCard();
      },
      error: (err) => {
        console.log(err);
        this.ShowErrorMessage();
      },
    });
  }

  ShowErrorMessage() {
    Swal.fire({
      title: 'Error!',
      text: 'Error happens!',
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }

  ShowSuccessMessage() {
    Swal.fire({
      title: 'Success!',
      text: 'Product Added Successfully!',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }

  ShowSuccessMessage2() {
    Swal.fire({
      title: 'Success!',
      text: 'Product deleted Successfully!',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }
}
