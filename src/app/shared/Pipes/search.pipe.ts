import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Models/Product';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], text: string): Product[] {
    return products.filter((p) =>
      p.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
  }
}
