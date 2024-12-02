import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Talabat_ECommerce_Angular';
  MyName: string = 'Bilal Sayed';
  imgSrc: string = 'assets/images/light.jpg';
  imgAlt: string = 'light.jpg';
  imgWidth: number = 200;
  imgHeight: number = 200;

  sayWelcome() {
    console.log('Hello Bilal');
  }
}
