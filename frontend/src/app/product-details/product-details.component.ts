import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from '../services/product-service/product.service';
import { Product } from '../models/product/product';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent {
  product: Product = new Product();
  constructor(
    private _router: Router,
    private _productService: ProductService
  ) {
    this.product = this._productService.getProduct();
  }

  onInit() {  
  }


    getProductsByID() {
    this._productService.getProductByIdFromRemote(this.product.productID).subscribe(
      (data) => {
        console.log("ProductByID: "+data);
        this.product = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
