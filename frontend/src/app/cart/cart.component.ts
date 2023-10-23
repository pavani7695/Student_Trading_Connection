import { Component } from '@angular/core';
import { ProductService } from '../services/product-service/product.service';
import { Router } from '@angular/router';
import { Product } from '../models/product/product';
import { data } from 'jquery';
import { UserService } from '../services/user-service/user.service';
import { User } from '../models/user/user';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  products: Product[] = [];
  user = new User();

  constructor(
    private _productService: ProductService,
    private _userService: UserService,
    private _router: Router
  ) {
    this.user = _userService.getUser();
    this.getProductsWithStatus();
  }

  // * Get product with status=1 [Requested for inspection]
  getProductsWithStatus() {
    console.log("UserName: " + this.user.userName);
    this._productService.getProductsWithStatus(this.user.id,1).subscribe(
      (data) => {
        this.products = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
