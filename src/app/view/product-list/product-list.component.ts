import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/card/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  latestProduct =[];

  cheapestProduct = [];

  expensiveProduct = [];


  constructor(private service:ProductService,private route:Router){}

  ngOnInit(): void {
    this.service.getAllLatestProduct().subscribe({
      next:(val:any)=>{
        this.latestProduct = val.latestProduct;
        this.cheapestProduct = val.chepestProduct;
        this.expensiveProduct = val.expensiveProduct;

      }
    })
  }

  onProductClick(){
    console.log("clicked for card click");
    
    // this.route.navigate(['home/product-details'])
  }

}
