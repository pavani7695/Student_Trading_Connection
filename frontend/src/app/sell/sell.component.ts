import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { RegistrationService } from '../services/registration/registration.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product-service/product.service';
import { Product } from '../models/product/product';
import { UserService } from '../services/user-service/user.service';
import { User } from '../models/user/user';
import { MatDialog } from "@angular/material/dialog";
import 'bootstrap/js/dist/modal'; // Import Bootstrap's modal module
import { NgForm } from '@angular/forms';

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
    private _router: Router,
    private dialog: MatDialog
  ) {
    this.user = userService.getUser();
    this.product.sellerID = this.user.id;
    this.getProductSoldByMe();
  }

  ngOnInit() {}

  // --------------------------------------------------------------------------------------------------------------------------------
  // * Add Product to sell
  @ViewChild("addProductForm", { static: false }) addProductForm!: NgForm;

  addProduct() {
    this.productService.addProductFromRemote(this.product).subscribe(
      (data) => {
        console.log(
          "Responce recived while adding a product" +
            JSON.stringify(this.product)
        );
        console.log("Seller:" + this.user.userName);
        this.msg = "Product Added";
        this.getProductSoldByMe();
        alert(this.msg);
        this.addProductForm.resetForm();
      },
      (error) => {
        console.log("Exception occured while adding a product");
      }
    );
  }

  // --------------------------------------------------------------------------------------------------------------------------------
  // * Get Product which I am selling
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

  // --------------------------------------------------------------------------------------------------------------------------------
  // * Delete Product Confirmation
  deleteProduct(product: Product) {
    const confirmation = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmation) {
      // User clicked "OK," delete the product here
      // Call your deleteProduct logic or API call
      this.deleteProductLogic(product);
    }
  }

  // --------------------------------------------------------------------------------------------------------------------------------
  // * Delete Product
  deleteProductLogic(product: Product) {
    this.productService.deleteProductFromRemote(product.productID).subscribe(
      (data) => {
        console.log("Product deleted" + JSON.stringify(data));
        this.getProductSoldByMe();
        alert("Product Deleted");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // --------------------------------------------------------------------------------------------------------------------------------
  // * Edit Product
}
