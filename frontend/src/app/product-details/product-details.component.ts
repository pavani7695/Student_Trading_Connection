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

  // getProductsByID() {
  //   this._productService
  //     .getProductByIdFromRemote(this.product.productID)
  //     .subscribe(
  //       (data) => {
  //         console.log("ProductByID: " + data);
  //         this.product = data;
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }

  // getSellerByID(){
  //       this._userService.getUserByID(this.product.sellerID).subscribe(
  //         (data) => {
  //           this.seller = data;
  //           console.log("Seller Name: " + this.seller.userName);
  //         },
  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  // }

  // * Seller Details *
  viewSellerDetailsBySendingProduct(product: Product) {
    // this._router.navigate(["sellerDetails"]);
    this._productService.setProduct(product);
    this._router.navigate(["/sellerDetails", product.sellerID]);
  }

  // * Inperson Inspection Request *
  // inPersonInspectionRequest(product: Product) {
  //   this._productService
  //     .updateProductStatus(this.user.id, this.product.productID, 1)
  //     .subscribe(
  //       (data) => {
  //         console.log("InPerson Inspection Request Sent: " + data);
  //         alert("Inspection Request sent successfully");
  //       },
  //       (error) => {
  //         console.log("InPerson Inspection Request Error: " + error);
  //         alert("Inspection Request already sent");
  //       }
  //     );
  // }

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
            console.log("InPerson Inspection Request Error: " + error);
            alert("You are not authorized to update this product.");
          } else {
            console.log("InPerson Inspection Request Error: " + error);
            alert("An error occurred while sending the inspection request.");
          }
        }
      );
  }

  //  * Buy *
  buy(product: Product) {
    console.log("Buy for Product:" + product.title);
  }
}
