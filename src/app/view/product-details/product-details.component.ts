import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/shared/card/services/header.service';
import { ProductService } from 'src/app/shared/card/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  productsDetails :any[]= [];

  constructor(private activatedRoute:ActivatedRoute,private service:ProductService,private headerservice:HeaderService){
    this.activatedRoute.queryParamMap.subscribe({
      next:(val)=>{
        console.log(val.get('name'),val.get('brand'),val.get('type'));
        const queryParams = {
          ...val

        }
        console.log(queryParams);
        
        this.service.getAllRelatedProducts(queryParams).subscribe({
          next:(val:any)=>{
            this.productsDetails = val; 
          }
        })
        
      }
    })
  }


  updateCart(item:any){


    this.headerservice.updateCart(item);
  }

  checkLogin(){
    const userDetails = localStorage.getItem('tokenLy')
  }
}
