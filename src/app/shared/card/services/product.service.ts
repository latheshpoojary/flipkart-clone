import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL = environment.baseURL;

  constructor(private http:HttpClient) { }


  getAllLatestProduct(){
    return this.http.get(`${this.apiURL}/product/list`);
  }

  getAllRelatedProducts(queryParams:any){
    return this.http.get(`${this.apiURL}/product/related-product`,queryParams);
  }
}
