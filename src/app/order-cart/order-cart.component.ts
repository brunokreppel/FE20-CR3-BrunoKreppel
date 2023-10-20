// order-cart.component.ts

import { Component, OnInit } from '@angular/core';
import { Iprodcts } from '../Iproducts';
import { OrderCartService } from '../order-cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css']
})
export class OrderCartComponent implements OnInit {
  cart: Array<Iprodcts> = [];

  constructor(private CartService: OrderCartService) {}

  minusQtty(product: Iprodcts) {
    this.CartService.minusQtty(product);
  }

  plusQtty(product: Iprodcts) {
    this.CartService.plusQtty(product);
  }

  deleteItem(product: Iprodcts) {
    this.CartService.deleteItem(product);
  }

  calcTotal(): number {
    let total = 0;
    this.cart.forEach((product) => {
      total += product.price * product.qtty;
    });
    return total;
  }

  calcDiscountedTotal(): number {
    const total = this.calcTotal();
    if (total > 40) {
      const discount = total * 0.15;
      return total - discount;
    }
    return total;
  }

  ngOnInit(): void {
    this.cart = this.CartService.getCart();
  }
  
  formatNumber(value: number): string {
    return (value || 0).toFixed(2);
  }
  placeOrder() {
    this.cart = [];
    
    Swal.fire({
      title: 'Thank you for your order!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
}
