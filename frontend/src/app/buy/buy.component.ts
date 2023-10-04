import { Component } from "@angular/core";
import { ProductService } from "../services/product-service/product.service";
import { Router } from "@angular/router";
import { Product } from "../models/product/product";

@Component({
  selector: "app-buy",
  templateUrl: "./buy.component.html",
  styleUrls: ["./buy.component.scss"],
})
export class BuyComponent {
  products: Product[] = [];
  ngOnInit(): void {}

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProductsFromRemote().subscribe(
      (data) => {
        console.log(data);
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  viewProduct(product: Product) {
    this._productService.setProduct(product);
    console.log("ID:"+product.productID);
    this._router.navigate(["/buy",product.productID]);
  }
}
