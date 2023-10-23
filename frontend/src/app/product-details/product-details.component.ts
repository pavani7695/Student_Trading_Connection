import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from '../services/product-service/product.service';
import { Product } from '../models/product/product';
import { UserService } from '../services/user-service/user.service';
import { User } from '../models/user/user';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent {
  product: Product = new Product();
  seller: User = new User();
  user: User = new User();

  constructor(
    private _router: Router,
    private _productService: ProductService,
    private _userService: UserService
  ) {
    this.product = this._productService.getProduct();
    this.user = this._userService.getUser();
  }

  onInit() {}

  // * Back button
  goToBuyComponent() {
    this._router.navigate(["/home/buy"]);
  }

  // * Seller Details *
  viewSellerDetailsBySendingProduct(product: Product) {
    // this._router.navigate(["sellerDetails"]);
    this._productService.setProduct(product);
    this._router.navigate(["/sellerDetails", product.sellerID]);
  }

  // * In-person Inspection Request *
  inPersonInspectionRequest(product: Product) {
    this._productService
      .updateProductStatus(this.user.id, this.product.productID, 1)
      .subscribe(
        (data) => {
          console.log("InPerson Inspection Request Sent: " + data);
          alert("Inspection Request sent successfully");
        },
        (error) => {
          if (error.status === 403) {
            alert(
              "Inspection Request already sent, check cart for more information"
            );
          } else {
            alert("Inspection Request sent successfully");
          }
        }
      );
  }

  //  * Buy *
  buy(product: Product) {
    console.log("Buy for Product:" + product.title);
  }
}
