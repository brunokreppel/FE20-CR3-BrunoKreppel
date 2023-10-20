import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { OrderCartComponent } from './order-cart/order-cart.component';

const routes: Routes = [{
  path: "", component:HomeComponent
},{
  path: "AboutUs", component:AboutUsComponent
},{
  path: "productDetails/:id", component: DetailsComponent
},{
  path: "Menu", component: MenuComponent
},{
  path: "order-cart", component: OrderCartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
