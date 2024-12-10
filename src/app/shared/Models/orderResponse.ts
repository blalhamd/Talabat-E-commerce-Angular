export class OrderResponse {
  id: number = 0;
  buyerEmail: string = '';
  dateTime: Date = new Date();
  shippingAddress: shippingAddress = {
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    street: '',
  };
  deliveryMethodId: number = 0;
  deliveryMethod: deliveryMethod = {
    shortName: '',
    cost: 0,
  };
  orderStatus: string = '';
  items: Item[] = [];
  subTotal: number = 0;
  total: number = 0;
  paymentIntentId: number = 0;
}

export class shippingAddress {
  firstName: string = '';
  lastName: string = '';
  country: string = '';
  city: string = '';
  street: string = '';
}

export class deliveryMethod {
  shortName: string = '';
  cost: number = 0;
}

export class Item {
  productId: number = 0;
  productName: string = '';
  pictureUrl: string = '';
  price: number = 0;
  qunatity: number = 0;
  orderId: number = 0;
}
