import { Component, OnDestroy, OnInit } from '@angular/core';
import { errorService } from '../../Services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class errorComponent implements OnInit, OnDestroy {
  ErrorMessage: string | null = 'Something went wrong.';

  constructor(private _ErrorService: errorService) {}

  ngOnInit(): void {
    this._ErrorService.error$.subscribe({
      next: (res) => (this.ErrorMessage = res),
    });
  }

  ngOnDestroy(): void {
    this._ErrorService.clearErrors();
  }
}
