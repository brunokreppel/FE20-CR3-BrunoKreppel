import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iprodcts } from '../Iproducts';
import { products } from '../products';
import { OrderCartService } from '../order-cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  products: Array<Iprodcts> = products;

  constructor(private cartService: OrderCartService, private router: Router) {}

  addToOrderCart2(index: number) {
    const selectedProduct = this.products[index];
    Swal.fire({
      icon: 'success',
      title: 'Item added to cart',
      showConfirmButton: true,
      confirmButtonText: 'View Cart',
      showCancelButton: true,
      cancelButtonText: 'Continue Shopping',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/order-cart']); 
      }
    });
  
    this.cartService.addToOrderCart(selectedProduct);
  }
}
