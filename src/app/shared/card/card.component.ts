import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderService } from './services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input('cardDetails') cardDetails:any;

  @Output() cardClick = new EventEmitter();

  constructor(private service:HeaderService,private route:Router){

  }

  updateCart(item:any){
    // this.service.updateCart(item);
    console.table(item);
    
    this.route.navigate(['/home/product-details'],{queryParams:{
      brand:item.brand,
      type:item.productType,
      name:item.name
    }})
    
  }

}
