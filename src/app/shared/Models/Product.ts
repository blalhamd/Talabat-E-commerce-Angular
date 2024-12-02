export class Product {
  sold: number = 0;
  images: string[] = [];
  subcategory: {
    _id: string;
    name: string;
    slug: string;
    category: string;
  }[] = [];
  ratingsQuantity: number = 0;
  _id: string = '';
  title: string = '';
  slug: string = '';
  description: string = '';
  quantity: number = 0;
  price: number = 0;
  imageCover: string = '';
  category: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  } = {
    _id: '',
    name: '',
    slug: '',
    image: '',
  };
  brand: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  } = {
    _id: '',
    name: '',
    slug: '',
    image: '',
  };
  ratingsAverage: number = 0;
  createdAt: string = '';
  updatedAt: string = '';
  id: string = '';
}

/*
{
            "sold": 8620,
            "images": [
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg",
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg"
            ],
            "subcategory": [
                {
                    "_id": "6407f1bcb575d3b90bf95797",
                    "name": "Women's Clothing",
                    "slug": "women's-clothing",
                    "category": "6439d58a0049ad0b52b9003f"
                }
            ],
            "ratingsQuantity": 18,
            "_id": "6428ebc6dc1175abc65ca0b9",
            "title": "Woman Shawl",
            "slug": "woman-shawl",
            "description": "Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen",
            "quantity": 225,
            "price": 170,
            "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg",
            "category": {
                "_id": "6439d58a0049ad0b52b9003f",
                "name": "Women's Fashion",
                "slug": "women's-fashion",
                "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
            },
            "brand": {
                "_id": "64089bbe24b25627a253158b",
                "name": "DeFacto",
                "slug": "defacto",
                "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
            },
            "ratingsAverage": 4.8,
            "createdAt": "2023-04-02T02:43:18.400Z",
            "updatedAt": "2024-11-27T19:30:01.406Z",
            "id": "6428ebc6dc1175abc65ca0b9"
        },

*/
