import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: "root",
})
export class ProductService {
  product = new Product();

  setProduct(product: Product) {
    this.product = product;
  }
  getProduct() {
    return this.product;
  }

  constructor(private http: HttpClient) {}

  BASE_URL = "http://localhost:9292";

  // * Get all products
  public getProductsFromRemote(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/products`);
  }

  // * Get products by ProductID
  public getProductByIdFromRemote(productID: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/products/${productID}`);
  }

  // * Get Seller Details by sellerID
  public getSellerDetailsFromRemote(sellerID: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/users/${sellerID}`);
  }

  // * Add products
  public addProductFromRemote(product: Product): Observable<any> {
    return this.http.post<any>(
      `${this.BASE_URL}/products/saveProduct`,
      product
    );
  }

  // * Get products by sellerID
  public getProductsBySellerIDFromRemote(selerID: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/products/seller/${selerID}`);
  }

  // * Delete products by ProductID
  public deleteProductFromRemote(productID: number): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/products/${productID}`);
  }

  // * Edit products details
  public editProductDetail(editedProduct: Product): Observable<any> {
    console.log("This is from service:"+editedProduct.productID)
    return this.http.put<any>(
      `${this.BASE_URL}/products/${editedProduct.productID}`,
      editedProduct
    );
  }

  // * Get products of a user buy status = 1 (Request inspections) *
  public getProductsWithStatus(userID:number, status: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/products/${userID}/${status}`);
  }

  // * Update product status *
  public updateProductStatus(userID: number, productID: number, status: number): Observable<any> {
    return this.http.patch<any>(`${this.BASE_URL}/products/${userID}/${productID}`,status);
  }

}
