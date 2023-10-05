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

  constructor(
    private _router: Router,
    private _productService: ProductService,
    private _userService: UserService
  ) {
    this.product = this._productService.getProduct();
  }

  onInit() {

  }

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

  viewSellerDetailsBySendingProduct(product: Product){
    // this._router.navigate(["sellerDetails"]);
    this._productService.setProduct(product);
    this._router.navigate(["/sellerDetails", product.sellerID]);
  }
}
