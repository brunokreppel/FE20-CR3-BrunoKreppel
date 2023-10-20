import { Component, OnInit } from '@angular/core';
import { Iprodcts } from '../Iproducts';
import { ActivatedRoute, Params, Router } from '@angular/router'; // Import Router
import { OrderCartService } from '../order-cart.service';
import { products } from '../products';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: Iprodcts = {} as Iprodcts;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: OrderCartService, private router: Router) {} // Inject Router

  addToOrderCart3() {
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
    
    this.cartService.addToOrderCart(this.product);
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = param['id'];
      this.product = products[this.id];
    });
  }
}
