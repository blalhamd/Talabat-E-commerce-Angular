import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Directive({
  selector: '[appClaimsMet]',
})
export class ClaimsMetDirective implements OnInit {
  @Input('appClaimsMet') claimsReq!: Function;
  constructor(private _ele: ElementRef, private _authService: AuthService) {}

  ngOnInit(): void {
    var claims = this._authService.getClaims();

    if (!this.claimsReq(claims)) {
      this._ele.nativeElement.style.display = 'none';
    }
  }
}
