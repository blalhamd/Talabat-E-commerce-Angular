import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/Services/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css',
})
export class AddressComponent implements OnInit {
  address!: FormGroup;
  cardId: string | null = '';
  IsLoading: boolean = false;

  get details() {
    return this.address.get('details');
  }
  get phone() {
    return this.address.get('phone');
  }
  get city() {
    return this.address.get('city');
  }
  constructor(
    private _orderService: OrderService,
    private _fb: FormBuilder,
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm() {
    this.address = this._fb.group({
      details: [null, Validators.required],
      phone: [null, Validators.required],
      city: [null, Validators.required],
    });
  }

  getCardId(): string | null {
    this._activateRoute.queryParamMap.subscribe({
      next: (res) => {
        this.cardId = res.get('cardId');
      },
      error: (err) => {
        console.log(err);
        return null;
      },
    });

    return this.cardId;
  }

  OnSubmit(model: FormGroup) {
    this.IsLoading = true;
    this._orderService
      .CheckOutSession(this.getCardId()!, environment.baseUrl, model.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.IsLoading = false;
          window.location.href = res.session.url;
        },
        error: (err) => {
          console.log(err);
          this.IsLoading = false;
        },
      });
  }
}
