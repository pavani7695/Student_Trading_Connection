import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration/registration.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product-service/product.service';
import { Product } from '../models/product/product';
import { UserService } from '../services/user-service/user.service';
import { User } from '../models/user/user';

@Component({
  selector: "app-sell",
  templateUrl: "./sell.component.html",
  styleUrls: ["./sell.component.scss"],
})
export class SellComponent {
  product = new Product();
  user = new User();
  msg = "";
  constructor(
    private productService: ProductService,
    private userService: UserService,
    private _router: Router
  ) {
    this.user = userService.getUser();
    this.product.sellerID = this.user.id;
    this.getProductSoldByMe();
  }

  onInit() {}

  addProduct() {
    this.productService.addProductFromRemote(this.product).subscribe(
      (data) => {
        console.log(
          "Responce recived while adding a product" +
            JSON.stringify(this.product)
        );
        console.log("Seller:" + this.user.userName);
        this.msg = "Product Added";
      },
      (error) => {
        console.log("Exception occured while adding a product");
      }
    );
  }

  myProducts: Product[] = [];
  getProductSoldByMe() {
    this.productService.getProductsBySellerIDFromRemote(this.user.id).subscribe(
      (data) => {
        console.log("Products sold by me: " + JSON.stringify(data));
        this.myProducts = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
