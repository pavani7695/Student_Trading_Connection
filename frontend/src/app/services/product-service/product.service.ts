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

  public getProductsFromRemote(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/products`);
  }

  public getProductByIdFromRemote(id: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/products/${id}`);
  }

  public getSellerDetailsFromRemote(sellerID: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/users/${sellerID}`);
  }

  public addProductFromRemote(product: Product): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/products/saveProduct`, product);
  }

  public getProductsBySellerIDFromRemote(selerID: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/products/seller/${selerID}`);
  }
}
