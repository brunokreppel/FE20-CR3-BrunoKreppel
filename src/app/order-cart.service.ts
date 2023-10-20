import { Injectable } from '@angular/core';
import { Iprodcts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class OrderCartService {
cart: Iprodcts[] = [];

constructor() { }

addToOrderCart(product: Iprodcts){
if (this.cart.find((val) => val.name === product.name)){
  product.qtty++;
}else{
  this.cart.push(product);
}}

plusQtty(product: Iprodcts){
  product.qtty++;
}

minusQtty(product: Iprodcts){
  if(product.qtty > 1){
    product.qtty--;
  }else{
    this.deleteItem(product)
  }
}

deleteItem(product:Iprodcts){
const index = this.cart.findIndex((item) => item.name === product.name);
if (index !== -1){
  this.cart[index].qtty = 1;
  this.cart.splice(index, 1)
}
}

getCart(){
  return this.cart
}



}
