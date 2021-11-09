import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string,
  rating: object,
  category: string
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // fetch('https://fakestoreapi.com/products/1')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
  getProduct(value): Observable <Product[]>{
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/${value}`);
  }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
