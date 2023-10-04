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

  public getProductsFromRemote(): Observable<any> {
    return this.http.get<any>("http://localhost:9292/products");
  }

  public getProductByIdFromRemote(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:9292/products/${id}`);
  }
}
