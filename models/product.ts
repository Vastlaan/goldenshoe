import {ProductProps} from '../types'

export default class Product implements ProductProps{

  id: number;
  category: string;
  group: string;        // actual product's family includes all variations of colors and sizes
  displayName: string;  // usually the same as group
  price: number;
  color: string;        // hex value
  size: string;
  image: string;
  stock: number;
  isPromoted: boolean;

  constructor(category:string, group: string, displayName: string, price: number, color: string, image:string, size:string, stock: number, isPromoted?: boolean){
    this.id = Math.random() * 1000000;
    this.category = category
    this.group = group
    this.displayName = displayName
    this.price = price
    this.color= color
    this.image= image
    this.size=size
    this.stock= stock
    this.isPromoted= isPromoted || false
  }
}

export const products = [
  // Desert Nelli
  new Product('men', 'Desert Nelli', 'Desert Nelli', 22.99, '#e5383b', '/img/men/shoe-men-1.jpg', '41', 20),
  new Product('men', 'Desert Nelli', 'Desert Nelli', 22.99, '#e5383b', '/img/men/shoe-men-1.jpg', '42', 18),
  new Product('men', 'Desert Nelli', 'Desert Nelli', 22.99, '#e5383b', '/img/men/shoe-men-1.jpg', '44', 20, true),
  new Product('men', 'Desert Nelli', 'Desert Nelli', 22.99, '#e5383b', '/img/men/shoe-men-1.jpg', '46', 19),
  new Product('men', 'Desert Nelli', 'Desert Nelli', 22.99, '#222','/img/men/shoe-men-1.jpg',  '42', 10),
  new Product('men', 'Desert Nelli', 'Desert Nelli', 22.99, '#222','/img/men/shoe-men-1.jpg', '44', 19),

  // Half shoe Maya
  new Product('men', 'Half shoe Maya', 'Half shoe Maya', 35.49, '#e5383b', '/img/men/shoe-men-2.jpg', '41', 20),
  new Product('men', 'Half shoe Maya', 'Half shoe Maya', 35.49, '#e5383b', '/img/men/shoe-men-2.jpg', '46', 18),
  new Product('men', 'Half shoe Maya', 'Half shoe Maya', 35.49, '#f6da1c', '/img/men/shoe-men-2.jpg', '44', 20, true),
  new Product('men', 'Half shoe Maya', 'Half shoe Maya', 35.49, '#f6da1c', '/img/men/shoe-men-2.jpg', '45', 19),
  new Product('men', 'Half shoe Maya', 'Half shoe Maya', 35.49, '#222','/img/men/shoe-men-2.jpg',  '42', 10),
  new Product('men', 'Half shoe Maya', 'Half shoe Maya', 35.49, '#222','/img/men/shoe-men-2.jpg', '44', 19),

  // Half shoe Tom
  new Product('men', 'Half shoe Tom', 'Half shoe Tom', 29.99, '#e5383b', '/img/men/shoe-men-3.jpg', '41', 20),
  new Product('men', 'Half shoe Tom', 'Half shoe Tom', 29.99, '#e5383b', '/img/men/shoe-men-3.jpg', '46', 18),
  new Product('men', 'Half shoe Tom', 'Half shoe Tom', 29.99, '#f6da1c', '/img/men/shoe-men-3.jpg', '44', 20),
  new Product('men', 'Half shoe Tom', 'Half shoe Tom', 29.99, '#f6da1c', '/img/men/shoe-men-3.jpg', '45', 19),
  new Product('men', 'Half shoe Tom', 'Half shoe Tom', 29.99, '#222','/img/men/shoe-men-3.jpg',  '42', 10),
  new Product('men', 'Half shoe Tom', 'Half shoe Tom', 29.99, '#222','/img/men/shoe-men-3.jpg', '44', 19),

  // Gracia
  new Product('women', 'Gracia', 'Gracia', 24.89, '#e5383b', '/img/women/shoe-women-1.jpg', '38', 20),
  new Product('women', 'Gracia', 'Gracia', 24.89, '#e5383b', '/img/women/shoe-women-1.jpg', '39', 18),
  new Product('women', 'Gracia', 'Gracia', 24.89, '#f6da1c', '/img/women/shoe-women-1.jpg', '40', 20),
  new Product('women', 'Gracia', 'Gracia', 24.89, '#f6da1c', '/img/women/shoe-women-1.jpg', '41', 19),
  new Product('women', 'Gracia', 'Gracia', 24.89, '#222','/img/women/shoe-women-1.jpg',  '41', 10),
  new Product('women', 'Gracia', 'Gracia', 24.89, '#222','/img/women/shoe-women-1.jpg', '40', 19),
  // Passia
  new Product('women', 'Passia', 'Passia', 23.00, '#e5383b', '/img/women/shoe-women-2.jpg', '38', 20, true),
  new Product('women', 'Passia', 'Passia', 23.00, '#e5383b', '/img/women/shoe-women-2.jpg', '39', 18),
  new Product('women', 'Passia', 'Passia', 23.00, '#f6da1c', '/img/women/shoe-women-2.jpg', '40', 20),
  new Product('women', 'Passia', 'Passia', 23.00, '#f6da1c', '/img/women/shoe-women-2.jpg', '41', 19),
  new Product('women', 'Passia', 'Passia', 23.00, '#222','/img/women/shoe-women-2.jpg',  '41', 10),
  new Product('women', 'Passia', 'Passia', 23.00, '#222','/img/women/shoe-women-2.jpg', '40', 19),
  // Georgia
  new Product('women', 'Georgia', 'Georgia', 49.00, '#e5383b', '/img/women/ballerina-women-3.jpg', '38', 20, true),
  new Product('women', 'Georgia', 'Georgia', 49.00, '#e5383b', '/img/women/ballerina-women-3.jpg', '39', 18),
  new Product('women', 'Georgia', 'Georgia', 49.00, '#f6da1c', '/img/women/ballerina-women-3.jpg', '40', 20),
  new Product('women', 'Georgia', 'Georgia', 49.00, '#f6da1c', '/img/women/ballerina-women-3.jpg', '41', 19),
  new Product('women', 'Georgia', 'Georgia', 49.00, '#222','/img/women/ballerina-women-3.jpg',  '41', 10),
  new Product('women', 'Georgia', 'Georgia', 49.00, '#222','/img/women/ballerina-women-3.jpg', '40', 19),
]