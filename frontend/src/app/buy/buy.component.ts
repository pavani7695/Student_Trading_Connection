import { Component } from "@angular/core";
import { ProductService } from "../services/product-service/product.service";
import { Router } from "@angular/router";
import { Product } from "../models/product/product";
import { User } from "../models/user/user";
import { UserService } from "../services/user-service/user.service";

@Component({
  selector: "app-buy",
  templateUrl: "./buy.component.html",
  styleUrls: ["./buy.component.scss"],
})
export class BuyComponent {
  user = new User();
  products: Product[] = [];
  ngOnInit(): void {}

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _userService: UserService
  ) {
    this.user = this._userService.getUser();
    this.getProducts();

  }

  getProducts() {
    this._productService.getAvailableProductsFromRemote(this.user.id).subscribe(
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
